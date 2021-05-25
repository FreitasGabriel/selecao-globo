import styled from 'styled-components'

export const PositionIconClose = styled.div`

    .icon-close{
        height: 45px;
        width: 45px;

        position: relative;
        top: -28px;
        left: 336px;

        border: 0;

        background-color: transparent;

        background-position: 2px -97px;
    }

    .icon-close:hover{
        cursor:pointer;
    }

`

export const HeaderContainer = styled.header`

    width: 80%;
    height: 40px;

    margin: -20px 0 40px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title-section{

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        p{
            font-family: 'Open Sans', sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 24px;
            line-height: 28px;

            color: rgba(118, 118, 118, 0.6);

            margin-left: 10px;

        strong{
            color: #000000;
        }
    }

        .icon{

            height: 40px;
            width: 40px;

            background-position: 0px 0px;
        }
    }

  

    .dashed-bar{
        width: 120%;
        border-top:1px dashed rgba(118, 118, 118, 0.6);
        padding: 0.01px;
        margin: 1px;
        background-repeat: repeat-y;
    }

`