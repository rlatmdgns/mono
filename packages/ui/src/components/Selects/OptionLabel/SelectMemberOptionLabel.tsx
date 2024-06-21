import { components, OptionProps } from "react-select";
import { googleIcon, memberOptionContent, memberOptionLabel, memberOptionLabelText, } from "./styles.css";
import { Avatar } from "../../Avatar";
import { IMAGES } from "../../../constants";

interface FormatOptionProps {
  value: string | boolean | number;
  label: string;
  image: string;
  google_connect?: boolean;
}

export const SelectMemberOptionLabel = (
  props: OptionProps<FormatOptionProps>,
) => {
  const {
    label,
    data: {image, google_connect},
  } = props;

  return (
    <components.Option {...props}>
      <div className={memberOptionLabel}>
        <div className={memberOptionContent}>
          <Avatar alt={label} src={image} size="sm"/>
          <span className={memberOptionLabelText}>{label}</span>
        </div>
        {google_connect && (
          <img className={googleIcon} src={IMAGES.GOOGLE_CALENDAR} alt=""/>
        )}
      </div>
    </components.Option>
  );
};
