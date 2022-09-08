import {Link} from "react-router-dom"

function Main(){
    return (
        <div>
            <h1>메인화면</h1>
            <nav>
             {/*<a href="/">HOME</a>
                <a href="/about">소개</a>
                <a href="/menu">메뉴</a> */}
                <Link to='/'>HOME</Link>
                <Link to='/about'>소개</Link>
                <Link to='/menu'>메뉴</Link>
            </nav>
        </div>
    )
}

export default Main;