import axios from 'axios';
// json-server 를 실행한 port 경로로 설정
const DOMAIN = 'http://localhost:4000';
const API_KEY = '604240d87e838aab6d32243353d6476e';
// CRUD에 따라서 CREATE : POST, READ : GET, UPDATE : PUT, DELETE : DELETE 로 method 설정하여 전달
// INSERT, UPDATE 시 메뉴 data 전달그 이외에는 :id (동적 라우팅)를 통하여 처리
// AXIOS API를 사용하여 json-staver와 통신;
export const request = async (method, url, data) => {
    return await axios({
        method,
        url : `${DOMAIN}${url}`,
        data
    })
      .then(res => res.data)
      .catch(error => console.log(error));
};

export const getWeather = async (position, setWeather) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Math.trunc(position.latitude * 10000000000) / 10000000000}&lon=${Math.trunc(position.longitude * 10000000000) / 10000000000}&appid=${API_KEY}`;
    console.log(url);
    return await axios({
        url : url
    })
    .then(res => setWeather(res.data))
    .catch(error => console.log(error));
}
