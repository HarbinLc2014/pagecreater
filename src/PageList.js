import React, { Component } from 'react';
import {fetchPageList, selectPage, postPage} from './actions';
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
        <a className="item" onClick={()=>this.props.selectPage(0)}>Add page
            <i className="add icon"></i>
        </a>
        <a className="item" onClick={()=>this.props.logout()}>Log Out
            <i className="sign out alternate icon"></i>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pages: state.pages };
}

export default connect(mapStateToProps,{fetchPageList, selectPage, postPage})(PageList);
