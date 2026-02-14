import { useState, useEffect } from 'react'
import '../App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import 'tachyons'
import axios from 'axios';
import classNames from 'classnames'
import { Bars } from 'react-loader-spinner'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';


Modal.setAppElement('#root');

function App() {
const [search, setSearch] = useState("");
const [robots,setRobots]=useState([]);
const [loading, setLoading]=useState(true);
const [error,setError]=useState();
const[activtab,setTab]=useState("All");
const [fav,setFav]=useState([]);


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
      setTimeout(()=>{
        setLoading(false);
      },3000);    
    }
    catch(error){
     setError("wrong");
     setLoading(false);
     alert("failed to fetch");
    }
  };
  fetchrobot();
},[]);

function Scroll(props){
  return(
    <div className="scroll">{props.children}</div>
  );
}


function Loadanime(){
  return(
    <div className="loading">render(<Bars
      height="100"
      width="100"
      color="#0831b7"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />)
      </div>
  );
}
const mainViewClass = classNames("bg-white pa3 min-vh-100 w-100", {
    "bg-light-gray": loading 
  });

const onsearch=(e)=>{
  setSearch(e.target.value);
}

const filterserach=robots.filter(robot=>{
  const matchesSearch = robot.name.toLowerCase().includes(search.toLowerCase());
  if(activtab==="Fav")
  {
    return matchesSearch && fav.includes(robot.id);
  }

  return matchesSearch;

});

const togglefav=(id,name)=>{
  const alredayfav=fav.includes(id);
  if(alredayfav)
  {
    const removelist=fav.filter((item)=>item!==id);
    setFav(removelist);
    toast.info("removed "+name);
  }

  else{
    setFav([...fav,id]);
    toast.success("Added to favorite "+name);
  }
}

 return (
    <div className="tc bg-blue min-vh-100 w-100">
      <div className="flex flex-column items-center center pa3">
        <h3 className="f2 dark-blue">Robot Friends</h3>
        
       
        <div className="flex justify-center mb3">
          <button 
            className={`pa2 mr2 br-pill pointer bn ${activtab === "All" ? "bg-dark-blue white" : "bg-light-gray"}`}
            onClick={() => {
               setTab("All"); 
               toast.info("Showing All"); 
              }
            }
          >
            All ({robots.length})
          </button>
          <button 
            className={`pa2 br-pill pointer bn ${activtab === "Fav" ? "bg-red white" : "bg-light-gray"}`}
            onClick={() => { 
              setTab("Fav"); 
              toast.info("Showing Favorites"); 
            }
          }
          >
            Favorites ({fav.length})
          </button>
        </div>

        <div className="mb4 f5">
          <SearchBox search={onsearch} />
        </div>

        <div className="justify-center bg-white pa2 mx2 w-100 shadow-5 br3" style={{ minHeight: '80vh' }}>
          <div className={mainViewClass}>
            {loading ?  <Loadanime />:(
              <Scroll>
                <CardList robots={filterserach} togglefav={togglefav} fav={fav} />
              </Scroll>
            )}
          </div>
        </div>
        <ToastContainer position="top-left" autoClose={1000} theme="colored" />
      </div>
    </div>
  ); 
}

export default App;
