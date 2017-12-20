import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { update } from '../../modules/user';

class Input extends React.Component {
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
      this.setState({value: e.target.value});
    };
  }

  update(){
    return () => {
      this.props.update(this.state);
    };
  }

  handleKeyPress(e){
    if (e && e.key === "Enter"){
      this.setState({editing: false}, this.update());
    }
  }

  render(){
    if (this.state.editing === true){
      return (
        <div className={`${this.state.className}-body`}>
          <input
            className={this.state.className}
            placeholder=''
            type="text"
            value={this.state.value}
            onChange={this.onChange()}
            onKeyPress={(e) => this.handleKeyPress(e)}
          />
          <button onClick={() => this.setState({editing: false}, this.update())}>
            save
          </button>
        </div>
      );
    } else {
      return (
        <div className={`${this.state.className}-body`}>
          <div
            className={this.state.className}
            placeholder=''
            type="text"
            value={this.state.value}
            onChange={this.onChange()}
            onClick={() => this.setState({editing: true})}
          >{this.state.value}
          </div>
          <button onClick={() => this.setState({editing: true})}>
            edit
          </button>
        </div>
      );
    }
  }
}
// unFocus={() => this.setState({editing: false}, () => console.log(this.state))}

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
)(Input);
