import React from 'react'
import * as Styles from './styles'
import { Icon } from '@repo/ui'

interface PaginationProps {
  href?: string
  currentPage?: number
  limit: number
  totalPage?: number
}

export const Pagination = ({ href, currentPage, limit, totalPage }: PaginationProps) => {
  if (!currentPage) {
    return null
  }
  const isNotTotalPage = !totalPage || totalPage <= 1
  if (isNotTotalPage) {
    return null
  }

  const pageGroup = Math.ceil(currentPage / limit)
  let lastNumber = pageGroup * limit
  if (lastNumber > totalPage) {
    lastNumber = totalPage
  }
  const firstNumber = lastNumber < limit ? 1 : lastNumber - (limit - 1) // 1
  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let index = firstNumber; index <= lastNumber; index++) {
      pageNumbers.push(
        <Styles.Item key={`page_${index}`}>
          <Styles.StyledLink href={`${href}?page=${index}`} $isActive={currentPage === index}>
            {index}
          </Styles.StyledLink>
        </Styles.Item>,
      )
    }
    return pageNumbers
  }

  return (
    <Styles.Wrapper>
      {currentPage !== 1 && (
        <Styles.StyledLink href={`${href}?page=${currentPage - 1}`}>
          <Icon icon="icon/left-line" color="neutralGray700" />
        </Styles.StyledLink>
      )}
      <Styles.List>{renderPageNumbers()}</Styles.List>
      {currentPage !== totalPage && (
        <Styles.StyledLink href={`${href}?page=${currentPage + 1}`}>
          <Icon icon="icon/right-line" color="neutralGray700" />
        </Styles.StyledLink>
      )}
    </Styles.Wrapper>
  )
}
