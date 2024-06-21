import styled from "styled-components";

const RodapeEstilizado = styled.footer`
    background: rgba(4, 36, 79, 1);
    width: 100%;
    height: 80px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 73px;
    div {
        margin-left: 22px;
        display: flex;
        gap: 35px;
        cursor: pointer;
    }
    p {
        margin-right: 22px;
    }
`

const Rodape = () => {
    return (
        <RodapeEstilizado>
            <div>
                <img src="/imagens/sociais/facebook.svg" />
                <img src="/imagens/sociais/twitter.svg" />
                <img src="/imagens/sociais/instagram.svg" />
            </div>
            <p>Desenvolvido por Karol.</p>
        </RodapeEstilizado>
    )
}

export default Rodape;