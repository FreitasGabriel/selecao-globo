import styled, { css } from 'styled-components'

export const Container = styled.div`

    position: absolute;

    top: 287px;

    p{
        width: 300px;
        height: 150px;
        margin: 20px auto;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        overflow: hidden;
    }

    .bar{
        position: absolute;
        left: 0;
        top: 0;
        width: 300px;
        height: 300px;
        border: 50px solid;
        box-sizing: border-box;
        border-color: rgb(246, 115, 44) rgb(246, 115, 44) #ddd #ddd;
        border-radius: 50%;
        transform: rotate(135deg);
        transition: 0.5s;
    }

    .first-per{

        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #fff;

        padding: 0 50px 160px 0;
        transform: rotate(130deg)
    }

    .second-per{

        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #fff;


        bottom: 173px;
        left: 55px;
        transform: rotate(140deg)
    }

`
