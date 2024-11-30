// Component
import MyForm from "./components/MyForm";
// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={ {name:'ExempleName', email:'exempleEmail@gmal.com'} }/>
    </div>
  );
}

export default App;
