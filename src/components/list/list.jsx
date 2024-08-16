import ChatList from "./chatList/chatList"
import Userinfo from "./userinfo/userinfo"
import "./list.css"

const list = () => {
    return (
        <div className='list'>
            <Userinfo/>
            <ChatList/>
        </div>
    )
}

export default list