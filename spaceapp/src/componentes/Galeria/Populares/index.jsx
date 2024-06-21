import styled from "styled-components";
import Titulo from "../../Titulo";
import Botao from "../../Botao";

import fotos from './fotos-populares.json';

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
`
const Imagem = styled.img`
    border-radius: 20px;
    max-width: 212px;
`

const Populares = () => {
    return (
        <section>
            <Titulo $alinhamento='center'>Populares</Titulo>
            <ColunaFotos>
                {fotos.map(foto => <Imagem key={foto.id} src={foto.path} alt={foto.alt} />)}
            </ColunaFotos>
            <Botao>Ver mais</Botao>
        </section>
    )
}

export default Populares;