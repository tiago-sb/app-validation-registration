import React from "react"
import { Container } from "react-bootstrap"
import {  Title } from "../../components/Login/styles";

const System = () => {
  return (
    <Container style={{ marginTop: 100 }}
      className='shadow-lg p-3 mb-5 bg-white rounded'
    >
      <Title>
        Logado!
      </Title>
    </Container>
  )
}

export default System