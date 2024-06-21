import { tagList } from "./styles.css";
import { Tag } from "../Tag";

interface TagListProps {
  tags?: string[] | null;
  isDisabled?: boolean;
  isInaccessible?: boolean;
}

export const TagList = ({
                          tags,
                          isDisabled,
                          isInaccessible = false,
                        }: TagListProps) => {
  if (!tags || isInaccessible) return null;
  if (!Array.isArray(tags)) {
    return <Tag text={tags} isDisabled={isDisabled} type="gray"/>;
  }
  return (
    <div className={tagList}>
      {tags?.map((tag, index) => (
        <Tag key={index} text={tag} isDisabled={isDisabled} type="gray"/>
      ))}
    </div>
  );
};
