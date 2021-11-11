import {Flex, SimpleGrid, Box, Text, theme} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import {ApexOptions} from 'apexcharts'
import { Header } from "../components/Header";
import {Sidebar} from "../components/Sidebar"

// Lazy load, para carregar um componente de uma forma dinâmica
const Chart = dynamic(() => import('react-apexcharts'), {
  // Dessa form, esse componente só vai ser carregado no browser e não no servidor Next
  ssr: false
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-11-11T00:00:00.000Z',
      '2021-11-12T00:00:00.000Z',
      '2021-11-13T00:00:00.000Z',
      '2021-11-14T00:00:00.000Z',
      '2021-11-15T00:00:00.000Z',
      '2021-11-16T00:00:00.000Z',
      '2021-11-17T00:00:00.000Z',
    ]

  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }

}

const series = [
  {name: 'teste1', data: [31, 233, 15, 67, 45, 69] }
]


export default function Dashboard() {
  return(
    <Flex 
      direction="column"
      h="100vh"
    >
      <Header/>
      <Flex 
        w="100%"
        my="6"
        maxWidth={1100}
        mx="auto"
        px="6"
      >
        <Sidebar />
        <SimpleGrid 
          flex="1" // Para que o grid ocupe o espaço restante
          gap="4" // espaçamento entre os itens do grid
          minChildWidth="320px" // largura minima do grid
          align="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius="8">
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>
          <Box p="8" bg="gray.800" borderRadius="8">
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box> 
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}