import PropTypes from 'prop-types';

function UserGreeting(props){
//  if(props.isLoggedIn){
//     return <h2> Welcome {props.username}</h2>
//  }
//  else{
//     return <h2> Plese LogIn to continue !</h2>
//  }

// return(props.isLoggedIn ?  <h2 className="Welcome_message"> Welcome {props.username}</h2> :                       <h2 className="login_prompt">Plese logIn to continue!</h2>);
// }

const welcomeMessage = <h2 className="Welcome_message"> Welcome {props.username}</h2>

const loginPrompt = <h2 className="login_prompt">Plese logIn to continue!</h2>

return ( props.isLoggedIn ? welcomeMessage: loginPrompt);
}
UserGreeting.prototype ={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps ={
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting;