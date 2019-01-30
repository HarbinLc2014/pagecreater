import React, { Component } from 'react';
import {connect} from 'react-redux';

class Main extends Component {
  render() {

    return (
      <div className="Main">
        {this.props.selected>0? this.props.pages[this.props.selected-1].title: ''}
        <br />
        <br />
        {this.props.selected>0? this.props.pages[this.props.selected-1].content: ''}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selected: state.selected, pages: state.pages };
}

export default connect(mapStateToProps)(Main);
