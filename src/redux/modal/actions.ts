import { SetModalIsOpenAction } from "./typings"

export const setModalIsOpen = (): SetModalIsOpenAction => {
    return { type: 'SET_MODAL_IS_OPEN' }
}