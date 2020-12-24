import { NavItem } from '../navbar.styled';

const NavbarItem = ({ item }: { item: string; }) => {
    return <NavItem>{item}</NavItem>;
};

export default NavbarItem;