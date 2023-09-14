import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders = 
     {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'd26331854dmshe1f39a5a33b53a7p1e0143jsn1b33cf69cf57',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
const baseUrl  = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) =>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath :"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;