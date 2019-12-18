import React, {Component}from "react";
import "./App.css";

// import { name, age } from "./components/data";
import Booklist from "./components/Booklist";
// function App() {
//   return (
//     <div>
//       HELLO FROM APP
//       {/* <Booklist></Booklist> */}
//       {/* <p>{name}</p>
//       <p>{age}</p> */}
//       <Booklist></Booklist>
//     </div>
//   );
// }





// creating a class based component 
class App  extends Component{
  render(){
    return(
      <div>
        
   
     
        <Booklist></Booklist>
      </div>

    )
  }


} 
export default App;
