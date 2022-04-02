import React from "react";
import { Navbar, Header, Input, Article } from "./styles";
import UserImg from '../../assets/user.png';

const Home = () =>{

        function darkMode(){
            document.getElementById('dash').style.backgroundColor='#292929';
            document.getElementById('dash').style.color='white';
        }
        
        function reset(){
            document.getElementById('dash').style.backgroundColor='white';
            document.getElementById('dash').style.color='#292929';
        }

    return(
        <div id="dash" className="row container-xxl" style={{height:"100vh"}}>
            <Navbar className="col-md-2 text-center">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Perfil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Aulas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Configurações</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sair</a>
                    </li>

                    <li class="nav-item">
                        <a style={{backgroundColor:"white",color:'#777CF9'}} onClick={darkMode} onDoubleClick={reset} class="nav-link" href="#">Tema Escuro</a>
                    </li>
                </ul>
            </Navbar>

            <div className="col-md-10">
                <Header className="row">
                    <h1>DASHBOARD</h1>

                    <span className="row">
                        <img src={UserImg}/>
                        <button> <i class="material-icons">message</i></button>
                    </span>
                </Header>

                <Input>
                    <div class="input-group mb-4">
                        <input type="text" class="form-control"  aria-describedby="button-addon2" />
                        <button class="btn" type="button" id="button-addon2">Pesquisar</button>
                    </div>
                </Input>

                <Article className="row">
                    <div className="col-md-4 bg-primary p-2">
                        <h1>Aulas</h1>

                    </div>


                    <div className="col-md-4 bg-danger">
                        input checkbox - seção 2
                    </div>


                    <div className="col-md-4 bg-success p-3" >
                        <p>Tarefas Entregues 📎</p>
                    </div>
                </Article>

                <footer>seção footer</footer>
            </div>
        </div>
    );
}

export default Home;