import '.NavBar.css';
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
    <li className='navbar__menu--aboutUs'>Acerca de nosotros
        {/* <a href="/"></a> */}
    </li>

    
</ul>
<div className='menuLogo'>
    <img className="logoWhite" src={LogoWhite} alt="COMOSANO" />
</div>    
</div>
);

export function NavBar (){
    
    return()
}