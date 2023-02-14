// import { useState, useEffect} from "react";
// import { Link} from "react-router-dom";
// import { ItemList } from "../ItemList";
// import { useParams} from "react-router-dom";
// import { getFetch } from "../../helper/mock";


// export const ItemList Container = (props) {
// const { categ} = useParams();
// const [categories, setCategories] = useState([]);
// const [loading, setLoading] = useState(true);
// useEffect (() ⇒ {
// if (categ) {
// getFetch
// .then((prods) ⇒ {
// setCategories(
// setCategories
// );
// setLoading(false);
// })
// .catch((err) →
// console.log(
// No se ha podido traer los productos debido al error ${err}*
// )
// prods.filter((productos) productos.categoria = categ)
// } else {
// getFetch
// .then((prods) ⇒ {
// setCategories(prods);
// setLoading(false);
// }}
// .catch((err) →
// console.log(
// *No se ha podido traer los productos debido al error ${err}*
// )
// );
// }
// }, [categ]);
// return (
// <div className="item-list-container">
// <p>iten list container</p>
// <ul>
// {categories.map((category) ⇒ [
// return C
// <li key={category.id}>
// <Link to={'/item/${category.id}')>
// <h3>{category.name}</h3>
// </Link>
// <>>
// {categ
// category.categ 7 (
// <ItemList productsList={category} />
// ): (
// }}