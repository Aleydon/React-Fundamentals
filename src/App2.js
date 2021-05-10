import RandomNumber from './components/basics/RandomNumber';
import Fragment, { DontNeedFragment } from './components/basics/Fragment';
import FunctionWithParameters, {
  FunctionWithParametersTwo,
} from './components/basics/FunctionWithParameters';
import Card from './components/layout/Card';

import './style.css';

function App() {
  return (
    <div className="container">
      <h1>React Fundamentals</h1>
      <br />

      <Card
        color="green"
        title="Generates a random number between the property numbers"
        content="This is an content"
      >
        <RandomNumber min={3} max={17} />
      </Card>

      <Card color="purple" title="Fragment">
        <Fragment />
        <DontNeedFragment />
      </Card>

      <Card title="Getting props in function">
        <FunctionWithParameters subtitle="Getting prop subtitle" />
        <hr />
        <FunctionWithParametersTwo title="Desestructuring props" number={2} />
      </Card>
    </div>
  );
}

export default App;
