import React from 'react'
import Data from '../DataBase/Data'
import { useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';
export default function DogList() {
    const [dogs,setDogs]=useState(Data)
  return (
    <div>
      {
        dogs.map((dog)=>(
            <div class="card" style={{width: "18rem"}} key={dog.id}>
            <img class="card-img-top" src={dog.image} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{dog.name}</h5>
              <p class="card-text">{dog.race}</p>
              
            </div>
          </div>
        ))
      }
    </div>
  )
}
