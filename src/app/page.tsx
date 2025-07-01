"use client";
import SearchBar from "@/components/SearchBar";
import FileUploader from "@/components/FileUploader";
import UploadedImage from "@/components/UploadedImage";
import { useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState<[]>([]);

  useEffect(() => {
    async function getPics() {
      const pics = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=2&limit=5`
      );

      if (pics.ok) {
        const data = await pics.json();
        console.log(data.data);
        setImages(data.data);
      }
    }

    getPics();
  }, []);

  return (
    <main className="m-12 p-12 max-w-[1400px] flex flex-col border border-black gap-8 self-center">
      <h1 className="text-2xl md:text-3xl my-4 md:my-8">
        Image Uploader - Lynsie Aragon
      </h1>
      <div className="flex flex-col md:flex-row justify-between w-full gap-4">
        <SearchBar />
        <FileUploader />
      </div>

      <p className="text-lg">{images.length} Images</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* This is just an example of the grid for now */}
        {Object.values(images).map((image) => {
          return <UploadedImage image={image} key={image.id} />;
        })}
      </div>
    </main>
  );
}
