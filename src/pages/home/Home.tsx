import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Login from '../../components/Login'
import { Spacing, Title } from '../../components/Login/styles'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container style={{ marginTop: 100 }}
      className='shadow-lg p-3 mb-5 bg-white rounded'
    >
      <CardGroup>
        <Card style={{ paddingRight: 20, paddingLeft: 20 }}>
          <Card.Body>
            <Row>
              <Spacing />
              <Title>Bem-Vindo</Title>
              <Spacing />
              <Link to="/cadastro">
                <Button title='Cadastrar' disabled={true} type='submit' />
              </Link>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Login />
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  )
}

export default Home