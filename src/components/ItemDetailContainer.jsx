import { ItemDetail } from './ItemDetail.jsx';

// HIJO 1-3
export const ItemDetailContainer = ({product}) => {
    
    return (
        <>
            <p>Comp ItemDetailContainer</p>
            <ItemDetail product={product} />
        </>
    )
};