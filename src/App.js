import React from "react";
import "./App.css";
import styled from "styled-components";
import Produto from './Components/Produto/Produto';
import Filtro from './Components/Filtro/Filtro';
import Carrinho from "./Components/Carrinho/Carrinho";

const ContainerProdutos = styled.div`
  display: flex;
  border: 1px solid black;
  width: 60%;
  flex-direction: column;
`;

const Produtos = styled.div`
  display: flex;
`

class App extends React.Component{

  state = {
    produto: [{
      id: 1,
      imagem: "https://picsum.photos/200/300?random=1",
      nome: "Produto 1",
      preco: 100,

    },
    {
      id: 2,
      imagem: "https://picsum.photos/200/300?random=2",
      nome: "Produto 2",
      preco: 3500,

    },
    {
      id: 3,
      imagem: "https://picsum.photos/200/300?random=3",
      nome: "Produto 3",
      preco: 4000,
    }
    ],
    carrinho: [],
    inputValorMin: "0",
    inputValorMax: "0",
    inputBuscar: "",
    precoTotal: 0,
  }

  limparFiltro = () => {
    this.setState({inputValorMin: "0"})
    this.setState({inputValorMax: "0"})
    this.setState({inputBuscar: ""})
  }

  adicionarItemCarrinho = (produto) => {
    const novoItem = {
      nome: produto.nome,
      preco: produto.preco,
      id: produto.id,
      quantidade: 1
    }

    let novaListaCarrinho = [...this.state.carrinho, novoItem]

    novaListaCarrinho = novaListaCarrinho.filter(function (produto) {
      return !this[JSON.stringify(produto)] && (this[JSON.stringify(produto)] = true);
    }, Object.create(null))
    
    this.setState({carrinho: novaListaCarrinho})
  } 

  removeProduto = (id) => {
    const produtoRemovido = this.state.carrinho.filter((produto) => {
      return id !== produto.id
    });
    this.setState({carrinho: produtoRemovido})
    const somaPrecos = this.state.carrinho.map(item => item.preco).reduce((prev, curr) => prev + curr, 0);
    this.setState({precoTotal: somaPrecos})
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
            <Produto adicionarItemCarrinho={this.adicionarItemCarrinho} produto={this.state.produto} inputValorMin={this.state.inputValorMin} inputValorMax={this.state.inputValorMax} inputBuscar={this.state.inputBuscar}/>
          </Produtos>
        </ContainerProdutos>
          <Carrinho precoTotal={this.state.precoTotal} removeProduto={this.removeProduto} carrinho={this.state.carrinho}/>
      </section>
      <footer>Footer</footer>
    </div>
  );
}
}

export default App;
