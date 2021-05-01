/* eslint-disable import/no-anonymous-default-export */
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
import RandomNumber from './components/basics/RandomNumber';

// If you have a default export, it can be anonymous.
// If the Arrow Function uses parentheses, there is no need to use the return.
export default () => (
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

    <RandomNumber min={4} max={15} />
  </div>
);
