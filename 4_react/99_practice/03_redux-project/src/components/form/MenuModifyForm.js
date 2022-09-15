import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callModifyMenuAPI } from '../../apis/MenuAPICalls';
import MenuModifyFormCSS from './MenuModifyForm.module.css'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

function MenuModifyForm() {
    const MySwal = withReactContent(Swal);

    // {id} : /menu/modify/:id 에서 동적 매개변수의 키/값 쌍의 개체를 반환받아 구조분해할당
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.menuReducer);
    const menu = result.menu;

    /* 입력 값 state 저장 */
    const [modifyMenu, setModifyMenu] = useState(
        {
            id: id,
            menuName: '',
            menuPrice: 0,
            categoryName: '한식',
            isOrderable: false,
            detail : {
                description: '',
                image: ''
            }
        }
    );

    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        /* json-server에 저장될 데이터 타입 맞추기 위한 코드 */
        switch(name) {
            case 'menuPrice' : 
                value = parseInt(value); 
                break;
            case 'isOrderable' : 
                console.log(value)
                break;
            case 'description' : 
                name = 'detail';
                value = {
                    description : value,
                    image : modifyMenu.detail.image
                };
                break;
            default: 
            break;
        }

        setModifyMenu(
            {
                ...modifyMenu,
                id : id,
                [name] : value
            }
        );

    }

    /* 파일 첨부 시 동작하는 이벤트 핸들러 */
    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setModifyMenu(
            {
                ...modifyMenu,
                detail : {
                    description : modifyMenu.detail.description,
                    image : base64
                }
            }
        );
    }

     /* FileReader API를 통해 input type="file"에 첨부 된 파일을 base64 인코딩 형식으로 변환 */
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
    }

    useEffect(
        () => {
            /* 메뉴 수정 완료 확인 후 /menu로 이동 */
            if(result.modify) {
                // alert('메뉴 수정');
                MySwal.fire({
                    icon: 'success',
                    title: '메뉴 수정 완료'
                })
                navigate(`/menu`);
            }

            // console.log(JSON.stringify(result))
            //메뉴 수정 완료 확인 후 결과가 빈 객체(데이터 없음) 이면 다시 해당 메뉴로 이동
            if(JSON.stringify(result) === '{}'    ) {
                // console.log(result)
                navigate(`/menu/${id}`)
            }
        },// eslint-disable-next-line
        [result]
      );

      useEffect(
        () => {
        
            // console.log(`json : `+JSON.stringify(result))
            if(JSON.stringify(result) === '{}'    ) {
                console.log(result)
        
                 navigate(`/menu/${id}`)
            }else{
                setModifyMenu(
                    {
                        ...modifyMenu,
                        id: id,
                        menuName: menu.menuName,
                        menuPrice: menu.menuPrice,
                        categoryName:  menu.categoryName,
                        isOrderable: menu.isOrderable,
                        detail : {
                            description:  menu.detail.description,
                            image: menu.detail.image
                        }
                    }
                );
               
            }
        },// eslint-disable-next-line
        []
      );


    const onClickHandler = () => {
        /* modifyMenu에 대한 유효성 검사 후 호출 */
        dispatch(callModifyMenuAPI(modifyMenu));
    }

    return(
        <>  
            <div className={MenuModifyFormCSS.menuCom}>
                <h2>{ id }번 메뉴 수정</h2>
                <label>메뉴이름 : </label>
                <input type="text" name="menuName" value={ modifyMenu.menuName } onChange={ onChangeHandler }/>
                <br/>
                <label>메뉴가격 : </label>
                <input type="number" name="menuPrice" value={ modifyMenu.menuPrice } onChange={ onChangeHandler }/>
                <br/>
                <label>카테고리 : </label>
                <select name="categoryName" value={ modifyMenu.categoryName } onChange={ onChangeHandler }>
                    <option>한식</option>
                    <option>일식</option>
                    <option>서양</option>
                    <option>동양</option>
                    <option>커피</option>
                    <option>쥬스</option>
                    <option>기타</option>
                </select>
                <br/>
                <label>판매여부 : </label>
                <select name="isOrderable" value={ modifyMenu.isOrderable } onChange={ onChangeHandler }>
                    <option value="true" >판매 가능</option>
                    <option value="false" >판매 불가</option>
                </select>
                <br/>
                <div className={MenuModifyFormCSS.divDes}>
                    <label>설명 : </label>&nbsp; 
                    <br/> 
                    <textarea name="description" value={ modifyMenu.detail.description } onChange={ onChangeHandler }></textarea>
                </div>
                <br/>
                <label>사진 : </label>
                <input type="file" name="image" accept='image/*' onChange={ fileChangeHandler }/>
                <br/>
                <img src={ modifyMenu.detail.image } style={ { maxWidth: 500 } } alt={ modifyMenu.menuName }/>
            </div>
            <button className ="button" onClick={ onClickHandler }>메뉴 수정</button>
        </>
    )
}

export default MenuModifyForm;