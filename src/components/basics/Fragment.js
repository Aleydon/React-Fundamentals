import { Fragment } from 'react';

function WhenUseFragment() {
  // Use fragment <></> or <Fragment></fragment> when a function returns more than one element
  return (
    <>
      <p>More than one element Use fragment</p>
      <p>
        {'<></> or <Fragment></Fragment> or <React.Fragment></React.Fragment>'}
      </p>
      <br />
    </>
  );
}

export default WhenUseFragment;

export function DontNeedFragment() {
  // When return only on Element, don't need the fragment
  return <p>Only one element dont need fragment</p>;
}
