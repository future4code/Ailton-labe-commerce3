import React from 'react';
import './App.css';
import styled from "styled-components";
import Produto from './Components/Produto/Produto';
import Filtro from './Components/Filtro/Filtro';
import { render } from '@testing-library/react';

const ContainerProdutos = styled.div`
  display: flex;
  border: 1px solid black;
  width: 70%;
  flex-direction: column;
`

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
    inputValorMin: "0",
    inputValorMax: "0"
  }

  onChangeInputValorMin = (event) => {
    this.setState({inputValorMin: event.target.value})
  }

  onChangeInputValorMax = (event) => {
    this.setState({inputValorMax: event.target.value})
  }

  render() {
  return (
    <div className="container">
      <header>header</header>
      <section className="main-container">
        <Filtro inputValorMin={this.state.inputValorMin} onChangeInputValorMin={this.onChangeInputValorMin}
        inputValorMax={this.state.inputValorMax} onChangeInputValorMax={this.onChangeInputValorMax}/>
        <ContainerProdutos> 
          <Produtos>
            <Produto inputValorMin={this.state.inputValorMin} inputValorMax={this.state.inputValorMax}/>
          </Produtos>
        </ContainerProdutos>
        <ContainerCarrinho>
          <h3>Carrinho</h3>
          <div>Carrinhos</div>
          <p>Valor Total:</p>
        </ContainerCarrinho>
      </section>
      <footer>Footer</footer>
    </div>
  );
}
}

export default App;
