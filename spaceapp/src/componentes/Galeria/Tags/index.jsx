import styled from 'styled-components';
import tags from './tags.json';

const TagsEstilizadas = styled.div`
    color: rgba(217, 217, 217, 1);
    font-size: 24px;
    display: flex;
    margin-top: 56px;
    gap: 24px;
    align-items: center;
    p {
        width: 219px;
    }
`
const BotaoEstilizado = styled.button`
    height: 49px;
    background: rgba(217, 217, 217, 0.3);
    border: 2px solid transparent;
    border-radius: 10px;
    color: #fff;
    padding: 10px 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    &:hover {
        border-color: #c98cf1;
    }
`

const Tags = ({ setTag }) => {
    return <TagsEstilizadas>
        <p>Busque por tags:</p>
        {tags.map(tag => <BotaoEstilizado key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo} </BotaoEstilizado>)}
    </TagsEstilizadas>
}

export default Tags;