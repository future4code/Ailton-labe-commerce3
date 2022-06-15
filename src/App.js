import React from 'react';
import './App.css';
import styled from "styled-components";
import Produto from './Components/Produto/Produto';

const ContainerFiltros = styled.div`
  display: flex;
  border: 1px solid black;
  width: 15%;
`

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
`

const Produtos = styled.div`
  display: flex;
  
`

function App() {
  return (
    <div className="container">
      <header>header</header>
      <section className="main-container">
        <ContainerFiltros>
          <h3>Filtros</h3>
        </ContainerFiltros>
        <ContainerProdutos>
          <div>Headerr</div>
          <Produtos>
            <Produto />
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

export default App;
