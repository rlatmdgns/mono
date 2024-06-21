import { assignInlineVars } from "@vanilla-extract/dynamic";
import { FONT_SIZE_OPTIONS, SIZE_OPTIONS } from "./Avatar.constants";
import { AvatarProps } from "./Avatar.interface";
import { theme } from "../../globalTheme.css";
import {
  avatar,
  avatarBackground,
  avatarBorder,
  avatarFontSize,
  avatarImage,
  avatarIsDisabled,
  avatarSize,
} from "./styles.css";

export const Avatar = ({
                         size = "md",
                         alt = "avatar",
                         src,
                         isBorder,
                         disabled,
                       }: AvatarProps) => {
  const isImage = !src?.includes("rgb");
  const firstName = alt?.charAt(0);
  const sizeToUse = `${String(SIZE_OPTIONS[size])}px`;
  const fontSize = `${String(FONT_SIZE_OPTIONS[size])}px`;
  const border = isBorder ? `1px solid ${theme.colors.white}` : "none";
  const disabledStyle = disabled ? "block" : "none";

  if (!isImage) {
    return (
      <div
        className={avatar}
        style={assignInlineVars({
          [avatarSize]: sizeToUse,
          [avatarFontSize]: fontSize,
          [avatarBorder]: border,
          [avatarBackground]: src,
          [avatarIsDisabled]: disabledStyle,
        })}
      >
        {firstName}
      </div>
    );
  }

  return (
    <div
      className={avatar}
      style={assignInlineVars({
        [avatarSize]: sizeToUse,
        [avatarBorder]: border,
        [avatarIsDisabled]: disabledStyle,
      })}
    >
      <img
        className={avatarImage}
        src={src}
        width={sizeToUse}
        height={sizeToUse}
        alt={alt}
      />
    </div>
  );
};
