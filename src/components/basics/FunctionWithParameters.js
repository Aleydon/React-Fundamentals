/*Created by Roberto Aleydon*/

export default function FunctionWithParametersOne(props) {
  const sub = props.subtitle;
  return (
    <>
      <h1>{props.title}</h1>
      <h5>{sub}</h5>
    </>
  );
}

// getting props using unstructured params
export function FunctionWithParametersTwo({ title, subtitle, number }) {
  const status =
    number < 10
      ? 'The number is less than 10'
      : 'The number is greater than 10';

  return (
    <>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      <h5>{status}</h5>
    </>
  );
}
