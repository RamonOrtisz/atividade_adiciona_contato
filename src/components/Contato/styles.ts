import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: rwap;
  background-color: #ccc;
  padding: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 20px;
  word-wrap: break-word;
`

export const Titulo = styled.textarea`
  padding-top: 15px;
  height: 100%;
  width: 100%;
  font-size: 16px;
  resize: none;
  text-align: center;
  line-height: inherit;
`

export const Email = styled.textarea`
  padding-top: 15px;
  height: 100%;
  width: 100%;
  font-size: 16px;
  resize: none;
  text-align: center;
  line-height: inherit;
`

export const Numero = styled.textarea`
  padding-top: 15px;
  height: 100%;
  width: 100%;
  font-size: 16px;
  resize: none;
  text-align: center;
  line-height: inherit;
`

export const Botao = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #363636;
  color: #fff;
  height: 42px;
`
export const BotaoAdicionar = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #363636;
  color: #fff;
  margin-bottom: 6px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verder};
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelhor};
`

export const BotaoExcluir = styled(Botao)`
  background-color: ${variaveis.excluir};
`
