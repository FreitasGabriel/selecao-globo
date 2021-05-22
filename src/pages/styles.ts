import styled from 'styled-components'

export const Container = styled.body`

`



export const HeaderContainer = styled.header`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 74px;

    background-color: #4D4D4D;
    
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    line-height: 36px;

    color: #FFFFFF;

`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    margin: 50px 100px;

    p{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 24px;
        line-height: 28px;
    }
`


export const Imagem = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 800px;

    margin: 40px 0;
    
    .first-candidate, 
    .second-candidate, 
    .icon-close, 
    .icon {
        background-image: url('images/sprite.png');
        background-repeat: no-repeat;
    }

    .first-candidate{
        height: 240px;
        width: 300px;

        background-position: -10px -193px;
    }

    .second-candidate{
        height: 240px;
        width: 340px;

        background-position: -315px -198px;
    }

    .icon-close{
        height: 45px;
        width: 45px;

        background-position: 2px -97px;
    }

    .icon{
        height: 40px;
        width: 40px;

        background-position: 0px 0px;
    }


`

export const Button = styled.button`

    width: 160px;
    height: 50px;
    border-radius: 8px;

    background-color: #333333;
    color: #FFFFFF;

    border: none;

    cursor: pointer;

    :hover{
        background-color: #464F51;
    }

`