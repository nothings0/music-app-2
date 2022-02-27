import React from 'react';
import Album from './Album';
import Banner from './Banner';
import SuggestList from './SuggestList';

const SidebarCenter = () => {
    return (
        <>
        <Banner/>
        <Album/>
        <SuggestList/>
        </>
    )
};

export default SidebarCenter;
