import Image from "next/image";

const UploadedImage = ({ image }) => {
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
