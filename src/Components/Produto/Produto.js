import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 320px;
  width: 204px;
  border-radius: 12px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px;
  box-shadow: 1px 2px 8px 1px rgb(0 0 0 / 80%);
  &:hover{
    cursor:pointer;
    color: white;
    font-weight: bold;
    border: 2px solid blueviolet;
    box-shadow: 1px 2px 8px 1px rgb(0 0 0 / 0%);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 198px;
  border-radius: 6%;
`;

const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  height: 27%;
  width: 100%;
  gap: 4px;
  align-items: baseline;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 0 20px;
  color: white; 
`;

const HeaderCards = styled.div`
  display: flex;
  color: white;
  width: 100%;
  justify-content: space-between;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const QuantidadeProduto = styled.div`
  margin-left: 4%;
`

const Botao = styled.button`
  padding: 8px 0px;
  border-radius: 7px;
  background-color: blueviolet;
  color: #fff;
  border: none;
  width: 70%;
`;

const Ordenacao = styled.div`
  margin-right: 8%;
`

const ContainerBotao = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Titulo = styled.div`
  height: 80%;
`

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
          <Card key={index} onClick={() => this.props.telaProduto(produto)}>
            <Img src={produto.imagensExtra[0]} onClick={() => this.props.telaProduto(produto)}/>
            <ContainerTexto>
              <Titulo>
                <p>{produto.nome}</p>
              </Titulo>
              <div>
                <p>R$:{produto.preco}</p>
              </div>
            </ContainerTexto>
            {/* <ContainerBotao>
              <Botao onClick={() => this.props.telaProduto(produto)}>Escolher produto</Botao>
            </ContainerBotao> */}
          </Card>
        );
      });

    return (
      <MainContainer>
        <HeaderCards>
          <QuantidadeProduto>
            <p>Quantidade de produtos: {produtosFiltrados.length}</p>
          </QuantidadeProduto>
          <Ordenacao>
            <label for="filtro">Ordenar por: </label>
            <select
              name="filtro"
              value={this.props.filtro}
              onChange={this.props.onChangeFilter}
            >
              <option value="crescente">Preço: Menor ao maior</option>
              <option value="decrescente">Preço: Maior ao menor</option>
            </select>
          </Ordenacao>
        </HeaderCards>
        <ContainerCard>{produtosFiltrados}</ContainerCard>
      </MainContainer>
    );
  }
}

export default Produto;
