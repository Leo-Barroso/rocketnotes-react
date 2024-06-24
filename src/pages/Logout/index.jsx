import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from '../../components/Input'
import { Button } from '../../components/button'
import { Link } from "react-router-dom";
export function Logout() {
    return (
        <Container>
            <Background></Background>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar links.</p>
                <h2>Crie sua conta</h2>
                <Input placeholder="Nome" type="text" icon={FiUser}></Input>
                <Input placeholder="Email" type="text" icon={FiMail}></Input>
                <Input placeholder="Senha" type="password" icon={FiLock}></Input>
                <Button title="Cadastrar"></Button>
                <Link to={"/"}>Voltar para o login</Link>
            </Form>
        </Container>
    )
}