import React, { Component } from 'react';
import {postPage, selectPage, fetchPageList} from './actions';
import {connect} from 'react-redux';

class AddPage extends Component {
  state = {title: '', content: ''};
  postPage(title, content) {
    var id = this.props.pages.length+1;
    var page = {id, title, content};
    this.props.postPage(page).then(()=>{
       this.props.selectPage(this.props.pages.length);
    });
    this.setState({title: '', content: ''});
    alert('Add Success!');

  }
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={(event)=>this.setState({title: event.target.value})}/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <textarea type="text" name="content" placeholder="Write some content...." value={this.state.content} onChange={(event)=>this.setState({content: event.target.value})}/>
                </div>
              </div>
              <div className="ui fluid large teal submit button" onClick={()=>this.postPage(this.state.title, this.state.content)}>Add</div>
            </div>

            <div className="ui error message"></div>

          </form>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pages: state.pages };
}

export default connect(mapStateToProps,{postPage, selectPage, fetchPageList})(AddPage);
