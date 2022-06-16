import React from "react";
import styled from "styled-components";

const ContainerTexto = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const Botao = styled.button`
  height: 20px;
  width: 35%;
`

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  height: 80vh;
`

class Carrinho extends React.Component {
  render() {

    const carrinhos = this.props.carrinho.map((produto, index) => {
      return (
        <div key={index}>
            <ContainerTexto>
              <p>{produto.quantidade}x</p>
              <p>{produto.nome}</p>
              <Botao>Remover</Botao>
            </ContainerTexto>
          <br />
        </div>
      )
    })

    return (
      <ContainerCarrinho>
        <h3>Carrinho</h3>
        <div>{carrinhos}</div>
        <p>Valor Total:</p>
      </ContainerCarrinho>
    );
  }
}

export default Carrinho;
