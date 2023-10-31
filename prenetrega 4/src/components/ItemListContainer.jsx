import "./ItemListContainer.css"
export const ItemListContainer = (props) =>{
    const{ producto, id ,precio,} = props
    return(
        <div className="card">
            <h2>{producto}</h2>
            <p>ID: {id}</p>
            <h4> precio:{precio}</h4>
        </div>
    )
}
export default ItemListContainer;