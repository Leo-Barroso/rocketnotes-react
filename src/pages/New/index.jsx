import { Container, Form } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/button"
import { Link } from "react-router-dom";

export function New() {
    return (
        <Container>
            <Header></Header>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to={"/"}>Voltar</Link>
                    </header>
                    <Input placeholder="Título"></Input>
                    <TextArea placeholder="Observações"></TextArea>
                    <Section title="Links úteis">
                        <NoteItem value="https://google.com.br"></NoteItem>
                        <NoteItem isNew placeholder="Novo link"></NoteItem>
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react"></NoteItem>
                            <NoteItem isNew placeholder="Nova tag"></NoteItem>
                        </div>
                    </Section>
                    <Button title="Salvar"></Button>
                </Form>
            </main>
        </Container>
    )
}
