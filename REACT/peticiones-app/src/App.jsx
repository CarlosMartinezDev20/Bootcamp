import {ListCharacters } from './views/listCharacters/ListCharacters'
import { FavoritesDataProvider } from './contexts/FavoritesContext'
import {BrowserRouter, Link, Route, Routes} from 'react-router'
import { SessionView } from './views/session/SessionView'
import { Navbar } from './components/Navbar'
import { SearchCharacter } from './views/searchCharacter/SearchCharacter'
// Asincronismo -> manejar código que tarda en completarse como solicitudes a un servidor o lecturas de archivos, sin bloquear el resto del programa.
// Promesa -> La esperanza de una posible respuesta a eso que va a tardar
function App() {

  return (
    <> 
    <FavoritesDataProvider>
      {/* Activamos React Router */ }
      <BrowserRouter>
      <Navbar />
      <main className='container'>
        <Routes>
          <Route path='/' element={<ListCharacters />}/>
          <Route path='/session' element={<SessionView />}/>
          <Route path='/search-character' element={<SearchCharacter />}/>
        </Routes>
      </main>
      </BrowserRouter>

    </FavoritesDataProvider>
    </>
  )
}

export default App
