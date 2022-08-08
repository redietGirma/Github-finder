import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class search extends Component {
    state ={
        text: ''
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    static propTypes = {
    searchUsers : PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    showClear: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    }
    onSubmit = e => {
     e.preventDefault();
     if(this.state.text === ''){
     this.props.setAlert('please enter something', 'light')
     }else{
        this.props.searchUsers(this.state.text);
        console.log(this.state.text)
     }
    }
  render() {
    const {showClear, clearUsers} = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
            <input type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder='search users'/>
            <input type="submit" value='search' className='btn btn-dark btn-block'/>          
          
        </form>
        {showClear && <button  onClick={clearUsers}
         className='btn btn-light btn-block'>clear</button>}
        
      </div>
    )
  }
}

export default search
