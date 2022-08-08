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
    searchUsers : PropTypes.func.isRequired
    }
    onSubmit = e => {
     e.preventDefault();
     this.props.searchUsers(this.state.text);
     console.log(this.state.text)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
            <input type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder='search users'/>
            <input type="submit" value='search' className='btn btn-dark btn-block'/>
            <input type="submit" value='Clear' className='btn btn-light btn-block'/>
          
        </form>
      </div>
    )
  }
}

export default search
