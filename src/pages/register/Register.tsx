import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../../components/Input/index';
import { defaultValues, IFormLogin } from '../../components/Login/types';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Button } from '../../components/Button/';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'Mínimo 6 caracteres')
    .required('Campo obrigatório')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula'),
}).required();

const Register = () => {
  const navigate = useNavigate()
  
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
    reValidateMode: 'onChange',
  })

  const onSubmit = async (data: IFormLogin) => {
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert('Usuário cadastrado com sucesso!')
        navigate('/home')
      }
    } catch (error) {
      alert('Erro ao cadastrar usuário')
    }
  }

  return (
    <Container style={{ marginTop: 100 }} className="shadow-lg p-3 mb-5 bg-white rounded">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
        </Form.Group>
        <Button title="Cadastrar" disabled={isValid} type="submit" />
      </Form>
    </Container>
  )
}

export default Register;