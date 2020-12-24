import { Nav } from './navbar.styled';
import NavbarItem from './navbarItem';

const Navbar = () => {
    return (
        <Nav>
            <NavbarItem item="Home" />
            <NavbarItem item="About" />
            <NavbarItem item="Skills" />
            <NavbarItem item="Works" />
            <NavbarItem item="Pricing" />
            <NavbarItem item="Contact" />
        </Nav>
    );
};  

export default Navbar;