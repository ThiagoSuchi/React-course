// Components
import FirstComponent from './components/firstComponents';
import TemplateExpression from './components/TemplateExpressions';
import { MyComponents } from './components/MyComponents';
import { Events } from './components/Events';
import { AddingNumbers } from './components/Challenge';
// styles// CSS
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Fundamentos React!</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponents/>
      <Events/>
      <AddingNumbers/>
    </div>
  );

}

export default App;
