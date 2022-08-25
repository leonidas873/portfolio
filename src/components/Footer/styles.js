import styled from 'styled-components';

export const Networks = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:20px;
    padding:10px;
    margin-bottom:10px;
    margin-top:30px;
`

export const Network = styled.a`
    padding:15px;
    color:white;
    background-color:#262f38;
    text-decoration:none;
    cursor:pointer;
    transition:0.3s;
    &:hover{
        background-color:#33ffba50;
        transform:scale(1.1)
    }
`

export const Text = styled.p`
    font-size:13px;
    color:gray;
    text-align:center;
`


export const Shape = styled.div`
clip-path: polygon(50% 100%, 0 0, 100% 0);
background-color:#cc004550;
width: 100%;
max-width:1200px;
height:100px;

`