import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Card from '../components/Card'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import 'tachyons'

function App() {
const [search, setSearch] = useState("");
const [robots]=useState([{id:1,name:"rifat",email:"rfn@gmailcom",username:"rfn"},
  {id:2,name:"rif",email:"rf@gmailcom",username:"rf"},
  {id:3,name:"ri",email:"r@gmailcom",username:"r"},
  {id:4,name:"ri",email:"r@gmailcom",username:"r"},{id:5,name:"ri",email:"r@gmailcom",username:"r"}
]);

const onsearch=(e)=>{
  setSearch(e.target.value);
}

const filterserach=robots.filter(robot=>{
  return (robot.name.toLowerCase().includes(search.toLowerCase()));

});

  return (
  <div className="  tc flex flex-wrap bg-blue min-vh-100  ">
    <h3 className="f2 black">Robot Friends</h3>
    <div>
       <SearchBox search={onsearch} />
    </div>
    <div className=" bg-white p-10 mx-2 align-center justify-center min-vh-100 w-screen">
     <div>
       <CardList robots={filterserach}/>
     </div>
   </div>
   </div>
   
  )
}

export default App;
