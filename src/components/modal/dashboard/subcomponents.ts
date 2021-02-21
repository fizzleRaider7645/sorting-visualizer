import styled from 'styled-components'

interface BarProps {
    width: number
}

export const Bar = styled.div<BarProps>`
    background-color: red;
    margin: 5px;
    width: ${(props) => props.width}px;
`
