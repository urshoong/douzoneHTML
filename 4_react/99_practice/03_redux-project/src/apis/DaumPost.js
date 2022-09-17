/**
 * [Title] Daum 우편번호 검색
 * [Description] 리액트 컴포넌트로 만든 Daum 우편번호 검색 서비스
 * [Usage]
 * @props onComplete {Function} : 우편번호 검색 시 선택한 정보 받아올 콜백함수
 * @props onSearch {Function} : 주소를 검색할 경우 실행되는 콜백함수
 * @props onClose {Function} : 검색 결과선택 후 우편번호 검색이 닫힐때 실행되는 콜백함수
 * @props onResize {Function} : 검색결과로 우편번호 화면 크기가 변경될때 실행되는 콜백함수
 * @props className {String} : 우편번호 검색창을 감싸는 최상위 엘리먼트 ClassName
 * @props style : 우편번호 검색창 최상위 엘리먼트 스타일
 *  @default {width:100%,height:400px}
 * @props scriptUrl {String} : Daum 우편번호 스크립트 주소
 *  @default "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
 * @props defaultQuery {String} : 우편번호 검색창에 기본으로 입력할 검색어
 *  @default undefined
 * @props autoClose {Boolean} : 우편번호 검색 완료시, 자동닫힘 여부
 *  @default true
 * @props errorMessage {React element} : 로드되지 않을때 보이는 에러 메시지
 *  @default "<p>현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.</p>"
 */

import React, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';

// import { Button, Modal } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';

import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export function DaumPost(props){
    //다음 우편 번호 검색 API Modal 호출을 위한 선언
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    //다음 우편 번호 검색 API Modal 호출을 위한 상태값 설정
    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false); 
    const handleCancel = () => setIsModalOpen(false); 

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        //fullAddress -> 전체 주소반환
        // console.log(data)
        // console.log(fullAddress)
        // console.log(data.zonecode)

        //부모창(Main.js)에서 전달받은 setData로 data state 설정
        props.setData({data: data, fullAddress: fullAddress});
        handleCancel();
    }

    return (
        <>
            {/* 버튼 위치를 지도의 우측 상단에 고정하기 위하여 position 속성값을 통하여 설정 */}
            <div style={{width: '90%', margin: '0 auto', position: 'relative'}}>
                {/* 지도보다 화면 앞에 출력하기 위해 z-index 값을 높게 설정 */}
                <Button variant="primary" onClick={showModal} style={{position: 'absolute', zIndex: '99999', right: 0, top: 0}}>위치 검색</Button>
            </div>

            {/* react-bootstrap 의 기능 중 modal component를 사용하여 다음 우편 번호 검색창을 팝업으로 호출 */}
            <Modal show={isModalOpen} onHide={handleCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>다음 우편 주소 검색</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DaumPostCode onComplete={handleComplete} className="post-code"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>닫기</Button>
                    <Button variant="primary" onClick={handleOk}>선택</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


/**
 * "학동로 31길 12" 입력 시
onComplete {Function}
@return
{
  "q": "학동로 31길 12",
  "count": 1
}

handleSearch {Function}
@return
{
  "postcode": "",
  "postcode1": "",
  "postcode2": "",
  "postcodeSeq": "",
  "zonecode": "06052",
  "address": "서울 강남구 학동로31길 12",
  "addressEnglish": "12, Hakdong-ro 31-gil, Gangnam-gu, Seoul, Korea",
  "addressType": "R",
  "bcode": "1168010800",
  "bname": "논현동",
  "bnameEnglish": "Nonhyeon-dong",
  "bname1": "",
  "bname1English": "",
  "bname2": "논현동",
  "bname2English": "Nonhyeon-dong",
  "sido": "서울",
  "sidoEnglish": "Seoul",
  "sigungu": "강남구",
  "sigunguEnglish": "Gangnam-gu",
  "sigunguCode": "11680",
  "userLanguageType": "K",
  "query": "학동로 31길 12",
  "buildingName": "벤쳐캐슬빌딩",
  "buildingCode": "1168010800100820018000001",
  "apartment": "N",
  "jibunAddress": "",
  "jibunAddressEnglish": "",
  "roadAddress": "서울 강남구 학동로31길 12",
  "roadAddressEnglish": "12, Hakdong-ro 31-gil, Gangnam-gu, Seoul, Korea",
  "autoRoadAddress": "",
  "autoRoadAddressEnglish": "",
  "autoJibunAddress": "서울 강남구 논현동 82-17",
  "autoJibunAddressEnglish": "82-17, Nonhyeon-dong, Gangnam-gu, Seoul, Korea",
  "userSelectedType": "R",
  "noSelected": "N",
  "hname": "",
  "roadnameCode": "4166791",
  "roadname": "학동로31길",
  "roadnameEnglish": "Hakdong-ro 31-gil"
}
 */