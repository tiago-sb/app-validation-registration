import React from "react"
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string()
      .email("E-mail inválido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo 6 caracteres")
      .required("Campo obrigatório")
      .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
  })
  .required();

const Login = () => {
  const navigate = useNavigate()

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: IFormLogin) => {
    try {
      const response = await fetch(`http://localhost:5000/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const conteudo_db = await response.json()

      if (response.ok) {
        const userMatches = conteudo_db.find((user: IFormLogin) => user.email === data.email && user.password === data.password)
        
        if (userMatches) {
          alert('Usuário logado com sucesso!')
          navigate('/home')
        } else {
          alert('E-mail ou nome não correspondem.')
          window.location.reload()
        }
      }
    } catch (error) {
      alert('Erro ao logar usuário')
    }
  }

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
            <Title>Faça Login</Title>
            <Spacing />
            <Input
              name="email"
              placeholder="Email"
              control={control}
              errorMessage={errors?.email?.message}
            />
            <Spacing />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              control={control}
              errorMessage={errors?.password?.message}
            />
            <Spacing />
            <Button title="Entrar" disabled={isValid} type='submit' />
          </Form>
        </Column>
      </LoginContainer>
    </Container >
  );
};

export default Login;
