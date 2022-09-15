import { Link } from  'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Error component 호출 후 10초 타이머 실행하여 자동으로 메인으로 이동
function Count() {
    const [count, setCount] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        if(count > 0){
            setTimeout(() => {
                setCount(count - 1);
            }, 1000);
        }else{
            navigate('/');
        }
    }, [count, navigate]);

    return (
        <>
            <h3><strong>{count}</strong> 초 후 메인으로 돌아갑니다.</h3>
        </>
    )
}

function Error() {

    return (
        <div style={{width: '100vw', height: '100vh', display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>404 Error</h1>
            <Count/>
            <Link to={ '/' }>
                <span>메인으로</span>
            </Link>
        </div>
    );
}

export default Error;