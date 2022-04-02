import styled from 'styled-components';

export const Navbar = styled.nav`

    .nav-link{
        background-color: #777CF9;margin-top: 1.5rem;width: 92%;text-decoration: none;
        color: white;font-weight: 500;font-size: 1.1rem;border-radius: 0.48rem;
        margin-left: 0.5rem;

        &:hover{color:lightgray}
    }
`;

export const Header = styled.header`
    font-weight: 500;margin-top:1%;

    h1{
        font-size: 2rem;width:83%;

        @media screen and (max-width: 470px) {width: 48%;font-size:1.5rem;}
    }

    span{
        width:15%;margin:auto;

        @media screen and (max-width: 470px) {width: 50%;}
    }

    img{width:59%;}

    button{
        background-color:#777CF9;width:40%;height:8vh;
        color:white;margin-top:2%;
        border: solid 2px white;border-radius:50%;

        i{
            margin-top:25%;
            &:hover{opacity:0.7}
        }
    }
`;

export const Input = styled.div`
    width:45%;
    @media screen and (max-width: 470px) {width: 100%;}

    input[type="text"]{
        background-color: #777CF9;color:white;border:solid 1px #777CF9;
    }

    .btn{
        background-color: #3C3C3C;color:white;border:solid 1px #777CF9;
    }
`;

export const Article = styled.article`
    h1{font-weight:500;font-size:2rem;}
    p{font-weight:300;font-size:1.5rem;}
`