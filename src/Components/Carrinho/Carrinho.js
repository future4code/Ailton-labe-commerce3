import React from "react";
import styled from "styled-components";
import iconeCar from "../../img/icon-car.png";
import maiorque from "../../img/maiorque.png";
import menorque from "../../img/menorque.png";
import excluir from "../../img/excluir.png";

const ContainerTexto = styled.div`
  display: flex;
  height: 45px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* gap: 15px; */
  text-overflow: ellipsis;
  padding: 0 5px 0 15px;
`;

const ContainerCarrinhos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7% 5% 0 0;
  width: 18%;
  height: 100%;
  min-height: 70vh;
  padding-left: 10px;
  /* background-color: black; */
  color: white;
  box-shadow: 1px 2px 8px 1px rgb(0 0 0 / 80%);
  border-radius: 4%;
  right: 0;
`;

const NomeContainer = styled.div`
  display: flex;
`;
const IconeCarrinho = styled.img`
  width: 25px;
  margin-right: 6px;
`;
const ContainerValor = styled.p`
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Nome = styled.div`
  max-height: 40px;
  width: 80px;
  overflow: hidden;
  text-overflow: clip;
  font-weight: bold;
`;

const Icone = styled.img`
  width: 20px;
`;

const ContainerQuantidade = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Carrinhos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
`;
const BotaoFinalizar = styled.button `
  padding: 7px;
  background-color: blueviolet;
  color: #fff;
  width: 100%;
  border-radius: 8px;
  margin-top: 16px;
  border: none;
  cursor: pointer;
`

class Carrinho extends React.Component {
  render() {
    const carrinhos = this.props.carrinho.map((produto, index) => {
      return (
        <div key={index}>
          <ContainerTexto>
            <Nome>{produto.nome}</Nome>
            <NomeContainer>
              <Icone
                src={menorque}
                onClick={() => this.props.removerQuantidade(index)}
              />
              <ContainerQuantidade>
                &nbsp;{produto.quantidade}&nbsp;
              </ContainerQuantidade>
              <Icone
                src={maiorque}
                onClick={() => this.props.adicionarQuantidade(index)}
              />
            </NomeContainer>
            <Icone
              src={excluir}
              onClick={() => this.props.removeProduto(index)}
            />
          </ContainerTexto>
          <br />
        </div>
      );
    });

    const somaPrecos = this.props.carrinho
      .map((item) => item.preco * item.quantidade)
      .reduce((prev, curr) => prev + curr, 0);

    return (
      <ContainerCarrinhos>
        <NomeContainer>
          <IconeCarrinho src={iconeCar} />
          <h2>Seus Produtos</h2>
        </NomeContainer>
        <Carrinhos>{carrinhos}</Carrinhos>
        <ContainerValor>Valor Total: R$ {somaPrecos}</ContainerValor>
        <BotaoFinalizar>Finalizar Compra</BotaoFinalizar>
      </ContainerCarrinhos>
    );
  }
}

export default Carrinho;
