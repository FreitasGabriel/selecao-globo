import styled from 'styled-components'


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 675px;


    .button-container{
        height: 100px;
        width: 670px;
        background-color: rgba(224, 224, 224, 0.95);

        border-top: 1px solid rgba(0, 0, 0, 0.1);

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ReCaptchaValidator = styled.div`

    margin: 0 0 20px 0;

`

export const VoteButton = styled.button`

    border-radius: 4px;
    height: 40px;
    width: 180px;

    background-color: #0d6efd ;
    color: #FFFFFF;

    border: none;

    cursor: pointer;

    :hover{
        background-color: rgba(13, 110, 253, 0.5);
    }

    :disabled{
        cursor: not-allowed;

        :hover{
            background-color: #0d6efd;
        }
    }

`