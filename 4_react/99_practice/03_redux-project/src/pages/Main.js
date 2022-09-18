import { useEffect, useState, useCallback } from 'react';
import KakaoMapScript from '../apis/kakaoMapScript';
import useCurrentLocation from "../components/hooks/useCurrentLocation";
import { geolocationOptions } from '../components/constants/geolocationOptions';

import { DaumPost } from '../apis/DaumPost';
import { getWeather } from '../apis/Api';
// import Location from '../components/Location';
import { getWeatherDescKo } from './../apis/getWeatherDescKo';

function Main(){
    // let weatherDescKo = getWeatherDescKo(200);
    // console.log(weatherDescKo[200]);
    const [position, setPosition] = useState({latitude: 0, longitude: 0});
    // const [cityname, setCityname] = useState('');
    // const [weather, setWeather] = useState({});
    // const [wind, setWind] = useState({});
    const { location: currentLocation = {longitude: 0, latitude: 0}, error: currentError } = useCurrentLocation(geolocationOptions);
    const { kakao } = window;
    const [data, setData] = useState({});
    const [map, setMap] = useState();
    const [marker, setMarker] = useState();
    const [weather, setWeather] = useState();
    const [infoWindow, setInfoWindow] = useState();
    
    useEffect(() => {
        console.log('===change Weather===');
        console.log('weather :: ', weather);
        
        if(!!weather && weather.sys.country){
            /**
             * 도시,국가 : name, sys.country
             * 날씨아이콘 : weather[0].icon
             * 날씨종류 : weather[0].description
             * 날씨코드 : weather[0].id
             * 풍속 : wind.speed
             * 습도 : main.humidity
             * 구름% : clouds.all
             * 기온 : main.temp - 273.15
             */

            const tko = getWeatherDescKo(weather.weather[0].id);
            console.log(tko);

            const iwContent = 
            `<div style=width: 330px; height: auto;>
                <div style="width: 330px; height: 100px; display: flex; border-bottom: 1px dashed gray;">
                    <img src='http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png'/>
                    <div style="width: 230px; height: 100px; padding-right: 20px; text-align: right;">
                        <h4>${Math.trunc((parseInt(weather.main.temp) - 273.15)*10)/10} ℃</h4>
                        <h6>${tko[weather.weather[0].id]}</h6>
                        <span>${weather.name}, ${weather.sys.country ?? 'unknown'}</span>
                    </div>
                </div>
                <div style="width: 330px; height: 50px; display: flex;">
                    <div style="width: 33%; height: 100%; text-align: center; display: inline-block;">
                        <span>풍속</span><br/>
                        <span>${weather.wind.speed} ㎧</span>
                    </div>
                    <div style="width: 33%; height: 100%; text-align: center; display: inline-block;">
                        <span>습도</span><br/>
                        <span>${weather.main.humidity} ％</span>
                    </div>
                    <div style="width: 33%; height: 100%; text-align: center; display: inline-block;">
                        <span>구름</span><br/>
                        <span>${weather.clouds.all} ％</span>
                    </div>
                </div>
            </div>`
            // `<div>
            //     <h3>기상 정보</h3>
            //     <h4>위도 :  ${ position.longitude } 경도 : ${ position.latitude }</h4>
            //     <h4>조회 도시 : ${ weather.name }</h4>
            //     <h4>날씨 : ${ weather.weather[0].main } 날씨설명 : ${ weather.weather[0].description }</h4>
            //     <h4>풍향 : ${ weather.wind.deg } 풍속 : ${ weather.wind.speed }m/s</h4>
            // </div>`
            ;
    
            //마커에 해당 좌표의 상세한 정보 전달을 위하여 infowindow 를 사용
            const infoWindow = new kakao.maps.InfoWindow({
                position: new kakao.maps.LatLng(position.latitude, position.longitude),
                content: iwContent
            });
            
            setInfoWindow(infoWindow);
            infoWindow.open(map, marker);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weather]);

    //position state 가 변경되면 kakao map api 에 position의 위도/경도 값을 전달하여 kakao map api 호출
    //좌표로 지정된 위치를 표기하기 위하여 marker 설정
    useEffect(() => {
        console.log('===change currentLocation===');
        const map = KakaoMapScript(position, setMap);
        const markerPosition = new kakao.maps.LatLng(position.latitude, position.longitude);
        const marker = new kakao.maps.Marker({
            // map: map,
            position: markerPosition,
        });
        setMarker(marker);
        marker.setMap(map);//marker에 map값을 넣어주지 않으면 마커에 setMap으로 세팅
        // setMap(map);//marker에 map값을 넣어주면 그냥 맵에 바로 세팅

        getWeather(position, setWeather);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position]);
    
    //currentLocation state가 변경되면 position state 갱신
    useEffect(() => {
        setPosition(currentLocation);
    }, [currentLocation]);

    //다음 우편 번호 검색에서 data state 값을 설정하면 
    //설정된 주소를 기반으로 kakao map api를 통하여 위도/경도 값 검색
    useEffect(() => {
        console.log('===change data===');
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(data.data?.address, (result, status) => {
            if(status === kakao.maps.services.Status.OK){
                setPosition({
                    longitude: result[0].road_address.x,
                    latitude: result[0].road_address.y
                });
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    
    return (
        <div>
            <h1>메인화면</h1>
            <div style={{position: 'relative'}}>
                <DaumPost setData={setData} forceRender={true}/>
                <div id='myMap' style={{position: 'relative', width: '90%', height: 'calc(100vh * 0.7)', minHeight: 'calc(100vh * 0.5)', margin: '0 auto' }}></div>
                {/* <KakaoMapScript position={currentLocation}/> */}
            </div>
        </div>
    )
}

export default Main;