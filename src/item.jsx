function Item(props){
    return(
        <>
            <br />
            <div className='item' >{props.it} <button id="but-2" onClick={e=>{props.deleteTask(props.index)}}>X</button></div>
        </>
    )
}
export default Item;