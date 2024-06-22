import axios from 'axios';
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from '../schema/crypto-schema';
import { Pair } from '../types';

//tener funciones por separados
export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'; //url api

    const { data: { Data } } = await axios(url); //consulta a la api con axios
    const result = CryptoCurrenciesResponseSchema.safeParse(Data); //verificar con zod

    if (result.success) {
        return result.data; //retornar los resultados
    }

}


export async function fetchCurrentCryptoPrice(pair: Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;

    const { data: { DISPLAY } } = await axios(url);

    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cryptocurrency][pair.currency]);


    if (result.success) {
        return result.data;
    }

}