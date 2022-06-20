import React from "react";
import "./App.css";
import styled from "styled-components";
import Produto from "./Components/Produto/Produto";
import Filtro from "./Components/Filtro/Filtro";
import Carrinho from "./Components/Carrinho/Carrinho";
import OpcoesProduto from "./Components/OpcoesProduto/OpcoesProduto";
import produto1 from "./img/produto1/produto1.png";
import produto12 from "./img/produto1/produto13.png";
import produto13 from "./img/produto1/produto12.png";
import produto2 from "./img/produto2/produto2.png";
import produto21 from "./img/produto2/produto21.png";
import produto22 from "./img/produto2/produto22.png";
import produto3 from "./img/produto3/produto3.png";
import produto31 from "./img/produto3/produto31.png";
import produto32 from "./img/produto3/produto32.png";
import produto4 from "./img/produto4/produto4.png";
import produto41 from "./img/produto4/produto41.png";
import produto42 from "./img/produto4/produto42.png";
import produto5 from "./img/produto5/produto5.png";
import produto51 from "./img/produto5/produto51.png";
import produto6 from "./img/produto6/produto6.png";
import produto61 from "./img/produto6/produto61.png";
import produto7 from "./img/produto7/produto7.png";
import produto71 from "./img/produto7/produto71.png";
import produto8 from "./img/produto8/produto8.jpg";
import produto81 from "./img/produto8/produto81.jpg";
import produto9 from "./img/produto9/produto9.png";
import produto91 from "./img/produto9/produto91.png";
import produto92 from "./img/produto9/produto92.png"; 
import produto10 from "./img/produto10/produto10.png";
import produto101 from "./img/produto10/produto101.png";
import produto102 from "./img/produto10/produto102.png";
import produto11 from "./img/produto11/produto11.png";
import produto111 from "./img/produto11/produto111.png";
import produto112 from "./img/produto11/produto112.png";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import whatsapp from "./img/whatsapp.png";
import astronauta from "./img/astronauta.png";

const Produtos = styled.div`
  display: flex;
  flex-direction: column;
  width: 73%;
`;

class App extends React.Component {
  state = {
    produto: [
      {nome: "Camiseta masculina astronauta preta",preco: 150,quantidade: 1,imagensExtra: [produto1, produto12, produto13]},
      {nome: "Moletom light Nasa retro branco",preco: 200,quantidade: 1,imagensExtra: [produto6, produto61]},
      {nome: "Camisa relax de viscose estampada nasa manga curta preta",preco: 200,quantidade: 1,imagensExtra: [produto7, produto71]},
      {nome: "Camiseta Nasa Logo - Plus size branca",preco: 200,quantidade: 1,imagensExtra: [produto9, produto91, produto92]},
      {nome: "Camiseta Nasa Vintage - Plus size verde musgo",preco: 200,quantidade: 1,imagensExtra: [produto10, produto101, produto102]},
      {nome: "Camiseta masculina Raglan Nasa",preco: 200,quantidade: 1,imagensExtra: [produto8, produto81]},
      {nome: "Camiseta I need my space - preta",preco: 200,quantidade: 1,imagensExtra: [produto11, produto112, produto111]},
      {nome: "Camisa meninos estampa astronauta",preco: 200,quantidade: 1,imagensExtra: [produto2, produto21, produto22]},
      {nome: "Camisa meninos botões estampa galáxia",preco: 200,quantidade: 1,imagensExtra: [produto3, produto31, produto32]},
      {nome: "Camisa feminina estampa astronauta preta",preco: 200,quantidade: 1,imagensExtra: [produto4, produto41, produto42]},
      {nome: "Camiseta meninos estampa de astronauta refletiva",preco: 200,quantidade: 1,imagensExtra: [produto5, produto51]},
      {
        nome: "Produto exemplo",
        preco: 200,
        quantidade: 1,
        imagensExtra: []
      }

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
      imagensExtra: [
        produto.imagensExtra[0],
        produto.imagensExtra[1],
        produto.imagensExtra[2],
      ],
    };

    let descricaoCarrinho = [novoItem];
    this.setState({ arrCarrinhoOpcao: descricaoCarrinho });
  };

  telaProduto = (produto) => {
    const novoItem = {
      imagem: produto.imagensExtra[0],
      nome: produto.nome,
      preco: produto.preco,
      quantidade: 1,
      imagensExtra: [
        produto.imagensExtra[0],
        produto.imagensExtra[1],
        produto.imagensExtra[2],
      ],
    };

    let descricaoCarrinho = [novoItem];

    this.setState({ arrCarrinhoOpcao: descricaoCarrinho });
    this.setState({ opcoesCarrinho: !this.state.opcoesCarrinho });
  };

  renderizarInputsBuscar = () => {
    this.setState({ buscar: !this.state.buscar });
  };

  fecharTelaProduto = () => {
    this.setState({ opcoesCarrinho: !this.state.opcoesCarrinho });
  };

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
          <div className="icone-titulo-header">
          <img src={astronauta} className="icone-header"/>
          <h2>
            Mundo do <span>Astronauta</span>
          </h2>
          </div>
          <button>Minha Conta</button>
        </header>
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
        <footer>
          <div>
              <p>Siga-nos nas redes sociais!</p>
          </div>
          <div>
          <a href="https://www.facebook.com" target="_blank">
            <img src={facebook} />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={instagram} />
          </a>
          <a href="https://www.whatsapp.com" target="_blank">
            <img src={whatsapp} />
          </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
