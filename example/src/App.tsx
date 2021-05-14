import React, { useEffect } from 'react'

import { useLocalStorage, useGraphqlApi } from 'just-hook'
import 'just-hook/dist/index.css'

const GQL = `query{allCanal {
  codCanal
  dataAtualizacao
  dataCriacao
  designacao
  estadoId
  idCanal
  naturezaMovimentoId
  subContaId
  tipoFacturamentoId
  ultModificacaoPorId
}}`

const App = () => {
  const [data, set, remove] = useLocalStorage('keys', 'antonioLopes')
  const { result, loading, error, execute } = useGraphqlApi()

  useEffect(() => {
    execute({ uri: 'http://172.16.16.57:89/graphql', gql: GQL })
  })

  console.log(result)
  console.log(data, set, remove)

  if (loading) return <h1>error</h1>

  if (error) return <h1>error</h1>

  return <h1>Antonio Lopes</h1>
}

export default App
