import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Sidebar />
      <main>
        <Sobre></Sobre>
        <section>projetos</section>
      </main>
    </>
  )
}

export default App
