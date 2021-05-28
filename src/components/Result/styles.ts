import styled from 'styled-components'

export const Container = styled.section`

    display: flex;
    flex-direction: column;

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

        .first-candidate, 
        .second-candidate{
            background-image: url('images/sprite.png');
            background-repeat: no-repeat;
        }

        .second-candidate{
            height: 240px;
            width: 240px;

            background-position: -30px -193px;
        }

        .first-candidate{
            height: 240px;
            width: 240px;

            background-position: -360px -198px;
        }

        .countdown-container{

            padding-top: 40px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p{
                font-family: 'Open Sans', sans-serif;
                font-size: 12px;
                font-weight: 400px;
                font-style: normal;
                color: rgba(189, 189, 189, 1);

            }

            .countdown{
                font-family: 'Open Sans', sans-serif;
                font-size: 24px;
                color: rgba(246, 115, 44, 0.9);
            }
        }
    }

`

