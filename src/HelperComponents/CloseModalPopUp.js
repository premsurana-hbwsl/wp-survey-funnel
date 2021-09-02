import { ModalContext } from '../Components/Context/ModalContext';
import { useContext } from "react";
export function CloseModal( props ) {
	let { setCurrentElement, setShowModal } = useContext(ModalContext);
	const closeModalFunction = () => {
		setCurrentElement(false);
		setShowModal(false);
	}
	return (
		<>
			<button onClick={closeModalFunction} ref={props?.reference ? props.reference : null}>✕</button>
		</>
	)
}