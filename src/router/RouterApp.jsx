import { Routes , Route } from "react-router-dom";
import { AboutUs} from "../components/views/AboutUs.jsx";
import { Home } from "../components/views/Home.jsx";
import { ProductsList } from "../components/views/ProductsList.jsx";
import { Stores } from "../components/views/Stores.jsx";
import { ToBuy } from "../components/views/ToBuy.jsx";
import { Error404 } from "../components/views/Error404.jsx";

export const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route path="/aboutus"      element={<AboutUs />}>    </Route>
                <Route path="/"         element={<Home />}>       </Route>
                <Route path="/productslist" element={<ProductsList/>}></Route>
                <Route path="/stores"       element={<Stores />}>     </Route>
                <Route path="/tobuy"        element={<ToBuy />}>      </Route>
                <Route path="*"             element={<Error404 />}>   </Route>
            </Routes>
        </>
    )
};