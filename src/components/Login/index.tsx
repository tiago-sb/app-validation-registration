import React from "react"
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { Form } from "react-bootstrap";

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
      const response = await fetch(`http://localhost:5000/users?email=${data.email}&password=${data.password}`)
      
      if (response.ok) {
        const users = await response.json()
  
        if (users.length > 0) {
          alert('Usuário logado com sucesso!')
          window.location.href = '/home'
        } else {
          alert('Usuário desconhecido')
        }
      }
    } catch (error) {
      alert('Erro ao logar usuário');
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
