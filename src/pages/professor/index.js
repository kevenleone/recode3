import React from 'react';
import { Button } from 'reactstrap';
import { useRouter } from 'next/router';
import Page from '../../components/Page';
import ListView from '../../components/ListView';

export default function Professor() {
  const router = useRouter();

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
      <Button onClick={() => router.push('/professor/new')}>New Professor</Button>
      <ListView columns={columns} endpoint="/professor" />
    </Page>
  );
}
