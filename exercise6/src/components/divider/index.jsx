import './style.css';
function Divider({light=true}){
    const themeClassName=light? 'divider--light':'';
    const classNamne=['divider',themeClassName].filter(Boolean).join('');
    return <span className={classNamne}/>
}

export default Divider;