"use client";

import React, { useRef, useState } from "react";

// @ts-expect-error - Struggling to debug syntax
const FileUploader = ({ setImages, images }) => {
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
        // @ts-expect-error - Struggling to debug syntax
        file["id"] = images[images.length - 1].id + 1;
        // @ts-expect-error - Struggling to debug syntax
        file["source"] = URL.createObjectURL(file);
        uploadedFiles.push(file);
      });
      setFilesStagedForUpload(uploadedFiles);
    } else {
      setFilesStagedForUpload([]);
    }
  };

  const saveFiles = () => {
    // send the data in a POST request to the server; Something along the lines of ('/api/photos')
    if (filesStagedForUpload.length > 0) {
      setImages((prevImages: File[]) => [
        ...prevImages,
        ...filesStagedForUpload,
      ]);
    }
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
        accept="image/*"
      />

      {filesStagedForUpload.length === 0 ? (
        <button
          className="border py-2 w-40 cursor-pointer rounded-md bg-blue-500 text-white hover:opacity-90"
          onClick={(e) => handleClick(e)}
        >
          Upload
        </button>
      ) : (
        <div className="flex flex-row gap-4">
          <button
            className="bg-green-600 text-white cursor-pointer border py-2 w-36 cursor-pointer rounded-lg hover:opacity-90"
            onClick={saveFiles}
          >
            Save
          </button>
          <button
            className="text-red-700 cursor-pointer bold text-2xl hover:text-red-500"
            onClick={cancelUpload}
            title="Cancel"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
