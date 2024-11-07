import {useEffect,useState} from 'react'



const Home = () => {
    let [arr,setArr]=useState([])
    useEffect(()=>{
        getData()
    },[])
    
    const getData= async()=>{
        const res = await fetch("https://dummyjson.com/products")
        // console.log(res);
        const data = await res.json()
        // console.log(data.products);
        setArr(data.products)
    }
    console.log(arr);
    return(  <>
    <div className="nav">
       <span className='heading'>PRODUCTS</span>
        <input type="search"className='search' placeholder='Search by name' />
        </div>
        
        <div className="main">
            
        <div className="left">
          
        <div className="cards">
         {arr.map((product)=>{ 
           return (<div className="card">
           <div className="image">
             <img src={product.thumbnail} alt="" />
           </div>
           <span>{product.category.toUpperCase()}</span>
           <h3>{product.title}</h3>
           <p>${product.price}</p>
   
         </div>)
         })}
          
   
   
         </div>
        </div>
        <div className="right"></div>
        </div></>
       )
    
  }

export default Home