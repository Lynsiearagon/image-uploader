"use client";
import SearchBar from "@/components/SearchBar";
import FileUploader from "@/components/FileUploader";
import { useEffect, useState } from "react";
import Image from "next/image";

type Image = {
  id: number;
  thumbnail: {
    lqip: "string";
    alt_text: "string";
    width: number;
    height: number;
  };
  source: string;
  name: string;
};

export default function Home() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    // This is to mock a GET request for the uploaded images from the server
    async function getPics() {
      const pics = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=2&limit=5`
      );

      if (pics.ok) {
        const data = await pics.json();
        setImages(data.data);
      }
    }

    getPics();
  }, []);

  const deleteImage = (imageId: number) => {
    // This would send a DELETE request to the server, something along the lines of '/api/images/ImageId'
    setImages(images.filter((image) => image.id !== imageId));
  };

  return (
    <main className="p-8 md:p-16 max-w-[1400px] flex flex-col border border-gray-300 gap-8 self-center rounded-sm shadow-lg">
      <h1 className="text-3xl lg:text-5xl flex flex-col border-b border-gray-300 pb-4 md:pb-8 items-center text-center md:text-start md:items-start text-blue-500 font-bold">
        Image Uploader{" "}
        <span className="text-lg lg:text-xl mt-1 md:mt-4 text-gray-700 font-normal">
          Lynsie Aragon
        </span>
      </h1>

      <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:pt-3">
        <SearchBar />
        <FileUploader setImages={setImages} images={images} />
      </div>
      <p className="text-lg text-gray-700 ">
        {images.length} {images.length === 1 ? "Image" : "Images"}
      </p>
      {images.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.values(images).map((image: Image) => {
            return (
              <div
                className="relative group hover:ring-1 hover:ring-gray-600 rounded-lg"
                key={image.id}
              >
                <Image
                  src={image.source ? image.source : image.thumbnail.lqip}
                  alt={image.name ? image.name : image.thumbnail.alt_text}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-lg"
                />

                <button
                  type="button"
                  className="cursor-pointer absolute z-10 top-5 right-5 text-xl group-hover:text-blue-600  group-hover:text-2xl hover:font-bold"
                  onClick={() => deleteImage(image.id)}
                  title="Delete image"
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No images uploaded. Click the Upload button to add images.</div>
      )}
    </main>
  );
}
