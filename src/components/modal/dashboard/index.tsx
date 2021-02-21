import React from 'react'
import { generateAndShuffleNewArray } from '../../../helpers/index'
import { Bar } from './subcomponents'

const Dashboard = () => {
    const newArray = generateAndShuffleNewArray(1000).map((number, idx) => (
        <Bar width={number} key={idx}>
            {number}
        </Bar>
    ))
    return <div>{newArray}</div>
}

export default Dashboard
