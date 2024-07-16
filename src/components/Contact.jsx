import "../css/component styling/contact.css";
import Popup from "reactjs-popup";

const Contact = () => {
  const phoneNumber = "+917385395199";
  const email = "sheshnalwar@gmail.com";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Popup trigger={<p className="button"> Contact Us </p>} modal nested>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Contact Us </div>
          <div className="content">
            <button onClick={handleWhatsAppClick}>WhatsApp</button>
            <button onClick={handleCallClick}>Call</button>
            <button onClick={handleEmailClick}>Email</button>
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
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
};

export default Contact;
