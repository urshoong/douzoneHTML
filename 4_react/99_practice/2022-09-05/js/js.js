const root = document.getElementById('root');

const {useState} = React;
// const [todo, setTodo] = useState('');


function TODOList(){

    const state = {
        id: 0,
        todo: '',
        isDone: false
    }

    const [list, setList] = useState([]);

    const max = list.reduce((pre, cur) => pre = cur.id, 0);
    
    const getDoneCount = (l) => l.reduce((pre, cur) => {
        if(cur.isDone)  return pre + 1;
        else            return pre;
    }, 0);

    const getListCount = (l) => l.length;

    let listCount = getListCount(list);

    let isDoneCount = getDoneCount(list);


    const onClickAddList = e => {
        const input = document.getElementById('input');
        if(input.value === ''){
            alert('할일을 입력해주세요.');
            input.focus();
        }else{
            const changeList = list.concat({
                ...state,
                id: max + 1,
                todo: input.value
            })

            setList(changeList);
            input.value = '';
            changeBar(getDoneCount(changeList), getListCount(changeList));
            input.focus();
        }
    }

    const changeBar = (d, t) => {
        document.getElementsByClassName('bar')[0].style.width = (d == 0 ? 0 : 100 * (d/t))+'%';
    }

    const onChangeCheckbox = e => {
        const changeList = list.map(cur => {
            if(cur.id == e.target.getAttribute('name')){
                return {
                    ...cur,
                    isDone: e.target.checked
                };
            }else{
                return cur;
            }
        });

        setList(changeList);
        changeBar(getDoneCount(changeList), listCount);
    }

    const onClickDelete = e => {
        const changeList = list.filter(cur => cur.id != e.target.id);
        setList(changeList);
        changeBar(getDoneCount(changeList), getListCount(changeList));
    }

    const onClickRemoveChecked = () => {
        const changeList = list.filter(cur => !cur.isDone);
        setList(changeList);
        changeBar(getDoneCount(changeList), getListCount(changeList));
    }

    const todoList = list.map(todo => {
        return (
            <tr key={todo.id}>
                <td><input type='checkbox' className='checkbox' name={todo.id} onChange={onChangeCheckbox}/></td>
                <td style={{textDecoration: todo.isDone ? 'line-through' : ''}}>{todo.todo}</td>
                <td><i className="fa-solid fa-trash delete" onClick={onClickDelete} id={todo.id}></i></td>
            </tr>
        )
    });

    return(
        <>
            <div className='wrap'>
                <div className='content'>
                    <div className='titleArea'>
                        <span className='title'>TODOLIST</span>
                    </div>
                    <div className='addListArea'>
                        <input type="text" name="input" id="input" className='input' placeholder='할일을 작성해주세요'/>
                        <span className='addList' onClick={onClickAddList}>+</span>
                    </div>
                    <div className='listArea'>
                        <table>
                            <colgroup>
                                <col width='8%'/>
                                <col width='84%'/>
                                <col width='8%'/>
                            </colgroup>
                            <tbody>{todoList}</tbody>
                        </table>
                    </div>
                    <div className='summaryArea'>
                        <div className='summaryBar'>
                            <div className='bar'></div>
                            <span>{isDoneCount} of {listCount} todos done</span>
                        </div>
                        <button className='removeChecked' onClick={onClickRemoveChecked}>Remove checked<span>Ｘ</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}
        


const element = (
    <>
        <TODOList/>
    </>
);

ReactDOM.render(element, root);