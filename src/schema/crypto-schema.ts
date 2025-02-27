import { z } from 'zod'

export const currencySchema = z.object({
    code: z.string(),
    name: z.string()
});

export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({
        Name: z.string(),
        FullName: z.string()
    })
});

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema);

export const PairSchema = z.object({
    currency: z.string(),
    cryptocurrency: z.string()
})

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    CHANGE24HOUR: z.string(),
    LOWDAY: z.string(),
    LASTUPDATE: z.string()
})