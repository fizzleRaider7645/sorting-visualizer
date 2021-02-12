import { ButtonBase } from './subcomponents'

interface NavButtonProps {
    handleOnClick: () => void
    label: string
}

const PrimaryButton = (props: NavButtonProps) => {
    const { handleOnClick, label } = props
    return <ButtonBase onClick={handleOnClick}>{label}</ButtonBase>
}

export default PrimaryButton
