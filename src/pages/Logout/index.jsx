import { useState } from "react";
import { api } from "../../services/api"
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from '../../components/Input'
import { Button } from '../../components/button'
import { Link, useNavigate } from "react-router-dom";
export function Logout() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    function handleLogout() {
        if(!name ||!email || !password) {
            return alert("Preencha todos os campos.")
        }
        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso.")
                navigate("/")
            })
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível realizar o cadastro.")
                }
            })
    }
    return (
        <Container>
            <Background></Background>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar links.</p>
                <h2>Crie sua conta</h2>
                <Input 
                    placeholder="Nome" 
                    type="text"
                    onChange={e => setName(e.target.value)}                
                    icon={FiUser}>
                </Input>
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
                    onClick={handleLogout}
                    title="Cadastrar">
                </Button>
                <Link to={"/"}>Voltar para o login</Link>
            </Form>
        </Container>
    )
}