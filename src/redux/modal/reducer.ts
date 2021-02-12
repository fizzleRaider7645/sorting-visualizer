import { ModalAction } from "./typings"

const initialState = { isOpen: false }

const modalReducer = (state = initialState, action: ModalAction ) => {
    switch (action.type) {
      case 'SET_MODAL_IS_OPEN':
        return {
            ...state,
            isOpen: !state.isOpen
        }
      default:
        return state
    }
  }

  export default modalReducer
