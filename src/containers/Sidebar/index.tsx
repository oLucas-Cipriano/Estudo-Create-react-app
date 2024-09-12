import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Lucas</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        oLucas-Cipriano
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor FullStack
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
