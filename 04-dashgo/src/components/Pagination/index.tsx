import {Stack, Box} from '@chakra-ui/react'
import { PaginationItens } from './Itens';

export const Pagination = () => {
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
        <PaginationItens number={1} isCurrent/>
        <PaginationItens number={2} />
        <PaginationItens number={3} />
        <PaginationItens number={4} />
        <PaginationItens number={5} />
      </Stack>
    </Stack>
  )
}