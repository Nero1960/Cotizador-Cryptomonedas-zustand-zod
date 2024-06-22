import { currencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from '../schema/crypto-schema'
import { z } from 'zod'

export type Currency = z.infer<typeof currencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Pair = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;