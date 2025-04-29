import { Button } from "../../components/button";
import { Card, CardTitle } from "../../components/card";
import { Input } from "../../components/input";
import './index.css';

const LoginPage = () => {
  return (
    <>
      <div className="login-page-content">
        <Card>
          <CardTitle>Login</CardTitle>
          <Input placeholder="Digite seu e-mail de acesso" label="Email" />
          <Input placeholder="Digite a sua senha de acesso" label="Senha" type="password" />
          <Button full>
            Entrar
          </Button>
          <span className="headline-bold">
            Ainda não possui uma conta?
          </span>
          <Button full disabled>
            Cadastre-se
          </Button>
        </Card>
      </div>
    </>
  )
};

export default LoginPage;