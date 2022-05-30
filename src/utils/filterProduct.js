

const filterProductById = (arrayOfProducts, id) => {
    return arrayOfProducts.find((product) => product.id === parseInt(id));
}
const filterProductsByCategory = (arrayOfProducts, category) => {
    return arrayOfProducts.filter((product) => product.category === category)
}
export { filterProductById, filterProductsByCategory };