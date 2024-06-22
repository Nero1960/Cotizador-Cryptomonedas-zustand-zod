import { useCryptoStore } from '../store'
import { currencies } from '../data/index'
import { Pair } from '../types';
import { useState } from 'react';
import Error from './Error'

const CriptoSearchForm = () => {

    //Obtener el estado del store
    const cryptoCurrencies = useCryptoStore((store) => store.cryptoCurrencies);
    const fetchData = useCryptoStore((store) => store.fetchData);


    //Definir el state para la consulta
    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptocurrency: ''
    });

    const [error, setError] = useState<string>('');

    //Cambia el state
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {

        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })

    }

    //validar el formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(Object.values(pair).includes('')){
            setError('Todos los campos son Obligatorios');
            return;
        }

        //Pasa la validación, consultar la api
        setError(''); //reset el valor del error
        fetchData(pair);
        


    }

    return (
        <form className="form" onSubmit={handleSubmit}>

            {error && <Error>{error}</Error>}

            <div className="field">
                <label htmlFor="currency">Moneda</label>
                <select
                    name="currency"
                    id="currency"
                    onChange={handleChangeSelect}
                    value={pair.currency}>
                    <option value="">--Seleccione--</option>
                    {currencies.map(currency => (
                        <option
                            key={currency.code}
                            value={currency.code}
                        >
                            {currency.name}
                        </option>
                    ))}
                </select>

            </div>

            <div className="field">
                <label htmlFor="cryptocurrency">Criptomoneda</label>
                <select
                    name="cryptocurrency"
                    id="cryptocurrency"
                    onChange={handleChangeSelect}
                    value={pair.cryptocurrency}
                >
                    <option value="">--Seleccione--</option>
                    {cryptoCurrencies.map(crypto => (
                        <option
                            key={crypto.CoinInfo.Name}
                            value={crypto.CoinInfo.Name}
                        >
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </select>

            </div>

            <input type="submit" value={'Cotizar'} />
        </form>
    )
}

export default CriptoSearchForm