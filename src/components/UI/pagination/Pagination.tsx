import { MyButton } from '../button/MyButton'
import { getPagesArray } from '../../utils/pages'

interface PaginationProps {
  totalPages: number
  page: number
  changePage: (page: number) => void
}

export const Pagination = ({ totalPages, page, changePage }: PaginationProps) => {
  const pagesArray = getPagesArray(totalPages)

  return (
    <div style={{ marginTop: 30 }}>
      {pagesArray.map((p) => (
        <MyButton
          key={p}
          onClick={() => changePage(p)}
          style={{
            fontWeight: p === page ? 'bold' : 'normal',
            border: p === page ? '2px solid black' : '1px solid gray',
          }}>
          {p}
        </MyButton>
      ))}
    </div>
  )
}
