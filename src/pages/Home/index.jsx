import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote} from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>
            <Header></Header>
            <Menu>
                <li><ButtonText title="Todos"></ButtonText></li>
                <li><ButtonText title="React"></ButtonText></li>
                <li><ButtonText title="Node"></ButtonText></li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>
            </Search>
            <Content>
                <Section title="Minhas notas">
                <Note data={{
                    title: 'React', 
                    tags: [
                        {id: '1', name: 'react'},
                        {id: '2', name: 'node'},
                    ]}}>
                </Note>
                </Section>
            </Content>
            <NewNote to={"/new"}>
                <FiPlus></FiPlus>
                Criar nota
            </NewNote>
        </Container>
    )
}


