import MessageList from'./MessageList';
import Actions from "./Actions";
function ChatBox(){
    return(
        <div className="chatBox">
            <MessageList />
            <Actions />
        </div>
    );
}
export default ChatBox;