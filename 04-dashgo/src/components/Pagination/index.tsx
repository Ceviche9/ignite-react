import {Stack, Box, Text} from '@chakra-ui/react'
import { PaginationItens } from './Itens';

type PaginationProps = {
  totalCountOfRegister: number
  registerPerPage?: number
  currentPage?: number
  onPageChange:(page: number) => void
}

const siblingsCount = 1;

// generatePagesArray(2, 5) => [3, 4, 5]
function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}


export const Pagination = ({
  totalCountOfRegister,
  currentPage = 1,
  registerPerPage = 10,
  onPageChange,
}: PaginationProps) => {
  const lastPage = Math.floor(totalCountOfRegister / registerPerPage)

  const previousPages = currentPage > 1
  ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
  : []

  const nextPages = currentPage < lastPage
  ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
  : []

  return(
    <Stack
      direction={["column","row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6" // Espaçamento entre os itens
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> <strong> de </strong> <strong>100</strong>
      </Box>
      <Stack
        direction="row"
        spacing="2"
      >
        {currentPage > (1 + siblingsCount) && (
          <>
           <PaginationItens paginationPageChange={onPageChange} number={1} />
           {currentPage > (2 + siblingsCount) && (
             <Text color="gray.300" w="8" textAlign="center">...</Text>
           )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return(
            <PaginationItens paginationPageChange={onPageChange} key={page} number={page} />
          )
        })}

        <PaginationItens paginationPageChange={onPageChange} number={currentPage} isCurrent/>

        {nextPages.length > 0 && nextPages.map(page => {
          return(
            <PaginationItens paginationPageChange={onPageChange} key={page} number={page} />
          )
        })}

        {currentPage + siblingsCount < lastPage && (
          <>
           {(currentPage + 1 + siblingsCount) < lastPage && (
             <Text color="gray.300" w="8" textAlign="center">...</Text>
           )}
           <PaginationItens paginationPageChange={onPageChange} number={lastPage} />
          </>
        )}

      </Stack>
    </Stack>
  )
}