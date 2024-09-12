import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ tipo = 'principal', children }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
