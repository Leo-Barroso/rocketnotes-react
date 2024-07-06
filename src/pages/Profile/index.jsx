import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from '../../components/Input'
import { Button } from '../../components/button'
import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";
export function Profile() {
    const { user, updateProfile } = useAuth()
    const { name, setName } = useState(user.name)
    const { email, setEmail } = useState(user.email)
    const { passwordOld, setPasswordOld } = useState()
    const { passwordNew, setPasswordNew } = useState()

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            oldpassword: passwordOld
        }
        await updateProfile({user})
    }



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
                <Input 
                    placeholder="Nome" 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    icon={FiUser}>
                </Input>
                <Input 
                    placeholder="E-mail" 
                    type="text"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    icon={FiMail}>
                </Input>
                <Input 
                    placeholder="Senha atual" 
                    type="password" 
                    onChange={e => setPasswordOld(e.target.value)}

                    icon={FiLock}>
                </Input>
                <Input 
                    placeholder="Nova senha" 
                    type="password" 
                    onChange={e => setPasswordNew(e.target.value)}

                    icon={FiLock}>
                </Input>
                <Button title="Salvar" onClick={handleUpdate}></Button>
            </Form>
        </Container>
    )
}