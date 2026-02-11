import { useState,useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Card from '../components/Card'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import 'tachyons'
import axios from 'axios';


function App() {
const [search, setSearch] = useState("");
const [robots,setRobots]=useState([]);
const [loading, setLoading]=useState(true);
const [error,setError]=useState();

/*const [robots]=useState([{id:1,name:"rifat",email:"rfn@gmailcom",username:"rfn"},
  {id:2,name:"rif",email:"rf@gmailcom",username:"rf"},
  {id:3,name:"ri",email:"r@gmailcom",username:"r"},
  {id:4,name:"ri",email:"r@gmailcom",username:"r"},{id:5,name:"ri",email:"r@gmailcom",username:"r"}
]);*/
useEffect(()=>{
  const fetchrobot=async ()=>{
    try{
      setLoading(true);
      const robotinfo=await axios.get("https://jsonplaceholder.typicode.com/users");
      setRobots(robotinfo.data);
  
     
    }
    catch(error){
     setError("wrong");
     setLoading(false);
     alert("failed");
    }
  };
  fetchrobot();
},[]);

const onsearch=(e)=>{
  setSearch(e.target.value);
}

const filterserach=robots.filter(robot=>{
  return (robot.name.toLowerCase().includes(search.toLowerCase()));

});

  return (
  <div className="tc flex flex-wrap bg-blue min-vh-100  ">
    <div className="flex flex-column felx-wrap items-center mw8 center pa3 mb2">
    <h3 className="f2 dark-blue ">Robot Friends</h3>
    <div className="mb4 f5">
       <SearchBox search={onsearch} />
    </div>
    </div>
    <div className="flex flex-wrap justify-center items-center bg-white pa2 mx2 min-vh-100 w-100">
      <div className="mw9 center"> 
        <CardList robots={filterserach}/>
      </div>
   </div>
   </div>
   
  )
}

export default App;
