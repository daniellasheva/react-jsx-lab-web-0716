const React = require('react');

class RegistrationForm extends React.Component {
  render(){
    return (
      <form>
      <input type= "text"></input>
      <input type= "password"></input>
      <button type = "submit"></button>
     </form>
    )}
  }

module.exports= RegistrationForm;




// class RegistrationForm extends React.Component {
//   render() {
//     return (
//       <form>
//         <input type="text"/>
//         <div className="tweet__body">
//             <p>We're writing this tweet in JSX. Holy moly!</p>
//         </div>
//       </div>
//     );
//   }
// }
