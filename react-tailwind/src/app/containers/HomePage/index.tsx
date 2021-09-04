import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Navbar from '../../components/navbar';
import TopSection from './topSection';

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        h-full
        w-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
        </PageContainer>
    );
}
