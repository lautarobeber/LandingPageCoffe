import React from "react"
import { Map, Marker } from "pigeon-maps"
import '../index.css'
import '../App.css'

export function MyMap() {
  return (
    <div style={{ borderRadius: '25px', overflow: 'hidden' }}>

    
    <Map class='myMap' height={550} defaultCenter={[-33.00931247365056, -58.50792452372028]} defaultZoom={15} >
      <Marker width={50} anchor={[-33.00931247365056, -58.50792452372028]} />
    </Map>
    </div>
  )
}


export default MyMap;
