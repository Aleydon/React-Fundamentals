/* eslint-disable import/no-anonymous-default-export */

// Generates a random number between the property numbers
export default (props) => {
  const { min, max } = props;
  const random = parseInt(Math.random() * (max - min)) + min;

  return (
    <>
      <p>minimum value: {min}</p>
      <p>maximum value: {max}</p>
      <p>chosen value among them: {random}</p>
    </>
  );
};
