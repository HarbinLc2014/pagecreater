import React, { Component } from 'react';

class PageList extends Component {
  renderList() {
    return this.props.data.map((item)=>{
        return (
          <a key={item.id} className="item" onClick={()=>console.log(item.title)}>
            {item.title}
          </a>
        )});
  }
  render() {
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

export default PageList;
