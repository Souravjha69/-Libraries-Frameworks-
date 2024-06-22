import classes from "./App.module.css";
import Buttonscontainer from "./assets/components/Buttonscontainer";

import Display from "./assets/components/Display";

function App() {
  return <div className={classes.calculator}>
    <Display/>
    <Buttonscontainer/>
  </div>;
}
export default App;
