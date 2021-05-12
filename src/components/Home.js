import React, {PureComponent as Component} from 'react';
import SignupForm from './SignupForm'

class Home extends Component{

  render(){
    return (
      <div className="login-form">
        <div className="flex-header">
          <div className="flex-1">
            <h1 className="logo login-logo">DREAMTEAM AIRLINES</h1>
            <h2 className="welcome">welcomes you</h2>
          </div>
          <div className="flex-1">
            <img src="https://i.imgur.com/SeT47JK.jpg" alt="Sam"/>
          </div>
        </div>
        <p>Have an account? Please login below.</p>
        <SignupForm />
        <p>If you need a customer account, call 1800 DREAM and we'd love to help.</p>

      </div>
    );
  }
}

export default Home;
