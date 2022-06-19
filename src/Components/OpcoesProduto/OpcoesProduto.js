import React from "react";
import styled from "styled-components";
import iconefechar from "../../img/iconefechar.png";

const ContainerOpcoes = styled.div`
  background: rgba(111, 122, 199, 0.35);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  height: 70vh;
  width: 60vw;
  right: 20%;
  display: flex;
  color: white;
`;
const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Img = styled.img`
  display: flex;
  width: 65%;
`;
const ImgMenor = styled.img`
  width: 70px;
  &:hover {
    cursor: pointer;
  }
`;
const ContainerImagemMenor = styled.div`
  display: flex;
  justify-content: start;
  width: 65%;
  margin-top: 8px;
  gap: 16px;
`;

const Fechar = styled.div`
  position: absolute;
  right: 0;
`;
const IconeFechar = styled.img`
  width: 25px;
  cursor: pointer;
`;

const Informacao = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  flex: 1;
`;
const BotaoAdicionar = styled.button`
  padding: 7px;
  background-color: blueviolet;
  color: #fff;
  width: 40%;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;


class OpcoesProduto extends React.Component {
  render() {
    const arrImagensExtras = this.props.arrCarrinhoOpcao
      .filter((produto) => {
        return this.props.opcoesCarrinho;
      })
      .map((produto, index) => {
        return (
          <ContainerImagemMenor>
            <ImgMenor
              src={produto.imagensExtra[0]}
              onClick={() => this.props.trocarImagem(produto, index)}
            />
            <ImgMenor
              src={produto.imagensExtra[1]}
              onClick={() => this.props.trocarImagem(produto, index + 1)}
            />
            {produto.imagensExtra[2] && (
              <ImgMenor
                src={produto.imagensExtra[2]}
                onClick={() => this.props.trocarImagem(produto, index + 2)}
              />
            )}
          </ContainerImagemMenor>
        );
      });

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
            <Fechar>
              <IconeFechar
                src={iconefechar}
                onClick={() => this.props.fecharTelaProduto(produto)}
              />
            </Fechar>
            <Informacao>
              <h3>{produto.nome}</h3>
              <h4>Tamanhos:</h4>
              <p>R$:{produto.preco}</p>
              <BotaoAdicionar onClick={() => this.props.adicionarItemCarrinho(produto)}>
                Adicionar ao carrinho
              </BotaoAdicionar>
            </Informacao>
          </ContainerOpcoes>
        );
      });

    return <div>{arrayOpcoesProdutos}</div>;
  }
}

export default OpcoesProduto;
