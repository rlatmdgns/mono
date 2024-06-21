import { Button } from "../Button";
import { IconNames } from "../Icon";

interface ToastButtonProps {
  button?: {
    icon: IconNames;
    text: string;
    onClick: () => void;
  };
  state: "primary" | "secondary";
}

export const ToastButton = ({ button, state }: ToastButtonProps) => {
  if (!button) return null;

  const { onClick, icon, text } = button;

  return (
    <Button
      onClick={onClick}
      leadingIcon={icon}
      text={text}
      state={state}
      size="xs"
      style="fill-weak"
      width="fit-content"
    />
  );
};
