import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contato from '../../components/Contato'
import { Container } from './styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <h1>Contatos</h1>
      <ul>
        {itens.map((c) => (
          <li key={c.titulo}>
            <Contato
              id={c.id}
              titulo={c.titulo}
              email={c.email}
              numero={c.numero}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
