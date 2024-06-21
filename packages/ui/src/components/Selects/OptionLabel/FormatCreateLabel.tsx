import { formatOptionLabel, formatOptionLabelText } from "./styles.css";
import { Button } from "../../Button";

interface FormCreateLabelProps {
  searchValue: string;
  onCreate: (value: string) => void;
}

export const FormCreateLabel = ({
                                  searchValue,
                                  onCreate,
                                }: FormCreateLabelProps) => {
  const handleSelect = () => {
    if (!onCreate) return;
    onCreate(searchValue);
  };

  return (
    <div className={formatOptionLabel}>
      <p className={formatOptionLabelText}>검색 결과가 없습니다.</p>
      {searchValue && (
        <Button
          size="xs"
          state="secondary"
          style="fill-weak"
          text={`"${searchValue}" 선택`}
          onClick={handleSelect}
        />
      )}
    </div>
  );
};
