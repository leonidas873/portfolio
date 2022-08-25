import styled from "styled-components"

export const FormWrapper = styled.div`
    max-width:1200px;
    width:100%;
    background-color:"#cc004550";
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#EAE3D2;
    background-color:#cc004550;
    padding-bottom:40px;
    form{
        display:flex;
        flex-direction:column; 
        width:90%;
        max-width:500px;
        & .text-input{
            background:#040348;
            color:white;
            border:1px solid #EAE3D2;
            margin:10px 0;
            line-height:18px;
            font-size:18px;
            padding:5px;
        }
        & .text-area{
            background:#040348;
            color:white;
            border:1px solid #EAE3D2;
            margin:10px 0;
            line-height:18px;
            font-size:18px;
            padding:5px;
        }
        .error{
            color:red;
            font-size:12px;
            margin-bottom:10px;
        }

        button{
            
            width:200px;
            margin:auto;
            margin-top:40px;
            border:none;
            outline:none;
            padding:10px;
            background:#33ffba;
            color:#040348;
            font-weight:bold;
            cursor:pointer;
            transition:0.3s;
        }
        button:hover{
            transform:scale(1.2)
        }

        button:disabled{
            opacity:0.5;
        }
        button:disabled:hover{
            transform:scale(1)
        }
    }
`

export const Title= styled.h2`
padding:20px 30px;
        margin:0;
        font-size:30px;
`