import React, { useState } from 'react'
import { CloseModal } from './CloseModalPopUp';

export default function Alert({status, message}) {

	const [showAlert, setshowAlert] = useState(true);
	const ref = React.createRef();

	setTimeout(() => {
		ref.current?.click();
	}, 10000);

	return (
		showAlert && <div className="modalOverlay">
			<div className="alertPopup-container">
				<div className={`alertPopup alertPopup-${status}`}>
					<div className="alertPopupMessage">
						{message}
					</div>
					<div className="alertPopupDismissal">
						<CloseModal reference={ref} />
					</div>
				</div>
			</div>
		</div>
	)
}
