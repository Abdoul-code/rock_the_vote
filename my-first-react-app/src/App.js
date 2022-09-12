import React from "react"
import Card from "./Card"
import vacationSpots from "./vacationSpots"
function App(){
  const timeToGo
  const style = {
    fontSize :20
  }

    const vacationOff = vacationSpots.map(vacation =>
            <Card 
            key =  {vacation.id}
            place = {vacation.place}
            price={vacation.price} 
            timeToGo={vacation.timeToGo}/> )
    
    return(
        <div>
          {vacationOff}
        </div>
    )
}

export default App