import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  email: emailOriginal,
  titulo: tituloOriginal,
  numero: numeroOriginal,
  id
}: Props) => {
  const dispath = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  useEffect(() => {
    if (tituloOriginal.length > 0) {
      setTitulo(tituloOriginal)
    }
  }, [tituloOriginal]),
    useEffect(() => {
      if (emailOriginal.length > 0) {
        setEmail(emailOriginal)
      }
    }, [emailOriginal]),
    useEffect(() => {
      if (numeroOriginal.length > 0) {
        setNumero(numeroOriginal)
      }
    }, [numeroOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setTitulo(tituloOriginal)
    setEmail(emailOriginal)
    setNumero(numeroOriginal)
  }

  return (
    <S.Card>
      <S.Titulo
        disabled={!estaEditando}
        value={titulo}
        onChange={(evento) => setTitulo(evento.target.value)}
      />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.Numero
        disabled={!estaEditando}
        value={numero}
        onChange={(evento) => setNumero(evento.target.value)}
      />
      {estaEditando ? (
        <>
          <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          <S.BotaoSalvar
            onClick={() => {
              dispath(
                editar({
                  email,
                  titulo,
                  numero,
                  id
                })
              )
              setEstaEditando(false)
            }}
          >
            Salvar
          </S.BotaoSalvar>
        </>
      ) : (
        <>
          <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
          <S.BotaoExcluir onClick={() => dispath(remover(id))}>
            Excluir
          </S.BotaoExcluir>
        </>
      )}
    </S.Card>
  )
}
export default Contato
