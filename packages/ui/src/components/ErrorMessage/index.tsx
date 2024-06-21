import { Icon } from "../Icon";
import { wrapper } from "./styles.css";

interface ErrorMessageProps {
  error?: unknown;
}

export const ErrorMessage = ({error}: ErrorMessageProps) => {
  if (!error) return null;

  return (
    <div className={wrapper}>
      <Icon icon="icon/info-solid" color="red500" size={14}/>
      {error as string}
    </div>
  );
};
