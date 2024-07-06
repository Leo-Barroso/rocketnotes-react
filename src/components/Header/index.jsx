import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
import { useAuth} from "../../hooks/auth"
export function Header() {
    const { logout } = useAuth()
    return (
        <Container>
            <Profile to={"/profile"}>
                <img 
                    src="https://github.com/Leo-Barroso.png" 
                    alt="Foto do usuário" 
                />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Leo Barroso</strong>
                </div>
            </Profile>
            <Logout onClick={logout}>
                <RiShutDownLine></RiShutDownLine>
            </Logout>
        </Container>
    )
}