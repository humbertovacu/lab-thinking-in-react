function ProductRow(props){
    const { products } = props;
    const productsArray = [...products]
    return(
    productsArray.map(item => {
        return(
        <tr key={item.id}>
            {item.inStock ? <td className="inStock">{item.name}</td> : <td className="noStock">{item.name}</td> }
            <td>{item.price}</td>
        </tr>
        )
        }))
}

export default ProductRow