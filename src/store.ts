import {create} from 'zustand';
import {devtools} from 'zustand/middleware'
import {getCryptos, fetchCurrentCryptoPrice} from './services/CryptoServices'
import { CryptoCurrency, CryptoPrice, Pair } from './types';

//tipar el store
type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[], //state
    result: CryptoPrice,
    loading: boolean,
    fetchCryptos: () => Promise<void>, //función que modifica el state
    fetchData: (pair : Pair) => Promise<void>
}

//crear el store
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    //state
    cryptoCurrencies: [],
    result: {} as CryptoPrice,
    loading: false,

    //funciones
    fetchCryptos : async () => {
        const cryptoCurrencies = await getCryptos(); //almacenar los resultados de la consulta en una variable
        //Modificar el state
        set(() => ({
            cryptoCurrencies: cryptoCurrencies
        }))
    },

    fetchData: async (pair) => {

        set(() => ({
            result: {} as CryptoPrice,
            loading: true
        }))
        
        const result = await fetchCurrentCryptoPrice(pair);
        
        set(() => ({
            result: result,
            loading: false
        }))

        
    }
})))