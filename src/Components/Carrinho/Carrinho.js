import React from "react";
import styled from "styled-components";
import iconeCar from '../../img/icon-car.png';

const ContainerTexto = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  text-overflow: ellipsis;
`;

const Botao = styled.button`
  padding: 3px 10px;
  background-color: blueviolet;
  color: #fff;
  border: none;
  border-radius: 6px;
`;

const ContainerCarrinhos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border: 1px solid black;
  width: 18%;
  height: 70vh;
  /* position: fixed; */
  right: 0;
` 

const NomeContainer = styled.div`
  display: flex;
`
const IconeCarrinho = styled.img `
  width: 25px;
  margin-right: 6px;
`
const NomeProduto = styled.p `
  font-weight: bold;
`

const Nome = styled.div`
  max-height: 40px;
  width: 80px;
  overflow: hidden;
  text-overflow: clip;
  font-weight: bold;
`

class Carrinho extends React.Component {
  render() {
    const carrinhos = this.props.carrinho.map((produto, index) => {
      return (
        <div key={index}>
            <ContainerTexto>
              <NomeProduto>{produto.quantidade}x</NomeProduto>
              <Nome>{produto.nome}</Nome>
              <Botao onClick={() => this.props.removerQuantidade(index)}>-</Botao>
              <Botao onClick={() => this.props.adicionarQuantidade(index)}>+</Botao>
              <Botao onClick={() => this.props.removeProduto(index)}>x</Botao>
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
        <IconeCarrinho src={iconeCar}/>
        <h2>Seus Produtos</h2>
        </NomeContainer>
        <div>{carrinhos}</div>
        <NomeProduto>Valor Total: R$ {somaPrecos}</NomeProduto>
      </ContainerCarrinhos>
    );
  }
}

export default Carrinho;
