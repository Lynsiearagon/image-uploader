"use client";

import React, { useRef, useState } from "react";

const FileUploader = () => {
  const fileUploadInput = useRef<HTMLInputElement>(null);
  const [filesStagedForUpload, setFilesStagedForUpload] = useState<File[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileUploadInput.current?.click();
  };

  const cancelUpload = () => {
    setFilesStagedForUpload([]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.length) {
      const uploadedFiles: File[] = [];

      Object.values(e.target.files).forEach((file) => {
        uploadedFiles.push(file);
      });
      setFilesStagedForUpload(uploadedFiles);
    } else {
      setFilesStagedForUpload([]);
    }
  };

  const saveFiles = () => {
    // send the data in a POST request to the api; Something alongs the lines of ('/api/photos)
    const data = JSON.stringify(filesStagedForUpload);
    console.log(data);
    setFilesStagedForUpload([]);
  };

  return (
    <div>
      <input
        hidden
        type="file"
        className="border"
        ref={fileUploadInput}
        multiple
        onChange={handleFileChange}
      />

      {filesStagedForUpload.length === 0 ? (
        <button
          className="border py-2 px-8 cursor-pointer"
          onClick={(e) => handleClick(e)}
        >
          Upload
        </button>
      ) : (
        <div className="flex flex-row gap-4">
          <button
            className="bg-green-600 text-white cursor-pointer border py-2 px-8 cursor-pointer"
            onClick={saveFiles}
          >
            Save
          </button>
          <button
            className="text-red-700 cursor-pointer"
            onClick={cancelUpload}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
