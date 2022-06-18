import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 320px;
  width: 202px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  &:hover{
    cursor:pointer;
  }
`;

const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 125px;
  width: 200px;
  gap: 8px;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HeaderCards = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const MainContainer = styled.div`
  width: 100%;
`;

class Produto extends React.Component {
  render() {

    const produtosFiltrados = this.props.produto
      .filter((produto) => {
        return produto.nome
          .toLowerCase()
          .includes(this.props.inputBuscar.toLowerCase());
      })
      .filter((produto) => {
        return (
          this.props.inputValorMin === "" ||
          produto.preco >= this.props.inputValorMin
        );
      })
      .filter((produto) => {
        return (
          this.props.inputValorMax === "" ||
          produto.preco <= this.props.inputValorMax
        );
      })
      .sort((produto, segundoProduto) => {
        switch (this.props.filtro) {
          case "crescente":
            return produto.preco - segundoProduto.preco;
          default:
            return segundoProduto.preco - produto.preco;
        }
      })
      .map((produto, index) => {
        return (
          <Card key={index}>
            <Img src={produto.imagem} onClick={() => this.props.telaProduto(produto)}/>
            <ContainerTexto>
              <p>{produto.nome}</p>
              <p>R$:{produto.preco}</p>
              <button onClick={() => this.props.telaProduto(produto)}>Escolher produto</button>
              {/* <button onClick={() => this.props.adicionarItemCarrinho(produto)}>
                Adicionar ao carrinho
              </button> */}
            </ContainerTexto>
          </Card>
        );
      });

    return (
      <MainContainer>
        <HeaderCards>
          <div>
            <p>Quantidade de produtos: {this.props.produto.length}</p>
          </div>
          <div>
            <label for="filtro">Ordenar por: </label>
            <select
              name="filtro"
              value={this.props.filtro}
              onChange={this.props.onChangeFilter}
            >
              <option value="crescente">Preço: Menor ao maior</option>
              <option value="decrescente">Preço: Maior ao menor</option>
            </select>
          </div>
        </HeaderCards>
        <ContainerCard>{produtosFiltrados}</ContainerCard>
      </MainContainer>
    );
  }
}

export default Produto;
