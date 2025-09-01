/* Vamos a declarar 2 cosas a la vez */

import { createContext, useState } from "react";

//Crear el contexto 
// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesContext = createContext();

// Proveedor de la informacion del contexto
// Wrapper -> Contiene otros componentes -> {children}
export const FavoritesDataProvider = ({children}) => {
    //Crear el estado de los favoritos
    const [favorites,setFavorites] = useState([]);

    return(
        <FavoritesContext.Provider value={{favorites,setFavorites}} >
            {children}
        </FavoritesContext.Provider>
    )
}