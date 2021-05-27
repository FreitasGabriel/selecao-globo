import styled from 'styled-components'


export const ReCaptchaValidator = styled.div`

    margin: 0 0 20px 0;

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