import React from "react";
import styled from "styled-components";

const ContainerTexto = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
`;

const Botao = styled.button`
  height: 20px;
  width: 15%;
`;

const ContainerCarrinhos = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  height: 80vh;
`;

class Carrinho extends React.Component {
  render() {
    const carrinhos = this.props.carrinho.map((produto, index) => {
      return (
        <div key={index}>
            <ContainerTexto>
              <p>{produto.quantidade}x</p>
              <p>{produto.nome}</p>
              <Botao onClick={() => this.props.removerQuantidade(index)}>-</Botao>
              <Botao onClick={() => this.props.adicionarQuantidade(index)}>+</Botao>
              <Botao onClick={() => this.props.removeProduto(index)}>X</Botao>
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
        <h3>Carrinho</h3>
        <div>{carrinhos}</div>
        <p>Valor Total: R$ {somaPrecos}</p>
      </ContainerCarrinhos>
    );
  }
}

export default Carrinho;
