import React from "react";
import { Link } from "react-router-dom";

function Cafes({ cafesList }) {
  return (
    <div>
      <h2>Listado de Cafés</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Región</th>
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




