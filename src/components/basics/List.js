import React from 'react';

import products from './listOfProducts';

function List() {
  return (
    <>
      <table border="1" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>id</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.product}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default List;
