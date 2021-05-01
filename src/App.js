/*Created by Roberto Aleydon*/

import React from 'react';

import './style.css';

import FirstComponentAnonymous from './components/basics/FirstComponent';
import { SecondComponent } from './components/basics/FirstComponent';
import ComponentWithJSX from './components/basics/ComponentWithJSX';
import FunctionWithParametersOne, {
  FunctionWithParametersTwo,
} from './components/basics/FunctionWithParameters';
import WhenUseFragment, {
  DontNeedFragment,
} from './components/basics/Fragment';

function App() {
  return (
    <div className="container">
      <FirstComponentAnonymous />
      <br />
      <SecondComponent />
      <br />
      <ComponentWithJSX />
      <br />

      <FunctionWithParametersOne
        title="Function"
        subtitle="With Parameters/Props"
      />
      <br />

      <FunctionWithParametersTwo
        title="Unstructured Function"
        subtitle="With Parameters/Props 2"
        number={6}
      />
      <br />

      <WhenUseFragment />
      <br />
      <DontNeedFragment />
      <br />
    </div>
  );
}

export default App;
