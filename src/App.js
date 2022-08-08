import React, {Component} from 'react';
import Navbar from './component/layout/layout/Navbar';
import Users from './component/layout/Users/Users';
import './App.css';
import axios from 'axios';
import Search  from './component/layout/Users/search';

  class App extends Component {
    state = {
      users : [],
      loading: false
    }
  //  async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   this.setState({ loading: true})
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //   client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)     

  //   this.setState({ users : res.data, loading: false})
  //   }
    searchUsers = async text =>{
      this.setState({ loading: true})
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)     
  
      this.setState({ users : res.data.items, loading: false})    }

    render(){
      return (
        <div className="App">
          <Navbar/>
          <Search searchUsers={this.searchUsers}/>
          <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}/>
          </div>         
        </div>
      );
    }
 
}

export default App;
