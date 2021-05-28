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

    margin: 40px 0;


    p{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 24px;
        line-height: 28px;
    }
`

export const VoteButton = styled.button`

    border-radius: 8px;
    height: 40px;
    width: 150px;

    background-color: #333333;
    color: #FFFFFF;

    border: none;

    cursor: pointer;

    :hover{
        background-color: #464F51;
    }

    :disabled{
        cursor: not-allowed;
    }

`

export const ReCaptchaValidator = styled.div`

    margin: 0 0 20px 0;

`


export const Imagem = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 800px;

    margin: 40px 0;
    
    .first-candidate, 
    .second-candidate{
        background-image: url('images/sprite.png');
        background-repeat: no-repeat;
    }

    .second-candidate{
        height: 240px;
        width: 280px;

        background-position: -10px -193px;
    }

    .first-candidate{
        height: 240px;
        width: 280px;

        background-position: -340px -198px;
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