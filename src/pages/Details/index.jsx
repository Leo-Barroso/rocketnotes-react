import { Container, Links, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"


export function Details() {
  return (
    <Container>
      <Header></Header>
      <main>
        <Content>
          <ButtonText title="Excluir nota"></ButtonText>
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, nesciunt! Eum in laudantium atque autem, labore doloribus, earum repudiandae dolore nulla voluptas architecto nisi consequatur fugit impedit quisquam consectetur laborum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique provident accusamus quidem amet tempore? Architecto, eos? Officia, ut, obcaecati voluptatum vero nemo iste reprehenderit veniam dicta magnam molestiae, tempore quia?</p>
          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="node"></Tag>
          </Section>
          <Button title="Voltar"></Button>
        </Content>
      </main>
    </Container>
  )
}