import React from 'react';
import { Button } from 'reactstrap';
import Page from '../../components/Page';
import ListView from '../../components/ListView';

export default function Professor() {
  const columns = [
    {
      name: 'id',
      value: 'Id',
    },
    {
      name: 'name',
      value: 'Name',
    },
    {
      name: 'cpf',
      value: 'CPF',
    },
    {
      name: 'departament',
      value: 'Departament',
      render: (departament) => departament.name,
    },
  ];

  return (
    <Page title="Professor">
      <Button>Add Professor</Button>
      <ListView columns={columns} endpoint="/professor" />
    </Page>
  );
}
