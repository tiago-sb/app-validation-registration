import React from "react"
import { Container } from "react-bootstrap"
import { Title } from "../../components/Login/styles"
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

const System = () => {
  return (
    <>
      <Container style={{ marginTop: 100 }}
        className='shadow-lg p-3 mb-5 bg-white rounded'
      >
        <Title>
          Logado!
        </Title>
      </Container>
      <Link to="/">
        <Button title='Sair' disabled={true} type="button" />
      </Link>
    </>
  )
}

export default System