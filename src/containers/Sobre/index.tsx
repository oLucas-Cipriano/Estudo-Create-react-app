import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rem vel
      officia distinctio at. Optio fuga blanditiis, dolores enim, quae quasi ut
      voluptates minus possimus voluptatem, nisi mollitia aspernatur illo.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=oLucas-Cipriano&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=oLucas-Cipriano&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
