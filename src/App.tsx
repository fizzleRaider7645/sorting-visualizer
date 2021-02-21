import React from 'react'
import Header from './ui/organisms/Header'
import { useDispatch, useSelector } from 'react-redux'
import { setModalIsOpen } from './redux/modal/actions'
import { RootState } from './store'
import ReactModal from './components/modal'
import PrimaryButton from './ui/atoms/Button'
import labels from './const/labels'
import Dashboard from './components/modal/dashboard'

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
                        label={labels.algorithm}
                        handleOnClick={handleClick}
                    />,
                    <PrimaryButton
                        label={labels.kevin}
                        handleOnClick={handleClick}
                    />,
                    <PrimaryButton
                        label={labels.joeRogan}
                        handleOnClick={handleClick}
                    />,
                    <PrimaryButton
                        label={labels.bobbyLee}
                        handleOnClick={handleClick}
                    />,
                    <PrimaryButton
                        label="Chögyam Trungpa"
                        handleOnClick={handleClick}
                    />
                ]}
            />
            <Dashboard />
            {isModalOpen && <ReactModal isOpen={isModalOpen} />}
        </div>
    )
}

export default App
