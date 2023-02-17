import {Item} from '../Item';

export const ItemList = ({productsList}) => {
    // console.log(productsList)
        return (
            <li key={productsList.id}>
                <Item  product={productsList} />
            </li>
        )
};