import React from "react";
import styled from "styled-components";

const ContainerFiltros = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 80vh;
  padding: 25px 10px;
  gap: 15px;
`;

const Titulo = styled.h3`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 6px;
  border-radius: 8px;
`;
const Botao = styled.button `
  padding: 8px 0px;
  border-radius: 7px;
  background-color: blueviolet;
  color: #fff;
  border: none;
  `

class Filtro extends React.Component {
  render() {
    return (
      <ContainerFiltros>
        <Titulo>Faça sua Busca</Titulo>
        <label>
          Por Valor mínimo:
          <Input
            type="number"
            value={this.props.inputValorMin}
            onChange={this.props.onChangeInputValorMin}
          />
        </label>
        <label>
          Por Valor máximo:
          <Input
            type="number"
            value={this.props.inputValorMax}
            onChange={this.props.onChangeInputValorMax}
          />
        </label>
        <label>
          Por Nome:
          <Input
            type="text"
            value={this.props.inputBuscar}
            onChange={this.props.onChangeInputBuscar}
          />
        </label>
        <Botao onClick={this.props.limparFiltro}>Limpar filtros</Botao>
      </ContainerFiltros>
    );
  }
}

export default Filtro;
