import { useState } from 'react';

function SearchBar(props){
    const { products, setProducts, jsonData } = props;
    const [isAvailable, updateProducts] = useState(false)
    const availableProducts = jsonData.filter(product => product.inStock);

    const filterResults = (event) => {
        const chooseArray = (selectedArray) => {
        isAvailable ? selectedArray = jsonData : selectedArray = availableProducts;
        const userSearch = event.target.value;
        const productFilter = selectedArray.filter(item => {
            const itemName = item.name;
            const placeholderName = itemName.slice(0, userSearch.length)
            return placeholderName === userSearch
        })
        if(productFilter.length !== 0){
        setProducts(productFilter)
        } else if(userSearch.length !== 0 && productFilter.length === 0){
        setProducts(productFilter)
        } else {
        setProducts(products)
        }}
        chooseArray()
    }

    const filterAvailable = (event) => {
        if (event.target.checked) {
            const productsInStock = products.filter(product => product.inStock)
            updateProducts(false)
            setProducts(productsInStock)
        } else { updateProducts(true);
            setProducts(jsonData)}
    }


    return(
        <div>
            <h2>Search</h2>
            <input type="text" onChange={filterResults}></input>
            <br/>
            <div>
                <input type="checkbox" id="inStock" name="isInStock" onChange={filterAvailable}/>
                <label htmlFor="inStock">Only show products in stock</label>
            </div>
        </div>
    )
}

export default SearchBar

