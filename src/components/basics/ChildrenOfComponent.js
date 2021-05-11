import React from 'react';

function ChildrenOfComponent({ firstName, lastName }) {
  return (
    <>
      <span>
        {firstName} {lastName}
      </span>
      <br />
    </>
  );
}

export default ChildrenOfComponent;
