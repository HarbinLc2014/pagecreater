import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddPage from './AddPage';

class Main extends Component {
  render() {
    if(this.props.selected === 0){
      return <AddPage />;
    }
    return (
      <div>
        <div>
          <a><h2>{this.props.selected>0? this.props.pages[this.props.selected-1].title: ''}</h2></a>
        </div>
        <br />
        <br />
        <div className="description">
          {this.props.selected>0? this.props.pages[this.props.selected-1].content: ''}
        </div>
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selected: state.selected, pages: state.pages };
}

export default connect(mapStateToProps)(Main);
