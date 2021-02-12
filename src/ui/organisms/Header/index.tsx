import React, { ReactElement } from 'react'
import {
    InnerWrapper,
    NavList,
    NavListItem,
    OutterWrapper,
    Title
} from './subcomponents'

interface HeaderProps {
    title: string
    navList: Array<ReactElement>
}

const Header = (props: HeaderProps) => {
    const { navList, title } = props

    const list = navList.map((navButton: ReactElement, index: number) => {
        return <NavListItem key={index}>{navButton}</NavListItem>
    })

    return (
        <OutterWrapper>
            <InnerWrapper>
                <Title>{title}</Title>
                <NavList>{list}</NavList>
            </InnerWrapper>
        </OutterWrapper>
    )
}

export default Header
