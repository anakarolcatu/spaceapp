import styled from "styled-components";

const BotaoEstilizado = styled.button`
    color: #fff;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    padding: 12px 20px;
    font-size: 20px;
    cursor: pointer;
    width: 100%;
    background-color: transparent;
    &&:hover {
        background: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
    }
`

const Botao = ({children}) => {
    return (
        <BotaoEstilizado>
            {children}
        </BotaoEstilizado>
    )
}

export default Botao;