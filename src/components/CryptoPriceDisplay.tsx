import { useCryptoStore } from "../store"
import Spinner from "./Spinner";

const CryptoPriceDisplay = () => {
    const result = useCryptoStore(store => store.result);
    const loading = useCryptoStore(store => store.loading);


    return (
        <div className="result-wrapper">

            {loading && <Spinner/>}

            {result.PRICE && (
                <>

                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen CryptoMoneda" />
                        <div>
                            <p>EL precio es de : <span>{result.PRICE}</span></p>
                            <p>Precio Mas Alto: <span>{result.HIGHDAY}</span></p>
                            <p>Precio Mas Bajo : <span>{result.LOWDAY}</span></p>
                            <p>Ultima Actualización: <span>{result.LASTUPDATE}</span></p>
                            <p>Ultimas 24 Horas : <span>{result.CHANGE24HOUR}</span></p>
                        </div>

                    </div>

                </>
            )}

        </div>
    )
}

export default CryptoPriceDisplay