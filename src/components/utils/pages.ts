interface PageCountParams {
  totalCount: number
  limit: number
}

interface PagesArrayParams {
  totalPages: number
}

export const getPageCount = ({ totalCount, limit }: PageCountParams) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = ({ totalPages }: PagesArrayParams) => {
  const result: number[] = []
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1)
  }
  return result
}
