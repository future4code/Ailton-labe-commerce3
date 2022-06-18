import React from "react";
import "./App.css";
import styled from "styled-components";
import Produto from "./Components/Produto/Produto";
import Filtro from "./Components/Filtro/Filtro";
import Carrinho from "./Components/Carrinho/Carrinho";

const Produtos = styled.div`
  display: flex;
  width: 60%;
`;

class App extends React.Component {
  state = {
    produto: [
      {
        id: 1,
        imagem: "https://picsum.photos/200/300?random=1",
        nome: "Produto",
        preco: 100,
        quantidade: 1,
      },
      {
        id: 2,
        imagem: "https://picsum.photos/200/300?random=2",
        nome: "Aroduto",
        preco: 350,
        quantidade: 1,
      },
      {
        id: 3,
        imagem: "https://picsum.photos/200/300?random=3",
        nome: "Zroduto",
        preco: 50,
        quantidade: 1,
      },
      {
        id: 4,
        imagem: "https://picsum.photos/200/300?random=4",
        nome: "Produto",
        preco: 500,
        quantidade: 1,
      },
    ],
    carrinho: [],
    inputValorMin: "",
    inputValorMax: "",
    inputBuscar: "",
    precoTotal: 0,
    filtro: "crescente",
  };

  limparFiltro = () => {
    this.setState({ inputValorMin: "" });
    this.setState({ inputValorMax: "" });
    this.setState({ inputBuscar: "" });
  };

  adicionarItemCarrinho = (produto) => {
    const novoItem = {
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      quantidade: 1,
    };

    let novaListaCarrinho = [...this.state.carrinho, novoItem];

    novaListaCarrinho = novaListaCarrinho.filter(function (produto) {
      return (
        !this[JSON.stringify(produto)] && (this[JSON.stringify(produto)] = true)
      );
    }, Object.create(null));

    this.setState({ carrinho: novaListaCarrinho });
  };

  adicionarQuantidade = (index) => {
    const novoItem = [...this.state.carrinho];
    if (novoItem[index].quantidade >= 0) {
      novoItem[index].quantidade++;
    }
    this.setState({ carrinho: novoItem });
  };

  removerQuantidade = (index) => {
    const novoItem = [...this.state.carrinho];
    if (novoItem[index].quantidade > 1) {
      novoItem[index].quantidade--;
    }
    this.setState({ carrinho: novoItem });
  };

  removeProduto = (id) => {
    const produtoRemovido = this.state.carrinho.filter((produto) => {
      return id !== produto.id;
    });
    this.setState({ carrinho: produtoRemovido });
  };

  onChangeInputValorMin = (event) => {
    this.setState({ inputValorMin: event.target.value });
  };

  onChangeInputValorMax = (event) => {
    this.setState({ inputValorMax: event.target.value });
  };

  onChangeInputBuscar = (event) => {
    this.setState({ inputBuscar: event.target.value });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <header>
          <h2>Mundo do <span>Astronauta</span></h2>
          <button>Minha Conta</button>
        </header>
        <section className="main-container">
          <Filtro
            inputValorMin={this.state.inputValorMin}
            onChangeInputValorMin={this.onChangeInputValorMin}
            inputValorMax={this.state.inputValorMax}
            onChangeInputValorMax={this.onChangeInputValorMax}
            inputBuscar={this.state.inputBuscar}
            onChangeInputBuscar={this.onChangeInputBuscar}
            limparFiltro={this.limparFiltro}
          />
          <Produtos>
            <Produto
              filtro={this.state.filtro}
              onChangeFilter={this.onChangeFilter}
              adicionarItemCarrinho={this.adicionarItemCarrinho}
              produto={this.state.produto}
              inputValorMin={this.state.inputValorMin}
              inputValorMax={this.state.inputValorMax}
              inputBuscar={this.state.inputBuscar}
            />
          </Produtos>
          <Carrinho
            removerQuantidade={this.removerQuantidade}
            adicionarQuantidade={this.adicionarQuantidade}
            precoTotal={this.state.precoTotal}
            removeProduto={this.removeProduto}
            carrinho={this.state.carrinho}
          />
        </section>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
