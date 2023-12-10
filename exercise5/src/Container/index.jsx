import './style.css';
import Header from '../Header';
import Items from '../Items';
import Actions from '../Actions';
function Container(){
    return(
        <div className='container'>
            <Header/>
            <hr/>
            <Items/>
            <Actions/>
        </div>
    )
}
export default Container;