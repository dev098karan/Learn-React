import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import PropsInComponent from './components/PropsInComponent';
import ComponentInComponent from './components/ComponentInComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponent />
      <PropsInComponent property="World" />
      <ComponentInComponent />
    </div>
  );
}

export default App;