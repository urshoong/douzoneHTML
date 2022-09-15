// import { getWeatherDescKo } from './../api/getWeatherDescKo';
import { useEffect, useState } from 'react';
import KakaoMapScript from '../api/kakaoMapScript';
// import { Button, Modal } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import DaumPostCode from 'react-daum-postcode';
import useCurrentLocation from "../hooks/useCurrentLocation";
import { geolocationOptions } from "../constants/geolocationOptions";

import { DaumPost } from '../api/DaumPost';
// import Location from '../components/Location';



function Main(){
    // let weatherDescKo = getWeatherDescKo(200);
    // console.log(weatherDescKo[200]);
    const [position, setPosition] = useState({latitude: 0, longitude: 0});
    // const [cityname, setCityname] = useState('');
    // const [weather, setWeather] = useState({});
    // const [wind, setWind] = useState({});
    const { location: currentLocation = {longitude: 0, latitude: 0}, error: currentError } = useCurrentLocation(geolocationOptions);
    const [data, setData] = useState({});
    const { kakao } = window;

    const [map, setMap] = useState();

    useEffect(() => {
        const map = KakaoMapScript(position)?.map;
        const markerPosition = new kakao.maps.LatLng(position.latitude, position.longitude);
        const marker = new kakao.maps.Marker({
            map: map,
            position: markerPosition,
        });
        // marker.setMap(map);//marker에 map값을 넣어주지 않으면 마커에 setMap으로 세팅
        setMap(map);//marker에 map값을 넣어주면 그냥 맵에 바로 세팅
    }, [position]);
    
    useEffect(() => {
        setPosition(currentLocation);
    }, [currentLocation]);

    useEffect(() => {
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
            <div style={{display: 'flex'}}>
                <div id='searchInfo' style={{width: '20%', height: 'calc(100vh * 0.7)', minHeight: 'calc(100vh * 0.5)' }}>
                    {/* <Location location={currentLocation} error={currentError} /> */}

                    {/* <Button icon={<SearchOutlined />} onClick={searchPosition}>위치 검색</Button> */}
                    <DaumPost setData={setData} forceRender={true}/>
                </div>
                <div id='myMap' style={{ width: '80%', height: 'calc(100vh * 0.7)', minHeight: 'calc(100vh * 0.5)' }}></div>
                {/* <KakaoMapScript position={currentLocation}/> */}
            </div>
        </div>
    )
}

export default Main;