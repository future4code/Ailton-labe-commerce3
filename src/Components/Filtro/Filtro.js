import React from "react";
import styled from "styled-components";

const ContainerFiltros = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 15%;
  height: 80vh;
  padding: 25px 10px;
  gap: 15px;
`

const Titulo = styled.h3`
margin-bottom: 10px;
`

class Filtro extends React.Component {


  render() {
    return (
        <ContainerFiltros>
            <Titulo>Filtros</Titulo>
            <label>Valor mínimo:
                <input type="number" value={this.props.inputValorMin} onChange={this.props.onChangeInputValorMin}></input>
            </label>
            <label>Valor máximo:
                <input type="number" value={this.props.inputValorMax} onChange={this.props.onChangeInputValorMax}></input>
            </label>
            <label>Buscar:
                <input type="text" value={this.props.inputBuscar} onChange={this.props.onChangeInputBuscar}></input>
            </label>
        </ContainerFiltros>
    )
  }
}

export default Filtro;
