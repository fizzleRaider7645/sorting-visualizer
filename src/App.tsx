import React from 'react'
import Header from './ui/organisms/Header'
import { useDispatch, useSelector } from 'react-redux'
import { setModalIsOpen } from './redux/modal/actions'
import { RootState } from './store'
import ReactModal from './components/modal'
import PrimaryButton from './ui/atoms/Button'

const App = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setModalIsOpen())
    }

    const { isModalOpen } = useSelector((state: RootState) => {
        return { isModalOpen: state.modalReducer.isOpen }
    })

    return (
        <div className="App">
            <Header
                title="Sorting Visualizer"
                navList={[
                    <PrimaryButton
                        label="Algorithms"
                        handleOnClick={handleClick}
                    />,
                    <PrimaryButton label="Kevin" handleOnClick={handleClick} />,
                    <PrimaryButton
                        label="Joe Rogan"
                        handleOnClick={handleClick}
                    />,
                    <PrimaryButton
                        label="Bobby Lee"
                        handleOnClick={handleClick}
                    />,
                    <PrimaryButton
                        label="Chögyam Trungpa"
                        handleOnClick={handleClick}
                    />
                ]}
            />

            {isModalOpen && <ReactModal isOpen={isModalOpen} />}
        </div>
    )
}

export default App
