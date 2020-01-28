import React, { Component } from 'react';
// ReactDOM.createPortal(child, container)
const display = { display: 'block' };
const hide = { display: 'none' };

class Modal extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="modal" style={data.isFinish ? display : hide}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" onClick={this.props.toggle}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                姓名:
                {data.name}
              </p>
              <p>
                信箱:
                {data.email}
              </p>
              <p>
                電話:
                {data.phone}
              </p>
              <p>
                主題:
                {data.theme}
              </p>
              <p>
                訊息:
                {data.message}
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={this.props.toggle}>取消</button>
              <button type="button" className="btn btn-primary">確認送出</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
