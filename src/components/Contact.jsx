import React from 'react';
import Popup from 'reactjs-popup';
import "../css/component styling/contact.css"
export const Contact = () => (
    <Popup
        trigger={<p className="button"> Contact Us </p>}
        modal
        nested
    >
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <div className="header"> Contact Us </div>
                <div className="content">
                    <button>WhatsApp</button>
                    <button>Call</button>
                    <button>Email</button>
                </div>
                <div className="actions">
                    <button
                        className="button"
                        onClick={() => {
                            console.log('modal closed ');
                            close();
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        )}
    </Popup>
);