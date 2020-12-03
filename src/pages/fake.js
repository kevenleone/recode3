import React from "react";

function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        {props.children}
      </div>
    </div>
  );
}

export default function fake() {
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col">
          <Card title="Aluno 1" description="Lorem Ipsum....">
            <div>
              <button>Clica aqui</button>
              <button>Clica aqui</button>
            </div>
          </Card>
        </div>
        <div className="col">
          <Card title="Aluno 2" description="Lox...">
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </Card>
        </div>
        <div className="col">
          <Card title="Aluno 3" description="Lox..." />
        </div>
        <div className="col">
          <Card title="Aluno 4" description="Lox..." />
        </div>
      </div>
    </div>
  );
}
