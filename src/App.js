import React from "react";
import PageList from './PageList';

class App extends React.Component {
  state = {data:[{ id: 1, title: 'One' }, { id: 2, title: 'Two' }, { id: 3, title: 'Three' }, { id: 4, title: 'Four' }]};

  onClick(){
    console.log('clicked');
  }

  render() {
    return (
      <div className="ui grid" style={{ marginTop: 40 }}>
        <div style={{ marginTop:10 }}>
          <PageList data={this.state.data}/>
        </div>
        <div>
          hello
        </div>
      </div>
    );
  }
}


export default App;
