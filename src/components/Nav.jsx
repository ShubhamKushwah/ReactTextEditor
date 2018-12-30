import React, {Component} from 'react';
import Modal from 'react-modal';

export default class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: true,
    };
  }

  toggleModal = e => {
    if (e) e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {

    const {modal} = this.state;

    return (
      <nav>
        <div>
          <img className={'nav_logo'} src={'assets/logo.png'} alt="logo"/>
          <span className={'nav_title'}>Code Box</span>
        </div>

        <div>
          <a href="#" className={'login_link'} onClick={this.toggleModal}>Log in / Register</a>
        </div>

        <Modal
          className='custom_modal'
          isOpen={modal}>
          <div>
            <div className={'custom_modal_header'}>
              <span>Sign up or Log in to Code Box</span>
              <i className="fas fa-times" onClick={this.toggleModal} />
            </div>
            <div className={'custom_modal_body'}>
              <button className={'g_btn'}>
                <img src={'assets/g_logo.png'} alt="G" />
                <span>Continue with Google</span>
              </button>
              <button className={'f_btn'}>
                <img src={'assets/f_logo.png'} alt="F" />
                <span>Continue with Facebook</span>
              </button>
              <p className={'or_line'}>OR</p>
              <p className={'text-center'}>Use your email address</p>
              <div className={'login_btns'}>
                <button>
                  Log in
                </button>
                <button>
                  Sign up
                </button>
              </div>
              <p className={'btm_text'}>By logging in, you agree to CodeBox's Terms of Service and Privacy Policy</p>
            </div>
          </div>
        </Modal>
      </nav>
    );
  }
}