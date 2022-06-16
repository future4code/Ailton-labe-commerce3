import React from "react";
import "./App.css";
import styled from "styled-components";
import Produto from './Components/Produto/Produto';
import Filtro from './Components/Filtro/Filtro';
import Carrinho from "./Components/Carrinho/Carrinho";

const ContainerProdutos = styled.div`
  display: flex;
  border: 1px solid black;
  width: 70%;
  flex-direction: column;
`;

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 15%;
  height: 80vh;
`

const Produtos = styled.div`
  display: flex;
`

class App extends React.Component{

  state = {
    produto: [{
      id: "1",
      imagem: "https://picsum.photos/seed/picsum/200/250",
      nome: "Produto 1",
      preco: 100,
    },
    {
      id: "2",
      imagem: "https://picsum.photos/seed/picsum/200/250",
      nome: "Produto 2",
      preco: 3500,
    },
    {
      id: "3",
      imagem: "https://picsum.photos/seed/picsum/200/250",
      nome: "Produto 3",
      preco: 4000,
    }
    ],
    carrinho: [{
      nome: [],
    }],
    inputValorMin: "0",
    inputValorMax: "0",
    inputBuscar: "",
  }

  limparFiltro = () => {
    this.setState({inputValorMin: "0"})
    this.setState({inputValorMax: "0"})
    this.setState({inputBuscar: ""})
    console.log('limpou')
  }

  onChangeInputValorMin = (event) => {
    this.setState({inputValorMin: event.target.value})
  }

  onChangeInputValorMax = (event) => {
    this.setState({inputValorMax: event.target.value})
  }

  onChangeInputBuscar = (event) => {
    this.setState({inputBuscar: event.target.value})
  }

  render() {
  return (
    <div className="container">
      <header>header</header>
      <section className="main-container">
        <Filtro inputValorMin={this.state.inputValorMin} onChangeInputValorMin={this.onChangeInputValorMin}
        inputValorMax={this.state.inputValorMax} onChangeInputValorMax={this.onChangeInputValorMax}
        inputBuscar={this.state.inputBuscar} onChangeInputBuscar={this.onChangeInputBuscar} limparFiltro={this.limparFiltro}/>
        <ContainerProdutos> 
          <Produtos>
            <Produto produto={this.state.produto} inputValorMin={this.state.inputValorMin} inputValorMax={this.state.inputValorMax} inputBuscar={this.state.inputBuscar}/>
          </Produtos>
        </ContainerProdutos>
        <ContainerCarrinho>
          <Carrinho carrinho={this.state.carrinho}/>
        </ContainerCarrinho>
      </section>
      <footer>Footer</footer>
    </div>
  );
}
}

export default App;
