import {Button} from "@chakra-ui/react"

type PaginationItemProps = {
  number: number
  isCurrent?: boolean
}
export const PaginationItens = ({isCurrent = false, number}: PaginationItemProps) => {
  if(isCurrent) {
    return(
      <Button 
      size="sm"
      fontSize="xs"
      width="6"
      bgColor="pink.500"
      disabled
      _disabled={{
        bgColor: "pink.500",
        cursor: "default"
      }}
    >
      {number}
    </Button>
    )
  }

  return(
    <Button 
      size="sm"
      fontSize="xs"
      width="6"
      bgColor="gray.700"
      _hover={{
        bgColor: "gray.500"
      }}
    >
      {number}
    </Button>
  )
}