import React from "react";
import PageList from './PageList';
import Main from './Main';
import {connect} from 'react-redux';

class App extends React.Component {
  state = {data:[{ id: 1, title: 'One' }, { id: 2, title: 'Two' }, { id: 3, title: 'Three' }, { id: 4, title: 'Four' }]};

  onClick(){
    console.log('clicked');
  }

  render() {
  //  console.log(this.props.selected);
    return (
      <div className="ui grid" style={{ marginTop: 40 }}>
        <div style={{ marginTop:10 }}>
          <PageList data={this.state.data}/>
        </div>
        <div>
          <Main />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selected: state.selected };
}

export default connect(mapStateToProps)(App);
