import React from 'react';
import { Button } from 'reactstrap';
import Page from '../../components/Page';
import ListView from '../../components/ListView';

export default function Course() {
  const columns = [
    {
      name: 'id',
      value: 'Id',
    },
    {
      name: 'name',
      value: 'Name',
    },
  ];

  return (
    <Page title="Course">
      <Button>Add Course</Button>
      <ListView columns={columns} endpoint="/course" />
    </Page>
  );
}
