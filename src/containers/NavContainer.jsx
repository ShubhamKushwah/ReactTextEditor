import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';

const NavContainer = props => <Nav {...props} />;

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, {

})(NavContainer);
