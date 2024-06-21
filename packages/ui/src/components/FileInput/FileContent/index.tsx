import { fileName, wrapper } from "./styles.css";
import { Icon } from "../../Icon";
import { Button } from "../../Button";

interface FileContentProps {
  file?: File;
  onClick?: () => void;
}

export const FileContent = ({file, onClick}: FileContentProps) => {
  if (!file) return null;
  return (
    <div className={wrapper}>
      <Icon icon="icon/document-solid" color="blue500"/>
      <span className={fileName}>{file?.name}</span>
      {onClick && (
        <Button
          onClick={onClick}
          size="xs"
          state="primary"
          style="mono"
          leadingIcon="icon/cancle-line1"
        />
      )}
    </div>
  );
};
