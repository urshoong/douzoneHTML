const { kakao } = window;

export default function KakaoMapScript({latitude, longitude}) {
    console.log(`latitude : ${latitude}`);
    console.log(`longitude : ${longitude}`);
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);
}