import React from "react";
import "./App.css";
import styled from "styled-components";
import Produto from "./Components/Produto/Produto";
import Filtro from "./Components/Filtro/Filtro";
import Carrinho from "./Components/Carrinho/Carrinho";
import OpcoesProduto from "./Components/OpcoesProduto/OpcoesProduto";
import produto1 from './img/produto1/produto1.png';
import produto12 from './img/produto1/produto13.png';
import produto13 from './img/produto1/produto12.png';
import produto2 from './img/produto2/produto2.jpg';
import produto22 from './img/produto2/produto22.jpg';


const Produtos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const CardInicio = styled.img `
  max-width: 100%;
  height: 500px;
`

class App extends React.Component {
  state = {
    produto: [
      {
        nome: "Camiseta masculina astronauta preta",
        preco: 150,
        quantidade: 1,
        imagensExtra: [produto1, produto12, produto13]
      },
      {
        nome: "Produto 3",
        preco: 200,
        quantidade: 1,
        imagensExtra: [produto2, produto22]
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
    buscar: true,
  };

  limparFiltro = () => {
    this.setState({ inputValorMin: "" });
    this.setState({ inputValorMax: "" });
    this.setState({ inputBuscar: "" });
  };

  trocarImagem = (produto, index) => {
    const novoItem = {
      imagem: produto.imagensExtra[index],
      nome: produto.nome,
      preco: produto.preco,
      quantidade: 1,
      imagensExtra: [produto.imagensExtra[0], produto.imagensExtra[1], produto.imagensExtra[2]],
    };

    let descricaoCarrinho = [novoItem];
    this.setState({ arrCarrinhoOpcao: descricaoCarrinho });
  }

  telaProduto = (produto) => {
    const novoItem = {
      imagem: produto.imagensExtra[0],
      nome: produto.nome,
      preco: produto.preco,
      quantidade: 1,
      imagensExtra: [produto.imagensExtra[0], produto.imagensExtra[1], produto.imagensExtra[2]],
    };

    let descricaoCarrinho = [novoItem];

    this.setState({ arrCarrinhoOpcao: descricaoCarrinho });
    this.setState({ opcoesCarrinho: !this.state.opcoesCarrinho });
  };
  
  renderizarInputsBuscar = () => {
    this.setState({ buscar: !this.state.buscar})
  }

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
        <header>
          <h2>Mundo do <span>Astronauta</span></h2>
          <button>Minha Conta</button>
        </header>
        {/* <main>
          <CardInicio src="" />
        </main> */}
        <section className="main-container">
          <OpcoesProduto
            trocarImagem={this.trocarImagem}
            produto={this.state.produto}
            fecharTelaProduto={this.fecharTelaProduto}
            opcoesCarrinho={this.state.opcoesCarrinho}
            arrCarrinhoOpcao={this.state.arrCarrinhoOpcao}
            adicionarItemCarrinho={this.adicionarItemCarrinho}
          />
          <Produtos>
            <Filtro
              renderizarInputsBuscar={this.renderizarInputsBuscar}
              buscar={this.state.buscar}
              inputValorMin={this.state.inputValorMin}
              onChangeInputValorMin={this.onChangeInputValorMin}
              inputValorMax={this.state.inputValorMax}
              onChangeInputValorMax={this.onChangeInputValorMax}
              inputBuscar={this.state.inputBuscar}
              onChangeInputBuscar={this.onChangeInputBuscar}
              limparFiltro={this.limparFiltro}
            />
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
