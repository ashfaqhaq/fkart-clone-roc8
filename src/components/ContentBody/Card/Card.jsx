import React,{useEffect,useState} from "react";
import _ from 'lodash'
import './Card.css'
function Card({products,sortBy,filter}) {
      
  console.log(filter)
    const [data, setData] = useState(products)
   useEffect(() => {

    let sortType;
    if(sortBy==="Popularity"){
        sortType = "popularityRank"
       }
    if(sortBy==="Newest First"){
         sortType = "year"
        }
    if(sortBy==="High to Low"|| sortBy==="Low to High"){
            sortType = "price"
     }

    var sortedObjs = _.sortBy( data, sortType );
    
    if(sortBy==="High to Low"){ 
      sortedObjs.reverse()
    }
       setData(sortedObjs)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [sortBy])

   useEffect(() => {
    console.log("filter effect rendering")
    async function filterElements(){
   
      let filteredList = products;
      
      if(filter.gender){
        filteredList =  await (products.filter((item=>item.gender===filter.gender)));
      }
      if(filter.size){
        filteredList = await  filteredList.filter((item=>item.size.includes(filter.size)))
      }
     
        setData(filteredList)
    }
    
   
  
    if(filter) filterElements()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [filter])





   



  return (
    <div>
      <div className="card-body flex">
         {console.log(data)}
        {data?.map((product) => (
          <div className="card mg-5 box-shadow">
            <div className="card-img">
              <img
                src={product.img}
                height="240px"
                width="auto"
                alt="product "
              />
            </div>
            <div className="pd-5 card-content fadein fadeout">
             <strong>{product.title}</strong> 
                <p>
                    $ {product.price}
                    </p>
             <p>
               {product.size.map(size=><li> {size} </li> )}
               </p>       

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
