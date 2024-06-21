import { Icon } from "../Icon";
import { list, styledLink, wrapper } from "./styles.css";

interface PaginationProps {
  href?: string;
  currentPage?: number;
  limit: number;
  totalPage?: number;
}

export const Pagination = ({
                             href,
                             currentPage,
                             limit,
                             totalPage,
                           }: PaginationProps) => {
  if (!currentPage) {
    return null;
  }
  const isNotTotalPage = !totalPage || totalPage <= 1;
  if (isNotTotalPage) {
    return null;
  }

  const pageGroup = Math.ceil(currentPage / limit);
  let lastNumber = pageGroup * limit;
  if (lastNumber > totalPage) {
    lastNumber = totalPage;
  }
  const firstNumber = lastNumber < limit ? 1 : lastNumber - (limit - 1); // 1
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let index = firstNumber; index <= lastNumber; index++) {
      pageNumbers.push(
        <li key={`page_${index}`}>
          <a
            className={styledLink({
              isActive: currentPage === index,
            })}
            href={`${href}?page=${index}`}
          >
            {index}
          </a>
        </li>,
      );
    }
    return pageNumbers;
  };

  return (
    <div className={wrapper}>
      {currentPage !== 1 && (
        <a
          className={styledLink({
            isActive: false,
          })}
          href={`${href}?page=${currentPage - 1}`}
        >
          <Icon icon="icon/left-solid" color="neutralGray700"/>
        </a>
      )}
      <ul className={list}>{renderPageNumbers()}</ul>
      {currentPage !== totalPage && (
        <a
          className={styledLink({
            isActive: false,
          })}
          href={`${href}?page=${currentPage + 1}`}
        >
          <Icon icon="icon/right-solid" color="neutralGray700"/>
        </a>
      )}
    </div>
  );
};
