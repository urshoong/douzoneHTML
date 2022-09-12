import descs from '../data/weatherDescKo.json'

export function getWeatherDescKo(code){
    return descs.find(cur => cur[code]);
}