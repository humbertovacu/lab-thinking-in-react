function searchBar(){
    return(
        <div>
            <h2>Search</h2>
            <input type="text"></input>
            <br/>
            <div>
                <input type="checkbox" id="inStock" name="isInStock"/>
                <label htmlFor="inStock">Only show products in stock</label>
            </div>
        </div>
    )
}

export default searchBar

