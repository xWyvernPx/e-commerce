import qs from 'query-string'

export const config =  {
    baseURL :"http://localhost:4001",
    headers :{
        "Content-Type" : "application/json" ,
    },
    paramsSerializer: params => qs.stringify({...params}),
}