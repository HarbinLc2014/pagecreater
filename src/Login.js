import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid" style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">
              Log-in to your account
            </div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <div className="ui fluid large teal submit button" onClick={()=>this.props.login()}>Login</div>
            </div>

            <div className="ui error message"></div>

          </form>

        </div>
      </div>
    );
  }
}

export default Login;
