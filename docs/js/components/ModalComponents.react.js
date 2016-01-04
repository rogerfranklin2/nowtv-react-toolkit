import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Modal extends React.Component {
  constructor() {
    super();
    this._toggleModal = this._toggleModal.bind(this);
  }

  render() {
    return (
      <section>
        <h2>Modal</h2>

        <h3>Title and content</h3>
        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Button classes='primary green' id="modalCta" onClick={ this._toggleModal.bind(this, 'modal1') }>Show modal</Toolkit.Button>
            <Toolkit.Modal title="Do you really want to have a modal?" ref="modal1">
              <Toolkit.Button classes='primary green' onClick={ this._toggleModal.bind(this, 'modal1') }>Yes</Toolkit.Button>
              <Toolkit.Button classes='primary default' onClick={ this._toggleModal.bind(this, 'modal1') }>No</Toolkit.Button>
            </Toolkit.Modal>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Modal title='Title' visible=false closeHandler=aCloseHander()></Toolkit.Modal>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Fully custom</h3>
        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Button classes='primary green' onClick={ this._toggleModal.bind(this, 'modal2') }>Show modal</Toolkit.Button>
            <Toolkit.Modal classes="custom-modal" ref="modal2">
              <div className="header">
                <h2>Hi, I am a custom modal</h2>
              </div>
              <div className="content">
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
                <p>Do what ya want with ma body</p>
              </div>
            </Toolkit.Modal>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Modal visible=false closeHandler=aCloseHander()></Toolkit.Modal>"}
              </code>
            </pre>
          </div>
        </div>

      </section>
    )
  }

  _toggleModal(modal) {
    this.refs[modal].toggle();
  }
}

export default Modal;
