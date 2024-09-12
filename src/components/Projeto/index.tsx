import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './styles'
const Projeto = () => (
  <Card>
    <Title>Projeto lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista de tarefas</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
