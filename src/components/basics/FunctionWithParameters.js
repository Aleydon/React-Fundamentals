/*Created by Roberto Aleydon*/

export default function FunctionWithParametersOne(props) {
  const sub = props.subtitle;
  return (
    <>
      <p>{sub}</p>
      <p>{'function example(props){props.sub}'}</p>
    </>
  );
}

// getting props using unstructured params
export function FunctionWithParametersTwo({ title, number }) {
  const status =
    number < 10
      ? 'The number is less than 10'
      : 'The number is greater than 10';

  return (
    <>
      <p>
        {title}: <span>{'function example({prop1, prop2}){}'}</span>
      </p>
      <p>Prop number: {status}</p>
    </>
  );
}
