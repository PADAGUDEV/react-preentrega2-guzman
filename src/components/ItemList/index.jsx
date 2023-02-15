import {Item} from '../Item';

export const ItemList = ({productsList}) => {

    console.log(productsList)
    return (productsList.list.map((product) =>{

        return (
            <li key={product.id}>
                <Item  product={product} />
            </li>
        )
    }))
};