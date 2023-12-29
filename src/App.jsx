import AppName from "./AppName";
import AppMotto from "./AppMotto";
import AppClock from "./AppClock";
import "./App.css";


function App() {
 
  return (
    <center className="clockContainer">
       <AppName/>
       <AppMotto/>
       <AppClock/>
    </center>
  )
}

export default App
