

const filterProductById = (arrayOfProducts, id) => {
    return arrayOfProducts.find((product) => product.id == id);
}

export { filterProductById };