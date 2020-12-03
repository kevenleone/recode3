import Head from "next/head"

export default function Home() {
  const cabecalhos = ['Nome', 'Sobrenome', 'Escola']

  const alunos = [
    {
      nome: 'Keven',
      sobrenome: 'Leone',
      escola: 'POLI'
    }, 
    {
      nome: 'Clara',
      sobrenome: 'Leone',
      escola: 'UPE'
    }, 
    {
      nome: 'Gabriel',
      sobrenome: 'Leone',
      escola: 'IFPE'
    },
    {
      nome: 'Gabrixxel',
      sobrenome: 'Leone',
      escola: 'IFPE'
    }
  ];

  const titulo = 'Aula Recode 3';

  return (
    <div>
      <Head>
        <title>{titulo}</title>
      </Head>
      <div className="container">
        <table className="mt-4 table table-striped table-hovered">
          <thead className="thead-dark">
            <tr>
              {cabecalhos.map((cabecalho, index) => {
                return <th key={index}>{cabecalho}</th>
              })}
            </tr>
          </thead>
          <tbody>
              {alunos.map((aluno, index) => {
                return (
                  <tr key={index}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.sobrenome}</td>
                    <td>{aluno.escola}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      </div>
  );
}
