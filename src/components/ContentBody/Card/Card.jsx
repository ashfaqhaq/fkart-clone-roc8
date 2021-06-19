import React,{useEffect,useState} from "react";
import _ from 'lodash'
import './Card.css'
function Card({products,sortBy}) {
    
    console.log(sortBy)
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

  return (
    <div>
      <div className="card-body flex">
         
        { data && 
        data.map((product) => (
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
                <p>
                    {product.price}
                    </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
