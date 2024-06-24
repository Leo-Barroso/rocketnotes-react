import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from '../../components/Input'
import { Button } from '../../components/button'
import { Link } from "react-router-dom";
export function Login() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar links.</p>
                <h2>Faça de Login</h2>
                <Input placeholder="Email" type="text" icon={FiMail}></Input>
                <Input placeholder="Senha" type="password" icon={FiLock}></Input>
                <Button title="Entrar"></Button>
                <Link to={"/register"}>Criar conta</Link>
            </Form>
            <Background></Background>
        </Container>
    )
}