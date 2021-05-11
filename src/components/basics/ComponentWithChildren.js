import React from 'react';

function ComponentWithChildren(props) {
  return (
    <>
      <span>
        The parent component passes the "lastName" property to the children
      </span>
      <br />
      <hr />

      {props.children}
    </>
  );
}

export default ComponentWithChildren;
