import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { Input } from '../../components/Input'
import { Button } from '../../components/button'
import { Link } from "react-router-dom";
export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth()
    function handleLogin() {
        login({email, password})
    }
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar links.</p>
                <h2>Faça de Login</h2>
                <Input 
                    placeholder="Email" 
                    type="text" 
                    onChange={e => setEmail(e.target.value)}                
                    icon={FiMail}>
                </Input>
                <Input 
                    placeholder="Senha" 
                    type="password" 
                    onChange={e => setPassword(e.target.value)}                
                    icon={FiLock}>
                </Input>
                <Button 
                onClick={handleLogin}
                title="Entrar">
                </Button>
                <Link to={"/register"}>Criar conta</Link>
            </Form>
            <Background></Background>
        </Container>
    )
}