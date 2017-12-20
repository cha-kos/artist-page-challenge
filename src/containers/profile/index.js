import React from 'react';
// import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from '../input';
import Bio from '../bio';

const Profile = props => (
  <div>
    <header>
    <div className='header-background'></div>
      <Input className="name" value={props.name}/>
    </header>
    <button onClick={() => props.changePage()}>Go to about page via redux</button>
    <Input className="hometown" value={props.hometown}/>
    <Bio className="bio"/>
  </div>
);

const mapStateToProps = state =>{
  window.state = state;
  return ({
    name: state.user.name,
    hometown: state.user.hometown,
    bio: state.user.bio
  });
};

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
