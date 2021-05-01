function WhenUseFragment() {
  // Use fragment <></> or <Fragment></fragment> when a function returns more than one element
  return (
    <>
      <p>More than one element</p>
      <p>:)</p>
    </>
  );
}

export default WhenUseFragment;

export function DontNeedFragment() {
  // When return only on Element, don't need the fragment
  return <p>Dont need fragment</p>;
}
