import styled from 'styled-components'

interface BarProps {
    width: number
    comparator?: boolean
    pivot?: boolean
}

interface ContainerProps {
    width: number
}

export const Bar = styled.div<BarProps>`
    background-color: ${(props) => props.comparator ? 'yellow' : 'red'};
    margin: 5px;
    height: 25px;
    width: ${(props) => props.width}%;
`

export const Container = styled.div<ContainerProps>`
    width: ${(props) => props.width}%; 
`