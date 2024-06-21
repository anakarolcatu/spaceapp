import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  
  const aoAlternarFavorito = (foto) => {
    //transforma o array de fotos em outra coisa, retornando a foto da galeria como um novo objeto com a foto escolhida e cria uma nova propriedade chamada favorita, compara se o id de favorito é o mesmo do id e então atribui o oposto do que ela tem (se é favorita, desfavorita), se não é o que queremos, deixa como está
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      if (foto.id === fotoSelecionada?.id){
        setFotoSelecionada({
          ...fotoSelecionada,
          favorita: !fotoSelecionada.favorita
        })
      }
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
          <MainContainer>
            <BarraLateral />
            <ConteudoGaleria>
              <Banner
                texto="A galeria mais completa de fotos do espaço!"
                backgroundImage={bannerBackground}
              />
              <Galeria 
                aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
                aoAlternarFavorito={aoAlternarFavorito}
                fotos={fotosDaGaleria}/>
            </ConteudoGaleria>           
          </MainContainer>  
      </AppContainer>
      <Rodape /> 
      <ModalZoom 
        foto={fotoSelecionada} 
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}/>     
    </FundoGradiente>
  )
}

export default App