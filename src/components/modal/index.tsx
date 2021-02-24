import { ReactNode } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { setModalIsOpen } from '../../redux/modal/actions'
import { ModalContainer } from './subcomponents'

interface ReactModalProps {
    isOpen: boolean
    template?: ReactNode
}

const ReactModal = (props: ReactModalProps) => {
    const dispatch = useDispatch()
    const { isOpen, template } = props

    const handleOnClick = () => {
        dispatch(setModalIsOpen())
    }
    return (
        <ModalContainer>
            <Modal isOpen={isOpen}>
                <button onClick={handleOnClick}>Close</button>
                {template}
            </Modal>
        </ModalContainer>
    )
}

export default ReactModal
