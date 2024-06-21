import { Icon } from "../Icon";
import { content, contentDescription, contentTitle } from "./styles.css";

export interface WarningProps {
  title: string;
  description?: string;
  subDescription?: string;
}

export const Warning = ({
                          title,
                          description,
                          subDescription,
                        }: WarningProps) => {
  return (
    <div className={content}>
      <Icon icon="icon/warning-solid" color="orange500" size={64}/>
      <div className={contentTitle}>{title}</div>
      <div className={contentDescription}>
        {description}
        <br/>
        {subDescription}
      </div>
    </div>
  );
};
