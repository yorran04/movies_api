import styled from 'styled-components'

export const Container = styled.div`

z-index: 999;
width: 100vw;
padding: 15px;
position: fixed;
top: 0;
display: flex;
align-items: center;
justify-content: space-around;
border-bottom: #333 solid;

h2{
    font-size: 1.5rem;
    color: white;

}

`

export const Menu = styled.ul`
display: flex;
align-items: center;
gap: 10px;
`

export const Li = styled.li`

color: white;
font-size: 1.5rem;
list-style: none;
cursor: pointer;
`