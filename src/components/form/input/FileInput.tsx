import { FC } from "react";

interface FileInputProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: FC<FileInputProps> = ({ onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <label className="cursor-pointer">
        <span className="inline-flex items-center justify-center rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-[#004778]/90">
          Hochladen
        </span>
        <input
          type="file"
          className="hidden"
          onChange={onChange}
          accept=".gif,.png,.jpg,.jpeg"
        />
      </label>
      <span className="text-sm font-medium text-gray-500">(GIF - PNG - JPG)</span>
    </div>
  );
};

export default FileInput;
