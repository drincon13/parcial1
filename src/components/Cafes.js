import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl'

function Cafes({ cafesList }) {
  return (
    <div>
      <h2><FormattedMessage id= 'list'></FormattedMessage></h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th><FormattedMessage id= 'nombre'></FormattedMessage></th>
            <th><FormattedMessage id= 'tipo'></FormattedMessage></th>
            <th><FormattedMessage id= 'region'></FormattedMessage></th>
          </tr>
        </thead>
        <tbody>
          {cafesList.map((cafe) => (
            <tr key={cafe.id}>
              <td>{cafe.id}</td>
              <td>
                <Link to={`/cafes/${cafe.id}`}>{cafe.nombre}</Link>
              </td>
              <td>{cafe.tipo}</td>
              <td>{cafe.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cafes;




