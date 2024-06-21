import { colorType, Icon, IconNames } from "../Icon";

interface ArrowToggleProps {
  icon: IconNames;
  color?: colorType;
  expanded?: boolean;
  onClick?: () => void;
  size?: number;
}

export const ArrowToggle = ({
  icon,
  color,
  expanded,
  size = 16,
  onClick,
}: ArrowToggleProps) => {
  return (
    <Icon
      icon={icon}
      color={color}
      size={size}
      style={{ transform: expanded ? "rotate(180deg)" : "rotate(0)" }}
      onClick={onClick}
    />
  );
};
