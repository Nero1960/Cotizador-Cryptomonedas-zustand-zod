import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

const App = () => {

  //llamada a la función del store
  const fetchCryptos = useCryptoStore((store) => store.fetchCryptos );

  //En cuanto el componente este listo, se ejecuta la función
  useEffect(() => {
    fetchCryptos();
  }, []);


  return (
    <div className="container">
      <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>

      <div className="content">
        <CriptoSearchForm/>
        <CryptoPriceDisplay/>
      </div>

    </div>
  )
}

export default App