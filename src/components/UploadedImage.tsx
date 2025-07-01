import Image from "next/image";

type Image = {
  id: number;
  thumbnail: {
    lqip: "string";
    alt_text: "string";
    width: number;
    height: number;
  };
};

interface UploadedImageProps {
  image: Image;
}

const UploadedImage = ({ image }: UploadedImageProps) => {
  return (
    <Image
      src={image.thumbnail.lqip}
      alt={image.thumbnail.alt_text}
      key={image.id}
      width={image.thumbnail.width}
      height={image.thumbnail.height}
      className="w-full h-full object-cover"
    />
  );
};

export default UploadedImage;
