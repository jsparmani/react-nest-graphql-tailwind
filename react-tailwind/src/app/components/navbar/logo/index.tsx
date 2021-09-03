import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogoImg from '../../../../assets/images/car-logo.png';

const LogoContainer = styled.div`
    ${tw`
      flex
      items-center
  `}
`;

const LogoText = styled.div`
    ${tw`
    text-xl
    text-black
    m-1
    md:text-2xl
    font-bold
  `}
`;

const Image = styled.div`
    width: auto;
    ${tw`
      h-6
      md:h-9
    `}

    img {
        width: auto;
        height: 100%;
    }
`;

export default function Logo() {
    return (
        <LogoContainer>
            <Image>
                <img src={CarLogoImg} />
            </Image>
            <LogoText>Yourcar.</LogoText>
        </LogoContainer>
    );
}
