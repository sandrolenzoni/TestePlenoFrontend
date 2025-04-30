import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { fetchMockLogin, loginFormSchema, type loginFormType } from "../../Mocks/login";
import type { User } from "../../Mocks/data/Usuarios";
import { AppContext } from "../../context/AppContext";
import { Button } from "../../components/button";
import { Card, CardTitle } from "../../components/card";
import { ErrorText, Input } from "../../components/input";
import { Logo } from "./logo";
import './index.css';

const LoginPage = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema)
  });
  const [errorOnLogin, setErrorOnLogin] = useState<boolean>(false);

  const { isPending, mutate } = useMutation({
    mutationKey: ['loginUser'],
    mutationFn: (data: loginFormType) => fetchMockLogin(data),
    onSuccess: (data: User | number) => {
      if (!(typeof data === 'number')) {
        setUser(data);
        navigate('/');
      }
      else setErrorOnLogin(true);
    }
  })

  const onSubmitForm = (data: loginFormType) => {
    mutate(data);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="login-page-content"
      >
        <Logo />
        <Card>
          <CardTitle>Login</CardTitle>
          {errorOnLogin && <div className="error-login">Usuário ou senha errados</div>}
          <Input
            placeholder="Digite seu e-mail de acesso"
            label="Email"
            autoComplete="off"
            {...register('email', { required: true })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          <Input
            placeholder="Digite a sua senha de acesso"
            label="Senha"
            type="password"
            autoComplete="off"
            {...register('password', { required: true })}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
          <Button
            full
            type="submit"
            disabled={isPending}
          >
            {isPending ? 'Entrando no sistema...' : 'Entrar'}
          </Button>
          <span className="headline headline-bold">
            Ainda não possui uma conta?
          </span>
          <Button full disabled>
            Cadastre-se
          </Button>
        </Card>
      </form>
    </>
  )
};

export default LoginPage;