import styled from 'styled-components'

export const Container = styled.section`

    display: flex;
    flex-direction: column;

    height: 342px;

    .result-text{

        width: 660px;

        margin: 20px 0 50px 85px;

        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 20px;
        line-height: 28px;
    }

    .candidates-img{

        width: 660px;

        margin-left: 42px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

`

export const CountdownWrapper = styled.div`

    padding-top: 160px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .text-countdown{
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        font-weight: 400px;
        font-style: normal;
        color: rgba(189, 189, 189, 1);

        margin: 0 0;
    }

    .countdown{
        font-family: 'Open Sans', sans-serif;
        font-size: 24px;
        color: rgba(246, 115, 44, 0.9);
    }
`

export const SpinnerWrapper = styled.div`

    margin: auto 0;

`
;
