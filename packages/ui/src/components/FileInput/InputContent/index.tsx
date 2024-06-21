import { inputStyle, placeholderStyle, wrapper } from "./styles.css";
import { Icon } from "../../Icon";

interface InputContentProps {
  file?: File;
  register?: unknown;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  placeholder?: string;
  isReadOnly?: boolean;
}

export const InputContent = ({
                               file,
                               register,
                               onChange,
                               accept = ".pdf",
                               placeholder = "15MB 이하의 PDF파일만 업로드 가능합니다.",
                               isReadOnly,
                             }: InputContentProps) => {
  if (file) return null;

  if (register) {
    return (
      <label
        className={wrapper}
        style={{
          pointerEvents: isReadOnly ? "none" : "auto",
        }}
      >
        <input
          type="file"
          accept={accept}
          {...register}
          className={inputStyle}
        />
        <span className={placeholderStyle}>{placeholder}</span>
        <Icon color="black" icon="icon/upload-solid" size={16}/>
      </label>
    );
  }

  if (onChange) {
    return (
      <label
        className={wrapper}
        style={{
          pointerEvents: isReadOnly ? "none" : "auto",
        }}
      >
        <input
          type="file"
          accept={accept}
          onChange={onChange}
          className={inputStyle}
        />
        <span className={placeholderStyle}>{placeholder}</span>
        <Icon color="black" icon="icon/upload-solid" size={16}/>
      </label>
    );
  }

  return (
    <label
      className={wrapper}
      style={{
        pointerEvents: isReadOnly ? "none" : "auto",
      }}
    >
      <input type="file" accept={accept} className={inputStyle}/>
      <span className={placeholderStyle}>{placeholder}</span>
      <Icon color="black" icon="icon/upload-solid" size={16}/>
    </label>
  );
};
