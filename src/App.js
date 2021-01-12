import logo from './logo.svg';
import './App.css';
import React, {Profiler} from 'react'
import ComponentA from './components/componentA'



function App() {

  const callback =(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) =>{
    console.log('Id is: ' + id);
    console.log('Phase is: ' + phase);
    console.log('actualDuration is: ' +actualDuration);
    console.log( 'baseDuration is: ' + baseDuration);
    console.log('startTime is: ' + startTime);
    console.log('commitTime is: ' + commitTime);
    console.log('interactions is: ' + interactions);
  }

  return (
    <div className="App">
    <h1>Profiler API</h1>
    <Profiler id="ComponentA" onRender={callback} >
    <ComponentA/>
    </Profiler>
    </div>
  );
}

export default App;
