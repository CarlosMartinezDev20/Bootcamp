
import './App.css'
import Saludo from './components/Saludo.jsx'

function App() {


  return (
    <>{ /* este es el fragment-> no dibuja un contenedor en el html */}
      <h1>Holiwis</h1>
      { /* este es el primer componente */}
      <Saludo nombre='Carlos' apellido='Martinez' />
      <Saludo nombre='Daniela' apellido='Torres' />

    </>
  )
}

export default App

