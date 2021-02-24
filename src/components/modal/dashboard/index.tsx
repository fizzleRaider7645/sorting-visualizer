import React from 'react'
import { generateAndShuffleNewArray } from '../../../helpers/index'
import { Bar, Container } from './subcomponents'

const Dashboard = () => {
    const newArray = generateAndShuffleNewArray(10).map((number, idx) => (
        <Bar width={number * 10} key={idx} />
    ))
    return <Container width={100}>{newArray}</Container>
}

export default Dashboard
