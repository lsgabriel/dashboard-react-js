import React from "react";
import { MainContainer, Navbar, Header, Input, Article, Footer} from "./styles";
import User from '../../assets/user.png';
import List from "../../components/List";

import { BsFillPersonLinesFill, BsFillBookmarkDashFill, BsFillDoorOpenFill, BsMoonStarsFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";

import { FaFilePowerpoint,FaFileExcel } from "react-icons/fa";
import CardSm from "../../components/CardSm";
import CardMd from "../../components/CardMd";

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
        <MainContainer id="dash" className="row container-xxl">
            <Navbar className="col-md-2 text-center">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><BsFillPersonLinesFill style={{fontSize:21}}/>Perfil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><BsFillBookmarkDashFill style={{fontSize:21}}/>Aulas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><AiTwotoneSetting style={{fontSize:21}}/>Configurações</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><BsFillDoorOpenFill style={{fontSize:21}}/>Sair</a>
                    </li>

                    <li class="nav-item">
                        <a style={{backgroundColor:"white",color:'#777CF9'}} onClick={darkMode} onDoubleClick={reset} class="nav-link" href="#"><BsMoonStarsFill style={{fontSize:21}}/></a>
                    </li>
                </ul>
            </Navbar>

            <div className="col-md-10">
                <Header className="row">
                    <h1>DASHBOARD</h1>

                    <span className="row">
                        <img src={User}/>
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
                    <div className="col-md-4">
                        <p className="title">Aulas</p>

                        <List bg="#777CF9" text="25/02- Aula SQL"/>
                        <List bg="#777CF9" text="26/02- Aula HTML CSS" />
                        <List bg="#777CF9" text="28/02- Aula Javascript" />
                        <List bg="#777CF9" text="29/02- Aula Javascript"/>
                    </div>


                    <div className="tasks col-md-4">
                        <p className="title">A Fazer</p>

                        <div className="toDo p-1">
                            <input className="m-1" type="checkbox" id="scales" name="scales"/>
                            <label for="scales">Projeto Landing Page</label>
                        </div>
                        <div className="toDo p-1">
                            <input className="m-1" type="checkbox" id="scales" name="scales"/>
                            <label for="scales">Tarefa SQL</label>
                        </div>
                        <div className="toDo p-1">
                            <input className="m-1" type="checkbox" id="scales" name="scales"/>
                            <label for="scales">Tarefa Javascript</label>
                        </div>
                        <div className="toDo p-1">
                            <input className="m-1" type="checkbox" id="scales" name="scales"/>
                            <label for="scales">Tarefa Javascript 2</label>
                        </div>
                        <div className="toDo p-1">
                            <input className="m-1" type="checkbox" id="scales" name="scales"/>
                            <label for="scales">Projeto ReactJS</label>
                        </div>
                    </div>


                    <div className="delivered col-md-4" >
                        <p className="title">Tarefas Entregues</p>

                        <List bg="#E16559" icon={<FaFilePowerpoint style={{fontSize:21}}/>} text="Projeto Personas"/>
                        <List bg="#10B680" icon={<FaFileExcel style={{fontSize:21}}/>} text="Pesquisa HTML/CSS"/>
                        <List bg="#E16559" icon={<FaFilePowerpoint style={{fontSize:21}}/>} text="Apresentação JS"/>
                        <List bg="#10B680" icon={<FaFileExcel style={{fontSize:21}}/>} text="Pesquisa SQL"/>
                    </div>
                </Article>

                <Footer>
                    <h1>Perfil</h1>

                    <div className="row cards-div">
                        <CardMd/> <CardSm/> <CardSm/>
                    </div>
                </Footer>
            </div>
        </MainContainer>
    );
}

export default Home;