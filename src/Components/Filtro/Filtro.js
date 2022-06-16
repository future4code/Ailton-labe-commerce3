import React from "react";
import styled from "styled-components";

const ContainerFiltros = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  height: 80vh;
  padding: 25px 10px;
  gap: 15px;
`

const Titulo = styled.h3`
margin-bottom: 10px;
`

const Input = styled.input`
  width: 90%
`

class Filtro extends React.Component {


  render() {
    return (
        <ContainerFiltros>
            <Titulo>Filtros</Titulo>
            <label>Valor mínimo:
                <Input type="number" value={this.props.inputValorMin} onChange={this.props.onChangeInputValorMin} />  
            </label>
            <label>Valor máximo:
                <Input type="number" value={this.props.inputValorMax} onChange={this.props.onChangeInputValorMax} />
            </label>
            <label>Buscar:
                <Input type="text" value={this.props.inputBuscar} onChange={this.props.onChangeInputBuscar}/>
            </label>
            <button onClick={this.props.limparFiltro}>Limpar filtros</button>
        </ContainerFiltros>
    )
  }
}

export default Filtro;
