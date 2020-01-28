import React from 'react';
import PropTypes from 'prop-types';
// ReactDOM.createPortal(child, container)
const display = { display: 'block' };
const hide = { display: 'none' };

const Modal = (props) => {
  const { data, toggle } = props;
  const {
    name, email, phone, theme, message, isFinish,
  } = data;

  return (
    <div className="modal" style={isFinish ? display : hide}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" onClick={toggle}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              姓名:
              {name}
            </p>
            <p>
              信箱:
              {email}
            </p>
            <p>
              電話:
              {phone}
            </p>
            <p>
              主題:
              {theme}
            </p>
            <p>
              訊息:
              {message}
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={toggle}>取消</button>
            <button type="button" className="btn btn-primary">確認送出</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      theme: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      isFinish: PropTypes.bool.isRequired,
    }),
  ),
  toggle: PropTypes.func.isRequired,
};
