import React from "react";
import styled from "styled-components";
import Produto from "../Produto/Produto";


const Card = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  padding: 5px;
`

const ContainerTexto = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const Botao = styled.button`
  height: 20px;
`

class Carrinho extends React.Component {
  render() {

    const carrinhos = this.props.carrinho.map((produto) => {
      return (
        <div>
          <Card>
            <ContainerTexto>
              <p>1x</p>
              <p>{produto.nome}</p>
              <Botao>Remover</Botao>
            </ContainerTexto>
          </Card>
          <br />
          <p>Valor Total:</p>
        </div>
      )
    })

    return (
      <div>
        <div>{carrinhos}</div>
      </div>
    );
  }
}

export default Carrinho;
