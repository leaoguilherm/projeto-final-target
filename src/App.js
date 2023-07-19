import React from 'react'
import { PrimeReactProvider } from 'primereact/api'
import { Button } from 'primereact/button'
 
const App = () => {
  return (
    <PrimeReactProvider>

      <h1>Bem Vindo</h1>
      <Button label='Botão 1' icon='pi pi-user' ></Button>

    </PrimeReactProvider>

  )
}

export default App
