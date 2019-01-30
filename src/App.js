import React from "react";
import PageList from './PageList';
import Login from './Login';
import Main from './Main';
import {connect} from 'react-redux';

class App extends React.Component {
  state = {login: true};

  render() {
    if(this.state.login){
    return (
      <div className="ui grid" style={{ marginTop: 40 }}>
        <div style={{ width: '25%' }}>
          <PageList logout={()=>this.setState({login:false})}/>
        </div>
        <div style={{ width: '75%' }}>
          <Main />
        </div>
      </div>
    );
  }
  return <Login login={()=>this.setState({login: true})}/>
  }
}

const mapStateToProps = state => {
  return { selected: state.selected };
}

export default connect(mapStateToProps)(App);
