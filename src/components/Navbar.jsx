import styled from "styled-components";

export const Navbar = () => {
    return (
        <Container>
            <h3>
                Firebase
            </h3>
        </Container>
    )
}

const Container = styled.header`
    height: 7.5vh;
    background-color: #1a202c;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;