import '../styles/modal.css';

const Modal = ({ setIsOpen, pdfPath }) => {

  return (
    <div className="modal" onClick={() => setIsOpen(false)}>
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Daniela Moreno CV</h2>
        <embed src={pdfPath} type="application/pdf" width="100%" height="700px" />
     
      </div>
    </div>
  );
};

export default Modal;

