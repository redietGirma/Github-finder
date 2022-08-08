import React, {Component} from 'react';
import Navbar from './component/layout/layout/Navbar';
import Users from './component/layout/Users/Users';
import './App.css';
import Alert from './component/layout/layout/Alert';
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

      //clears users
    clearUsers = () => this.setState( {users: [], loading: false })

    //sets allert
    setAlert = (msg, type) => {
      this.setState({ alert: {msg , type}})
      setTimeout(() => this.setState({alert: null}), 3000) 
    }
    render(){
      const {loading, users, alert} = this.state;
      return (
        <div className="App">
          <Navbar/>         
          <div className='container'>
          <Alert alert={alert}/>
          <Search searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers} 
          showClear={users.length > 0 ? true : false }
          setAlert={this.setAlert}/>
          <Users loading={loading} users={users}/>
          </div>         
        </div>
      );
    }
 
}

export default App;
