import React from "react";
import { InputContent } from "./InputContent";
import { FileContent } from "./FileContent";

interface FileInputProps {
  files?: File[] | FileList;
  register?: unknown;
  onRemove?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  placeholder?: string;
  isReadOnly?: boolean;
}

export const FileInput = ({
  files,
  register,
  onRemove,
  onChange,
  accept,
  placeholder,
  isReadOnly = false,
}: FileInputProps) => {
  const file = files?.[0];
  return (
    <div>
      <InputContent
        file={file}
        register={register}
        accept={accept}
        placeholder={placeholder}
        onChange={onChange}
        isReadOnly={isReadOnly}
      />
      <FileContent file={file} onClick={onRemove} />
    </div>
  );
};
