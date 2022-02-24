import React from 'react';
import { useContext } from 'react';
import { Appcontext } from './App';


const Tours = () => {

 const {tours, readMore,setReadMore,handleClick,handleDelete} = useContext(Appcontext)
  return (
  <section>
  { tours.map(el => {
        const {id, name,info, image, price }= el
        return(
        <div key={id} className="card">
          <img style={{width: "90%"}} src={image} alt="" />
          <div className="title">{name}</div>
          <div className="price">${price}</div>
          <p className="info">{readMore ? info.substring(0,200): info} <button onClick={handleClick}>{readMore? "Read More": "Show Less"}</button></p>
          <button onClick={() =>handleDelete(id)}>Not Interested</button>
        </div>   
        )
      })}
    <div>
      
    </div>
  </section>
  )
};

export default Tours;
