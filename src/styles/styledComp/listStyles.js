import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`

export const ListContainer = styled.div`
    display: flex;
    gap: 20px;
    margin: 20px;
    flex-wrap: wrap;

    .headerCard{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        .buttonContainer{
            display: flex;
            gap: 5px;

            .button{
                border: none;
                outline: none;
                color: black;
                font-size: 25px;
                height: 40px;
                width: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition:  transform .3s;
            }
    
            .button.editButton:hover{
                background-color: lightblue;
                transform: scale(1.1);
            }
    
            .button.deleteButton:hover{
                color: white;
                background-color: lightcoral;
                transform: scale(1.1);
            } 

            .button.editButton:active, .button.deleteButton:active{
                /* background: grey; */
                transform: scale(.8);
            }
        }
    }

`