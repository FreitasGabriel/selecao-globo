import styled from 'styled-components'


export const Container = styled.div`

    width: 100%;

    padding: 40px 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .options-container{

        .radio-option:checked + div.img{
            border: 4px solid rgba(255,161,89,1);
        }

        div.img{
            border: 1px solid rgba(118, 118, 118, 0.4);
            border-radius: 4px;
            

            :hover{
                border: 4px solid rgba(255,161,89,1);
            }
        }

        .first-candidate, 
        .second-candidate {
            background-image: url('images/sprite.png');
            background-repeat: no-repeat;
        }

        .first-candidate{
            height: 240px;
            width: 280px;

            margin: 5px 0;

            background-position: -10px -198px;
        }

        .second-candidate{
            height: 240px;
            width: 280px;

            background-position: -340px -198px;
        }
    }



`