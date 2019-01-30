import React, { Component } from 'react';
import {fetchPageList, selectPage} from './actions';
import {connect} from 'react-redux';

class PageList extends Component {
  componentDidMount(){
    this.props.fetchPageList();
  }
  renderList() {
    return this.props.pages.map((item)=>{
        return (
          <a key={item.id} className="item" onClick={()=>this.props.selectPage(item.id)}>
            {item.title}
          </a>
        )});
  }
  render() {
    console.log(this.props.pages);
    return (
      <div className="ui vertical menu">

        {this.renderList()}
        <div className="item">Add page
            <i className="add icon"></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pages: state.pages };
}

export default connect(mapStateToProps,{fetchPageList, selectPage})(PageList);
