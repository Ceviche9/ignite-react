import { Summary } from "../Summary/insex"
import { Table } from "../Table"
import { Container } from "./styled"

export const Dashboard = () => {
  return(
    <Container>
      <Summary />
      <Table/>
    </Container>
  )
}