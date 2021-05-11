import RandomNumber from './components/basics/RandomNumber';
import Fragment, { DontNeedFragment } from './components/basics/Fragment';
import FunctionWithParameters, {
  FunctionWithParametersTwo,
} from './components/basics/FunctionWithParameters';
import Card from './components/layout/Card';
import ComponentWithChildren from './components/basics/ComponentWithChildren';
import ChildrenOfComponent from './components/basics/ChildrenOfComponent';
import List from './components/basics/List';

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

      <Card color="#f00" title="Component with children">
        <ComponentWithChildren>
          <ChildrenOfComponent firstName="Roberto" lastName="Aleydon" />
          <ChildrenOfComponent firstName="Josh" lastName="Aleydon" />
          <ChildrenOfComponent firstName="Maria" lastName="Eduarda" />
        </ComponentWithChildren>
      </Card>

      <br />

      <Card
        color="#FF69B4"
        title="listing products from the array using the .map()"
      >
        <List />
      </Card>
    </div>
  );
}

export default App;
