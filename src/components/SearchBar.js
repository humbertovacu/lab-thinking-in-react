function searchBar(props){
    const { products, setProducts, jsonData } = props;
    const filterResults = (event) => {
        const userSearch = event.target.value;
        const productFilter = jsonData.filter(item => {
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
        }
    }

    return(
        <div>
            <h2>Search</h2>
            <input type="text" onChange={filterResults}></input>
            <br/>
            <div>
                <input type="checkbox" id="inStock" name="isInStock" />
                <label htmlFor="inStock">Only show products in stock</label>
            </div>
        </div>
    )
}

export default searchBar

