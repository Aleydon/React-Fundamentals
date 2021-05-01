/* eslint-disable import/no-anonymous-default-export */

// Generates a random number between the property numbers
export default (props) => {
  const { min, max } = props;
  const random = parseInt(Math.random() * (max - min)) + min;

  return (
    <>
      <h4>minimum value:</h4>
      <h4>maximum value:</h4>
      <h3>chosen value among them: {random}</h3>
    </>
  );
};
