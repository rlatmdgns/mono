import { Button } from "../Button";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";
import {
  contents,
  contentsTop,
  subtitleStyle,
  titleStyle,
  wrapper,
} from "./styles.css";

interface ModalHeaderProps {
  title: string;
  subtitle?: string;
  width?: string;
  information?: string;
  onClick?: () => void;
}

export const ModalHeader = ({
  title,
  subtitle,
  information,
  width = "100%",
  onClick,
}: ModalHeaderProps) => {
  return (
    <div className={wrapper} style={{ width }}>
      <div className={contents}>
        <div className={contentsTop}>
          <p className={titleStyle}>{title}</p>
          {information && (
            <Tooltip text={information}>
              <Icon icon="icon/info-line" color="neutralGray400" />
            </Tooltip>
          )}
        </div>
        {subtitle && <p className={subtitleStyle}>{subtitle}</p>}
      </div>
      {onClick && (
        <Button
          leadingIcon="icon/cancle-line1"
          state="secondary"
          style="mono"
          size="sm"
          onClick={onClick}
        />
      )}
    </div>
  );
};
