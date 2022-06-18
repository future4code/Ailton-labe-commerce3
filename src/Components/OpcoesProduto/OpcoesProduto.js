import React from "react";
import styled from "styled-components";
import iconefechar from "../../img/iconefechar.png";

const ContainerOpcoes = styled.div`
  background: rgba( 111, 122, 199, 0.35 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  position: fixed;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  height: 70vh;
  width: 60vw;
  right: 20%;
  display: flex;
  color: white;
`;

const Img = styled.img`
  display: flex;
  width: 350px;

const ImgMenor = styled.img`
  width: 70px;
  &:hover {
    cursor: pointer;
  }
`

const IconeFechar = styled.img`
  width: 25px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Informacao = styled.div `
  display: flex;
  flex-direction: column;
`

const ContainerNome = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContainerImagemMenor = styled.div`
  display: flex;
  justify-content: start;
  margin: 5px 5px 5px 40px;
  gap: 10px;
`

class OpcoesProduto extends React.Component {

  render() {

    const arrImagensExtras = this.props.arrCarrinhoOpcao
    .filter((produto) => {
      return this.props.opcoesCarrinho;
    })
    .map((produto, index) => {
      return (
        <ContainerImagemMenor>
          <ImgMenor src={produto.imagensExtra[0]} onClick={() => this.props.trocarImagem(produto, index)}/>
          <ImgMenor src={produto.imagensExtra[1]} onClick={() => this.props.trocarImagem(produto, index+1)}/>
          {produto.imagensExtra[2] && <ImgMenor src={produto.imagensExtra[2]} onClick={() => this.props.trocarImagem(produto, index+2)}/>}
        </ContainerImagemMenor>
      )
    })

    const arrayOpcoesProdutos = this.props.arrCarrinhoOpcao
      .filter((produto) => {
        return this.props.opcoesCarrinho;
      })
      .map((produto, index) => {
        return (
          <ContainerOpcoes key={index}>
            <Container>
              <Img src={produto.imagem} />
              {arrImagensExtras}
            </Container>
            <Informacao>
              <div>
                <IconeFechar src={iconefechar} onClick={() => this.props.fecharTelaProduto(produto)}/>
              </div>
              <ContainerNome>
                <p>{produto.nome}</p>

                <IconeFechar
                  src={iconefechar}
                  onClick={() => this.props.fecharTelaProduto(produto)}
                />

              </ContainerNome>
              <p>R$:{produto.preco}</p>
              <button onClick={() => this.props.adicionarItemCarrinho(produto)}>
                Adicionar ao carrinho
              </button>
            </Informacao>
          </ContainerOpcoes>
        );
      });

    return <div>
      {arrayOpcoesProdutos}
      </div>;
  }
}

export default OpcoesProduto;
