import { useState } from "react";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';
import Logo from '../images/logo.png';
import LogoWhite from '../images/logoWhite.png';

const NavigationBar = ({ visible }) => (
    <div id="navbar__menu" className={visible ? 'slideIn swing' : 'slideOut'} >
        <ul>
            <li className='navbar__menu--buy'>Compra por   WhatsApp
                {/* <a href="/"></a> */}
            </li>
            <li className='navbar__menu--stores'>Sucursales
                {/* <a href="/"></a> */}
            </li>
            <li className='navbar__menu--prodList'>Productos
                {/* <a href="/"></a> */}
            </li>
            <li className='navbar__menu--prodList'>Comprar
                {/* <a href="/"></a> */}
            </li>
            <li className='navbar__menu--aboutUs'>Acerca de nosotros
                {/* <a href="/"></a> */}
            </li>
            <li className = 'navbar__menu--aboutUs'>
                Acerca de nosotros repetidos
                
            </li>
        </ul>
        <div className='menuLogo'>
            <img className="logoWhite" src={LogoWhite} alt="COMOSANO" />
        </div>    
    </div>
);

function NavBar (){
    const [ visibility , setVisibility ] = useState(false);
    const handleClick = ()=>{ setVisibility(!visibility)

    }
    return(
        <div id="NavBar">
                <div className="nbContainer">
                    <img className="logo" src={Logo} alt="COMOSANO"/>
                    <CartWidget className="cart"/>
                    <button className="btnMenu" type="button" onClick={handleClick}>
                        {visibility ? <FontAwesomeIcon icon={faXmarkSquare} size="2x" color="green"/> : <FontAwesomeIcon icon={faBars} size="2x" color="green"/>}
                    </button>
                </div>
                <NavigationBar visible={visibility}/>
            </div>
    )
}
export default NavBar;