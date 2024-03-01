import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  BotaoExcluir,
  BotaoSalvar,
  Card,
  Titulo
} from '../../components/Contato/styles'
import { Container } from '../ListaDeContatos/styles'
// import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    alert('chamou')
    evento.preventDefault()
    alert(JSON.stringify({ titulo, email, numero }))

    dispatch(
      cadastrar({
        titulo,
        email,
        numero
      })
    )
    navigate('/')
  }
  return (
    <Container>
      <h1>Adicionar Contato</h1>
      <Card>
        <Titulo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          placeholder="Nome do Contato"
        />
        <Titulo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="E-mail"
        />
        <Titulo
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
          placeholder="Número de telefone"
        />
        <BotaoSalvar onClick={(e) => cadastrarContato(e)} type="submit">
          Cadastrar
        </BotaoSalvar>
        <BotaoExcluir onClick={() => navigate('/')}>Voltar</BotaoExcluir>
      </Card>
    </Container>
  )
}

export default Formulario
