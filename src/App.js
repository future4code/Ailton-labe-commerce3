import React from "react";
import "./App.css";
import styled from "styled-components";
import Produto from "./Components/Produto/Produto";
import Filtro from "./Components/Filtro/Filtro";
import Carrinho from "./Components/Carrinho/Carrinho";
import OpcoesProduto from "./Components/OpcoesProduto/OpcoesProduto";

const Produtos = styled.div`
  display: flex;
  border: 1px solid black;
  width: 60%;
`;

class App extends React.Component {
  state = {
    produto: [
      {
        imagem: "https://picsum.photos/200/300?random=1",
        nome: "Produto 1",
        preco: 100,
        quantidade: 1,
      },
      {
        imagem: "https://picsum.photos/200/300?random=2",
        nome: "Produto 2",
        preco: 150,
        quantidade: 1,
      },
      {
        imagem: "https://picsum.photos/200/300?random=3",
        nome: "Produto 3",
        preco: 200,
        quantidade: 1,
      },
      {
        imagem: "https://picsum.photos/200/300?random=4",
        nome: "Produto 4",
        preco: 250,
        quantidade: 1,
      },
      {
        imagem: "https://picsum.photos/200/300?random=5",
        nome: "Produto 5",
        preco: 300,
        quantidade: 1,
      },
      {
        imagem: "https://picsum.photos/200/300?random=6",
        nome: "Produto 6",
        preco: 350,
        quantidade: 1,
      },
      {
        imagem: "https://picsum.photos/200/300?random=7",
        nome: "Produto 7",
        preco: 400,
        quantidade: 1,
      },
      {
        imagem: "https://picsum.photos/200/300?random=8",
        nome: "Produto 8",
        preco: 450,
        quantidade: 1,
      },
      {
        imagem: "https://picsum.photos/200/300?random=9",
        nome: "Produto 9",
        preco: 500,
        quantidade: 1,
      },
    ],
    carrinho: [],
    arrCarrinhoOpcao: [],
    inputValorMin: "",
    inputValorMax: "",
    inputBuscar: "",
    precoTotal: 0,
    filtro: "crescente",
    opcoesCarrinho: false,
  };

  limparFiltro = () => {
    this.setState({ inputValorMin: "" });
    this.setState({ inputValorMax: "" });
    this.setState({ inputBuscar: "" });
  };

  telaProduto = (produto) => {
    const novoItem = {
      imagem: produto.imagem,
      nome: produto.nome,
      preco: produto.preco,
      quantidade: 1,
    };

    let descricaoCarrinho = [novoItem];

    this.setState({ arrCarrinhoOpcao: descricaoCarrinho });
    this.setState({ opcoesCarrinho: !this.state.opcoesCarrinho });
  };

  fecharTelaProduto = () => {
    this.setState({ opcoesCarrinho: !this.state.opcoesCarrinho });
  }

  adicionarItemCarrinho = (produto) => {
    const novoItem = {
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
    this.setState({ opcoesCarrinho: !this.state.opcoesCarrinho });
  };

  adicionarQuantidade = (index) => {
    const novoArrayCarrinho = [...this.state.carrinho];
    novoArrayCarrinho[index].quantidade++;

    this.setState({ carrinho: novoArrayCarrinho });
  };

  removerQuantidade = (index) => {
    const novoItem = [...this.state.carrinho];
    if (novoItem[index].quantidade > 1) {
      novoItem[index].quantidade--;
    }
    this.setState({ carrinho: novoItem });
  };

  removeProduto = (indexClicado) => {
    const produtoRemovido = this.state.carrinho.filter((produto, index) => {
      return indexClicado !== index;
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
        <header>header</header>
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
          <OpcoesProduto
            fecharTelaProduto={this.fecharTelaProduto}
            opcoesCarrinho={this.state.opcoesCarrinho}
            arrCarrinho={this.state.arrCarrinhoOpcao}
            adicionarItemCarrinho={this.adicionarItemCarrinho}
          />
          <Produtos>
            <Produto
              telaProduto={this.telaProduto}
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
