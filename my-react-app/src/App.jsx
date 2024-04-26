// HOW O STYLE REACT COMPENNETS WITH CSS
// -------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

/* props = read-only properties that are sared between    compennets.
A parent compenent can send data to a child component.

<Compenent key=value />
*/

/* conditional rendering = allows you to control what gets rendered in your application based on certain conditions (show, hide, or change compenents)
*/


import Card from "./Card.jsx"
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";


function App() {
  return (
    <>
      <Card />

      <Student name="Spongbob" age={30} isStudent={true} />
      {/* <Student name="Patrick" age={42} isStudent={false} /> */}
      {/* <Student name="Sandy" age={25} isStudent={true} /> */}
      <Student name="Saboo" />

      <UserGreeting isLoggedIn={false} username="GirlTech"/>
      <List/>
    </>


  );
}

export default App



/*
fragment to enclose more than one component together
<></>  fragment
*/