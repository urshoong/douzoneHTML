const root = document.getElementById('root');

const {useState, useEffect} = React;
// const [todo, setTodo] = useState('');


function TODOList(){

    const state = {
        id: 0,
        todo: '',
        isDone: false
    }

    const [list, setList] = useState([]);
    const [clone, setClone] = useState();
    const [editor, setEditor] = useState();

    const max = list.reduce((pre, cur) => pre = cur.id, 0);
    
    const getDoneCount = (l) => l.reduce((pre, cur) => {
        if(cur.isDone)  return pre + 1;
        else            return pre;
    }, 0);

    const getListCount = (l) => l.length;

    let listCount = getListCount(list);

    let isDoneCount = getDoneCount(list);

    const onKeyPressEnter = e => {
        if(e.key === 'Enter'){
            const addBtn = document.getElementsByClassName('addList')[0];
            addBtn.click();
        }
    }

    const onClickAddList = () => {
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

    const onClickEdit = e => {
        const icon = e.target;
        const id = icon.id;
        const classList = icon.classList;
        const target = document.querySelectorAll('#span'+id)[0];
        // const clone = target.cloneNode('deep');
        // console.log(clone);
        if(!clone) setClone(target);

        console.log(editor);
        if(!editor){
            console.log('create editor');
            const createEditor = document.createElement('input');
            createEditor.classList = 'createEditor';
            createEditor.style.width = '100%';
            createEditor.style.outline = 'rgb(72, 156, 193)';
            createEditor.style.border = '1px solid rgb(72, 156, 193)';
            setEditor(createEditor);
            console.log(editor);
        }
        
        if([].includes.call(classList, 'fa-pen')){
            console.log('edit');
            classList.remove('fa-pen');
            classList.add('fa-floppy-disk');

            console.log(editor);
            const copy = editor.cloneNode();
            editor.value = target.innerText;
            target.replaceWith(editor);

        }else if([].includes.call(classList, 'fa-floppy-disk')){
            console.log('save');
            classList.remove('fa-floppy-disk');
            classList.add('fa-pen');

            console.log(editor);
            console.log(clone);
            const copy = clone.cloneNode();
            console.log(copy);
            editor.replaceWith(copy);
            setClone();
            // target.innerText = editor.value;
        }
        
    }

    const onClickRemoveChecked = () => {
        const changeList = list.filter(cur => !cur.isDone);
        setList(changeList);
        changeBar(getDoneCount(changeList), getListCount(changeList));
    }

    const todoList = list.map(todos => {
        const {id, todo, isDone} = todos;
        return (
            <tr key={id}>
                <td><input type='checkbox' className='checkbox' name={id} onChange={onChangeCheckbox}/></td>
                <td>{isDone && <i class="fa-solid fa-check">&nbsp;</i>}<span id={'span'+id} style={{textDecoration: isDone ? 'line-through' : ''}}>{todo}</span></td>
                <td><i className="fa-solid fa-pen edit" onClick={onClickEdit} id={id}></i></td>
                <td><i className="fa-solid fa-trash delete" onClick={onClickDelete} id={id}></i></td>
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
                        <input type="text" name="input" id="input" className='input' placeholder='할일을 작성해주세요' onKeyPress={onKeyPressEnter}/>
                        <span className='addList' onClick={onClickAddList}>+</span>
                    </div>
                    <div className='listArea'>
                        <table>
                            <colgroup>
                                <col width='8%'/>
                                <col width='76%'/>
                                <col width='8%'/>
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