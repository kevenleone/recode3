import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Form, FormGroup, Input, Label, Button,
} from 'reactstrap';

import { toast } from 'react-toastify';
import axios from '../../utils/axios';
import Page from '../../components/Page';

export default function Professor() {
  const { query: { id }, push } = useRouter();
  const isNewProfessor = id === 'new';
  const [departaments, setDepartaments] = useState([]);
  const [form, setForm] = useState({
    name: '',
    cpf: '',
    departament: '',
  });

  const getDepartaments = async () => {
    const response = await axios.get('/departament');
    const { data } = response;
    setDepartaments(data);
  };

  const getProfessor = async () => {
    const response = await axios.get(`/professor/${id}`);
    const { data } = response;
    setForm({
      ...data,
      departament: String(data.departament.id),
    });
  };

  useEffect(() => {
    getDepartaments();

    if (id && !isNewProfessor) {
      getProfessor();
    }
  }, [id]);

  const onChange = (event) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { name, cpf, departament } = form;
    const formData = {
      name,
      cpf,
      departament: {
        id: departament,
      },
    };

    try {
      if (isNewProfessor) {
        await axios.post('/professor', formData);
      } else {
        await axios.put(`/professor/${id}`, formData);
      }

      toast.success(isNewProfessor ? 'Professor Created' : 'Professor Updated');
      push('/professor');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Page title="Professor">
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            name="name"
            onChange={onChange}
            type="text"
            placeholder="Insira o nome do professor"
            value={form.name}
          />
        </FormGroup>
        <FormGroup>
          <Label>CPF</Label>
          <Input
            name="cpf"
            maxLength={13}
            onChange={onChange}
            type="text"
            value={form.cpf}
            placeholder="Insira o CPF do professor"
          />
        </FormGroup>
        <FormGroup>
          <Label>Selecionar o Departamento</Label>
          <Input onChange={onChange} name="departament" type="select">
            {departaments.map(({ id, name }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </Input>
        </FormGroup>
        <Button>Cancel</Button>
        <Button type="submit" className="ml-3" color="primary">Save</Button>
      </Form>
    </Page>
  );
}
