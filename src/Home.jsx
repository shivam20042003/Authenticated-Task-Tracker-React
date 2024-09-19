import { useState,useEffect } from 'react'
import './Home.css'
import Item from './item'
import { useNavigate,useLocation } from "react-router-dom";


function Home () {
  const navigate = useNavigate();
  const location = useLocation();
  const [log,setLog] = useState(true);
  const [list, setList] = useState([]);
  const [task,setTask] = useState('');
  const [data,setData] = useState({key:"",pass:"",userD:{name:"",email:""},todoData:[]});
  useEffect(() => {
    if (location.state.key==null) {
      navigate('/');
    }
    setData(JSON.parse(localStorage.getItem(location.state.key))); 
    var newlist = data.todoData;
    setList(newlist);
  },[log]);
  function deleteTask(idIn){
    let newlist = [...list];
    newlist.splice(idIn,1);
    setList([...newlist]);   
    saveData(); 
  }
  function logout(){
    navigate('/');
  }
  function deleteAcc(){
    localStorage.removeItem(location.state.key);
    navigate('/');
  }
  function saveData(){
    data.todoData = list;
    setData(data);
    localStorage.removeItem(data.key);
    localStorage.setItem(data.key,JSON.stringify(data));
  }

  return (
    <>
      <nav>
          <p className="user">{data.userD.name}<button className="log" onClick={logout}>logout</button></p>
          <div className="logo">
            <p> {data.userD.email} <br/><a onClick={deleteAcc}>Delete Account</a></p>
            <img src='/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg' alt=""  />
          </div>
      </nav>
      <div className="content">
          <div className="sub-content">
             
                  <input type="text" name="addTask" value={task} placeholder="ADD TASK" onChange={(e)=>{
                    setTask(e.target.value);
                  }} />
                  <button type='button' id="but" onClick={()=>{ 
                    setList(oldArray => [...oldArray, task]);
                    setTask('');
                    saveData();
                  }}>ADD</button> 
            
                  
              <ul>
                  {list.map((x,i)=>{
                    return(
                      <Item key = {i} it = {x} index={i} deleteTask = {deleteTask} />
                    )
                  })}
              </ul>
          </div>
      </div>
    </>
  )
}

export default Home
