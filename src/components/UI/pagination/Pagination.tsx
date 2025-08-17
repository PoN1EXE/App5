import { MyButton } from '../button/MyButton'
import { getPagesArray } from '../../utils/pages'
import style from './Pagination.module.scss'
import { useMemo } from 'react'

interface PaginationProps {
  totalPages: number
  page: number
  changePage: (page: number) => void
}

export const Pagination = ({ totalPages, page, changePage }: PaginationProps) => {
  const pagesArray = useMemo(() => getPagesArray({ totalPages }), [totalPages])

  return (
    <div className={style.div}>
      {pagesArray.map((p) => (
        <MyButton
          key={p}
          onClick={() => changePage(p)}
          className={`${style.pageBtn} ${p === page ? style.active : ''}`}>
          {p}
        </MyButton>
      ))}
    </div>
  )
}
