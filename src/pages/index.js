import React, { useState, useEffect } from 'react';

export default function Home() {
  const [professors, setProfessors] = useState([]);
  const headers = ['Id', 'Name', 'CPF', 'Departament'];

  function getProfessors() {
    fetch('https://professor-allocation.herokuapp.com/professor')
      .then((response) => response.json())
      .then((json) => setProfessors(json));
  }

  useEffect(() => {
    getProfessors();
  }, []);

  return (
    <div className="container">
      <table className="mt-4 table table-striped table-hovered">
        <thead className="thead-dark">
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {professors.map((professor) => (
            <tr key={professor.id}>
              <td>{professor.id}</td>
              <td>{professor.name}</td>
              <td>{professor.cpf}</td>
              <td>{professor.departament.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
