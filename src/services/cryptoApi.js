
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'a9342d0465mshab0a62d17242729p1ffe28jsn4a61954d28cd',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath :"cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({coinId,timePeriod}) =>  createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
        })
    })
});

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
} = cryptoApi