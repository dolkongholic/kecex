import React, { useEffect } from 'react';

declare global {
    interface Window {
        naver: any;
    }
}
const mapId = "wnpbmjdp4c";

const Map: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${mapId}&submodules=geocoder`;
        script.async = true;
        document.head.appendChild(script);


    // 35.5625379,129.279375
    script.onload = () => {
        const mapOptions = {
            center: new window.naver.maps.LatLng(35.5625379, 129.279375), // 울산테크노파크의 좌표
            zoom: 16
        };

        const map = new window.naver.maps.Map('map', mapOptions);

        const markerOptions = {
            position: new window.naver.maps.LatLng(35.5625379, 129.279375), // 변환된 좌표로 마커 생성
            map: map
        };

        const marker = new window.naver.maps.Marker(markerOptions);

    };

    return () => {
        document.head.removeChild(script);
    };
}, []);

    return <div id="map" style={{ width: '1150px', height: '550px'}}></div>;
};

export default Map;
