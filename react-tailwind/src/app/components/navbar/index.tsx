import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from '../logo';
import NavItems from './navItems';

const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
    flex
    max-w-screen-2xl
    w-full
    flex-row
    justify-between
    items-center
    lg:px-12
  `}
`;

export default function Navbar() {
    return (
        <NavbarContainer>
            <Logo />
            <NavItems />
        </NavbarContainer>
    );
}
