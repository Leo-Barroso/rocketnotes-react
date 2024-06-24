import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from '../../components/Input'
import { Button } from '../../components/button'
import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";
export function Profile() {
    return (
        <Container>
            <header>
                <Link to={"/"}>
                    <FiArrowLeft></FiArrowLeft>
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/Leo-Barroso.png"
                        alt="Foto do usuário" 
                    />
                    <label htmlFor="avatar">
                        <FiCamera></FiCamera>
                        <input id="avatar" type="file"/>
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUser}></Input>
                <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
                <Input placeholder="Senha atual" type="password" icon={FiLock}></Input>
                <Input placeholder="Nova senha" type="password" icon={FiLock}></Input>
                <Button title="Salvar"></Button>
            </Form>
        </Container>
    )
}