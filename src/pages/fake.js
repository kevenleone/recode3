import React from 'react';
import {
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardText,
  Row,
  Col,
} from 'reactstrap';

function CardComponent({ title, description, children }) {
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>{description}</CardText>
        {children}
      </CardBody>
    </Card>
  );
}

export default function fake() {
  return (
    <Container className="mt-4">
      <Row>
        <Col xl={4} lg={6} md={8} sm={12}>
          <CardComponent title="Aluno 1" description="Lorem Ipsum....">
            <Button color="primary">Clica aqui</Button>
          </CardComponent>
        </Col>
        <Col className="col">
          <CardComponent title="Aluno 2" description="Lox...">
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </CardComponent>
        </Col>
        <Col className="col">
          <CardComponent title="Aluno 3" description="Lox..." />
        </Col>
        <Col className="col">
          <CardComponent title="Aluno 4" description="Lox..." />
        </Col>
      </Row>
    </Container>
  );
}
