import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from './logo';

const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
    flex
    max-w-2xl
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
        </NavbarContainer>
    );
}
