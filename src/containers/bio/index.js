import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { update } from '../../modules/user';

class Bio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: props.user[props.className],
      className: props.className,
      editing: false
    };
  }

  onChange(e){
    return e => {
      this.setState({value: e.target.value}, () => this.props.update(this.state));
    };
  }
  render(){
    return (<div className='input-container'>
    <textarea
            className={this.state.className}
            placeholder=''
            type="text"
            value={this.state.value}
            onChange={this.onChange()}
            />
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  update: (attribute) => dispatch(update(attribute))
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bio);
