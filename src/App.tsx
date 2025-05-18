import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [tovary, setTovary] = useState<{id:number; content:string} []>([])

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/api`)
      .then(res=>setTovary(res.data))
      .catch(err=>console.error(err))
  },[])
  return (
    <div >
      <h1>{tovary.map(tov=>(
        <li key={tov.id}>{tov.content}</li>
      ))}</h1>
    </div>
  );
}

export default App;
