import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import PropsInComponent from './components/PropsInComponent';
import ComponentInComponent from './components/ComponentInComponent';
import ConstructorInComponent from './components/ConstructorInComponent';
import PropsInConstructor from './components/PropsInConstructor';
import StateObjectInConstructor from './components/StateObjectInConstructor';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponent />
      <PropsInComponent property="World" />
      <ComponentInComponent />
      <ConstructorInComponent />
      <PropsInConstructor property="World" />
      <StateObjectInConstructor />
    </div>
  );
}

export default App;