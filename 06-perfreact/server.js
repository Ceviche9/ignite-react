module.exports = () => {
  const data = {
    products: [],
  }

  for (let i = 0; i < 1000; i++) {
    data.products.push({
      id: i,
      price:`R$ ${50 + i},00 reais`,
      title: `Camiseta ${i}`

    })
  }

  return data;
}