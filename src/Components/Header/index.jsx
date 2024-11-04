import { Link } from "react-router-dom"

import { Container, Menu, Li } from "./styles"

export function Header(){
    return(
        <Container>
            <h2>Movies Api</h2>
            <Menu>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li>
                    <Link to="/series">Series</Link>
                </Li>
            </Menu>
        </Container>        
    )
}