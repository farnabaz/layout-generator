import styled from 'styled-components';

const getBackground = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`

const Column = styled.div`
    background: ${getBackground};
    transition: background 0.4s ease-in-out;
`

export default Column;