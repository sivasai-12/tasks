import './App.css';
import React from 'react';
import Pdemo from './pdemo.jsx';

import A from './A.jsx';
import B from './B.jsx';
import C from './C.jsx';
import Typographymui from './Typographymui.jsx';
import Button1 from './button.jsx';
import Counter from './Counter.jsx';

class App extends React.Component{ 
  render() {
    return(
      <div className="App">
        <div className="Comp">
        <A></A>
        <B></B><br></br>
        <br></br>
        <C></C></div>
<div className="Prop">
        <Pdemo name="siva" age={20} city="vizag" country="India" /><br></br> 
        <Pdemo name="raj" age={22} city="NewYork" country="U.S.A" /><br></br>
        <Pdemo name="Sam" age={21} city="Paris" country="France" />
        </div>
        <div className="Mui">
        <Typographymui></Typographymui><br></br>
        <Button1></Button1><br></br>
        </div>
        <div className="States">
        <h1>vote counter:</h1>
        <Counter></Counter>
        </div>
        </div>

    );
}
}
export default App;
