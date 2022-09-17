const { kakao } = window;

export default function KakaoMapScript({latitude, longitude}, setMap) {
    console.log('call KakaoMapScript')
    // console.log(props);
    // const {latitude, longitude} = props.position;
    
    console.log(`latitude : ${latitude}`);
    console.log(`longitude : ${longitude}`);
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);
    setMap(map);
    return map;
}