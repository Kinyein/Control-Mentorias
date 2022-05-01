import styled from "styled-components";


export const ContainerForm = styled.div`
    text-align: center;
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: white;
    }

    img.logoImg{
        width: 100px;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin: 20px;
        background-color: #E9D5DA;
        padding: 20px 40px;
        border-radius: 8px;

        input{
            padding: 6px 15px;
            border: 1px solid grey;
            border-radius: 4px;
        }
        input:focus{
            outline: 1px solid #363062;
        }

        button{
            background: #4D4C7D;
            border: 1px solid #363062;
            padding: 10px 30px;
            border-radius: 4px;
            color: white;
            margin: 20px;
            cursor: pointer;
            transition: background-color .2s;
        }
        button:active{
            background: #363062;
        }
    }

    p{
        a{
            color: #827397;
        }
    }
`
export const Error = styled.div`
    color: #AF2F2F;
    /* background-color: white;
    padding: 1px 10px; 
    border-radius: 4px; */
    font-size: 16px;
`
export const LoginGoogleFace = styled.div`
    /* margin: 20px; */
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    color: #3b5998;

    .iconContainer{
        width: 180px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        transition: .3s;

        p{
            font-size: 15px;
            color: white;
            margin: 3px;
        }
    }

    .iconContainerGoogle{
        background-color: #AF2F2F;
    }

    .iconContainerFacebook{
        background-color: #2664AB;
    }

    .iconContainer:hover{
        transform: scale(1.05);
    }

    .icon{
        font-size: 25px;
        margin: 5px;
        color: white;
    }

    .iconGoogle{
        padding: .5px 1px;
        border-radius: 50%;
    }

    .iconFacebook{
        /* background-color: white; */
        border-radius: 50%;
    }
`