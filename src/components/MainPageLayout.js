import React from 'react'
import Navs from './Navs'
import Title from './Title'

const MainPageLayout = ({ children }) => {
    return (
        <div>
            <Title title="Books Office" subtitle="Are you looking for a book or an author ?"/>
            <Navs />
            { children }
            
        </div>
    )
}

export default MainPageLayout
