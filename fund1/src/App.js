// Components
import FirstComponent from './components/firstComponents';
import TemplateExpression from './components/TemplateExpressions';
// styles// CSS
import './App.css';
import { MyComponents } from './components/MyComponents';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React!</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponents/>
    </div>
  );
}

export default App;
