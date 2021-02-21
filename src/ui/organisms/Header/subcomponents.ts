import styled from 'styled-components'

export const Title = styled.h2`s
    font-size: 20px;
    flex: start;
    padding-right: 50px;
    text-transform: uppercase;
    font-family: 'Press Start 2P', cursive;
`

export const InnerWrapper = styled.div`
    display: flex;
    min-height: 100px;
    padding: 15px 0px 15px 0px;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 960px) {
		justify-content: space-between;

    }
`

export const OutterWrapper = styled.div`
    display: flex;
    border-radius: 5px;
    justify-content: center;
    padding: 10px;
    background-color: #f5f5f5;
    border: 2px solid #e74c3c;
    @media (min-width: 960px) {
		width: auto;

    }
`


export const NavList = styled.ul`
    display: flex;
    align-items: stretch; /* Default */
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
`

export const NavListItem = styled.li`
    display: block;
    flex: 0 1 auto; /* Default */
    list-style-type: none;
`