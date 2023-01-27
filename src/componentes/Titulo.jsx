import styled from "styled-components"

const StyleTitulo = styled.div`
    display: flex;
    color: white;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 30px;
`
export default function Titulo (props) {
    return(
        <StyleTitulo>
            <p>{props.titulo}</p>
        </StyleTitulo>
    )
}