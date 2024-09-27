import { ChangeEvent, DragEvent, FC, ReactNode, useState } from "react";
import { Texture } from "types/Texture";

interface ImagePickerProps {
  onImageLoad?: (image: Texture) => void;
}

const FileInput: FC<{
  imageName: Texture["name"];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ imageName, handleChange }) => (
  <>
    <input
      type="file"
      id="fileInput"
      accept="image/*"
      onChange={handleChange}
      className="hidden"
    />
    <label
      htmlFor="fileInput"
      className="mb-4 w-full text-center cursor-pointer btn btn-outline"
    >
      {imageName}
    </label>
  </>
);

const DropArea: FC<{
  dragging: boolean;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: () => void;
  children?: ReactNode;
}> = ({ dragging, handleDrop, handleDragOver, handleDragLeave, children }) => (
  <div
    className={`form-control w-full max-w-xs border-dashed border-2 ${dragging ? "border-primary bg-primary bg-opacity-10" : "border-gray-400"} p-4 rounded-md`}
    onDrop={handleDrop}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
  >
    {children}
    <div className="text-center text-gray-500 text-sm">
      or drop your image here
    </div>
  </div>
);

export const ImagePicker: FC<ImagePickerProps> = ({
  onImageLoad = () => {},
}) => {
  const [image, setImage] = useState<Texture | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);

  const processFile = (file: File) => {
    const imageUrl = URL.createObjectURL(file);

    const imageObject = new Image();
    imageObject.src = imageUrl;

    const image = {
      src: imageUrl,
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      width: imageObject.naturalWidth,
      height: imageObject.naturalHeight,
    };

    setImage(image);
    onImageLoad(image);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  return (
    <div className="flex lg:flex-row flex-col items-start lg:space-x-8">
      <DropArea
        dragging={dragging}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        handleDragLeave={handleDragLeave}
      >
        <FileInput
          imageName={image?.name || "No file selected"}
          handleChange={handleImageChange}
        />
      </DropArea>
    </div>
  );
};
