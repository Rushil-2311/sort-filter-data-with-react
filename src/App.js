import React, { useEffect, useState } from 'react'
import data from './data.js'

function App() {
  const [datas, setdatas] = useState()
  const [filter,setFilter]=useState("firstName")
  const [condition,setCondition]=useState("equalto")
  const [value,setValue]=useState("")

  useEffect(() => {
      console.log("hey")
    setdatas(data)
  }, [])
 
  const fliterData = (fliterObject , condition) => {
      if(condition === 'equalto'){
          const result = [...data].filter((data)=>data[fliterObject]===value)
          setdatas(result)
      }
      if(condition === 'startwith'){
          const result=[...data].filter((data)=>data[fliterObject].startsWith(value))
          setdatas(result)
      }
      if(condition === 'endwith'){
          const result=[...data].filter((data)=>data[fliterObject].endsWith(value))
          setdatas(result)
      }
      if(condition === 'isempty'){
          const result=[...data].filter((data)=>data[fliterObject]===undefined||null)
          setdatas(result)
      }
      if(condition === 'isnotempty'){
          const result=[...data].filter((data)=>data[fliterObject].length > 0)
          setdatas(result)
      }
  }


  const onClickHandler = (e) =>{
      const type=['firstName','lastName']
      const sorted=[...datas].sort((a,b)=>{
          if(type.includes(e.target.innerText)){
             return a.firstName.localeCompare(b.firstName)
          }
          return b[e.target.innerText]-a[e.target.innerText]
      })
      setdatas(sorted)
  }
  return (
      <div>
      <h1 style={{backgroundColor:"darkblue" ,
      padding:"20px",
      color:"white",
      width:"90%",
      border:"none",
      borderRadius:"10px",
      marginTop:"20px",
      margin:"auto"
      }}>for soring click on the each colomn header like firstName if you click firstName then it shorted accoording to the firstName likewise</h1>
      <br />
      <h1 style={{backgroundColor:"darkblue" ,
      padding:"20px",
      color:"white",
      width:"40%",
      marginLeft:"42px",
      border:"none",
      borderRadius:"10px",
      marginTop:"20px",
      marginBottom:"30px"
      }}>for flitering data use filter method</h1>
      <div>
      <select onChange={e => setFilter(e.target.value)}>
      <option value="firstName">firstName</option>
      <option value="lastName">lastName</option>
      <option value="birthYear">birthYear</option>
      <option value="workingHours">workingHours</option>
    </select>
    <select onChange={e => setCondition(e.target.value)}>
      <option value="equalto">equalto</option>
      <option value="startwith">startwith</option>
      <option value="endwith">endwith</option>
      <option value="isempty">is empty</option>
      <option value="isnotempty">is not empty</option>
    </select>
    <input  type="text" value={value} placeholder="Enter filter value" onChange={(e)=>setValue(e.target.value)}/>
    <button style={{
        marginLeft:"5px",
        padding:"10px",
        width:"100px",
        border:"none",
        borderRadius:"5px",
        color:"white",
        backgroundColor:"darkblue"}}
        onClick={()=>{fliterData(filter,condition)}}
        >
            Filter
        </button>
      </div>
    
       <button style={{
        marginLeft:"45px",
        marginTop:"20px",
        padding:"10px",
        width:"100px",
        border:"none",
        borderRadius:"5px",
        color:"white",
        backgroundColor:"darkblue"}} onClick={()=>setdatas(data)}>reloadData</button>
       
          <table style={{margin:"30px",border:"5px solid black"}}>
              <thead>
                  <tr style={{margin:20}}>
                      <th style={{padding:10}}>id</th>
                      <th style={{padding:10}} onClick={(e)=>{onClickHandler(e)}}>firstName</th>
                      <th  style={{padding:10}}  onClick={(e)=>{onClickHandler(e)}}>lastName</th>
                      <th  style={{padding:10}}  onClick={(e)=>{onClickHandler(e)}}>birthYear</th>
                      <th  style={{padding:10}}  onClick={(e)=>{onClickHandler(e)}}>workingHours</th>
                  </tr>
              </thead>
              <tbody>
              {
                  datas ? datas.map((data)=>{
                   return(
                      <tr>
                      <td  style={{padding:10}}>{data.id}</td>
                      <td  style={{padding:10}}>{data.firstName}</td>
                      <td  style={{padding:10}}>{data.lastName}</td>
                      <td  style={{padding:10}}>{data.birthYear}</td>
                      <td  style={{padding:10}}>{data.workingHours}</td>
                  </tr>
                   );
               }) : ""
                  
              }
              </tbody>
          </table>
      </div>
  )
}

export default App;
