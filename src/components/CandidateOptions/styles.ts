import styled from 'styled-components'


export const Container = styled.div`

    width: 100%;

    padding: 0 0 20px 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .container{
        display: flex;
        flex-direction: column;

        height: 350px;

    }

    .candidate-name{
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;

        margin: 5px 0;
    }

    .img-footer{

        width: 290px;

        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
    }

    .option-container{

        height: 250px;

        .radio-option:checked + div.img{
            border: 4px solid rgba(255,161,89,1);
        }

        div.img{

            border: 4px solid rgba(224, 224, 224, 0.95);
            
            border-radius: 4px;
            

            :hover{
                border: 4px solid rgba(255,161,89,1);
                cursor: pointer;
            }
        }

        .first-candidate, 
        .second-candidate {
            background-image: url('images/sprite.png');
            background-repeat: no-repeat;

            display: flex;
            justify-content: center;
            align-items: center;

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
    }



`