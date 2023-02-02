const ItemListContainer =(props) => {
    return(
        <section className="item-list-container">
            <h2 style={props.style}>{props.greeting}</h2>
            <h3 className="item-list-container-title">Lista de nuestros productos</h3>
            <ul className="list">
                <li className="pordList">Harina Pan</li>
                <li className="pordList">Café colombia</li>
                <li className="pordList">Whiskies importados</li>
                <li className="pordList">Platano por kilo</li>
                <li className="pordList">Chocolate</li>
                <li className="pordList">Golosinas</li>
                <li className="pordList">Queso duro</li>
                <li className="pordList">Jugo congelado</li>
                <li className="pordList">Latita cerveza</li>
                <li className="pordList">Avichuelas</li>
            </ul>
        </section>
    )
}
export default ItemListContainer