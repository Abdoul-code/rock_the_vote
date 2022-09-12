import React,{useState} from "react"
import "./App.css"
function App (){
    const[color, setColor] = useState(['white','white','white','white']);

    function smallTimeClick(){
        setColor(prevColor => {
                    if(prevColor[0] === 'white'){
                    return ['black','black','black','black'] 
            }
            else{
              return ['white','white','white','white']
            }
        }
            )
       
    } 
    
    
    
    return(
        <div>
                <div className="grid">
                    <div className="gridBox" style={{backgroundColor:color[0]}}></div>
                    <div className="gridBox" style={{backgroundColor:color[1]}}></div>
                    <div className="gridBox" style={{backgroundColor:color[2]}} ></div>
                    <div className="gridBox" style={{backgroundColor:color[3]}}></div>
                </div>
                <div className="BtnContainer">
                <button  onClick= {smallTimeClick}>DJ Small</button>
                <button  onClick= {this.partyDj}>DJ Small</button>
                <button  onClick= {this.professionalDj}>DJ Small</button>
                <button  onClick= {this.professionalDj}>DJ Small</button>
                <button  onClick= {this.bigTimeDj}>Big Dj one</button>
                <button  onClick= {this.bigTimeDj}>Big Dj two</button>
                <button  onClick= {this.bigTimeDj}>Big Dj three</button>
                <button  onClick= {this.bigTimeDj}>Big Dj four</button>
                <button  onClick= {this.music}>Make Noise</button>
                </div>
               
      
            </div>
    )
    
  
   
    
    // partyDj(){
    //     if(this.state.color[1] === "white"){
    //         this.setState({
    //             color:['purple','purple','black','black']
    //         })
    //     }else{
    //         this.setState({
    //             color:['purple','purple','black','black']
    //         })
    //     }
    // }
    // professionalDj(){
    //     if(this.state.color[2] === "black"){
    //         this.setState({
    //             color:['purple','purple','blue','black'] 
    //         })
    //     }else if(this.state.color[3] === "black"){
    //         this.setState({
    //             color:['purple','purple','black','blue']
    //         })
    //     }
    // }
    // bigTimeDj(){
    //     if(this.state.color[0] === "white"){
    //         this.setState({
    //             color:['yellow','white','white','white']
    //         })
    //     } else if(this.state.color[1] === "white"){
    //         this.setState({
    //             color:['yellow','orange','black','blue']
    //         })
    //     }else if(this.state.color[2] === "black"){
    //         this.setState({
    //             color:['yellow','orange','green','blue']
    //         })
    //     } else if(this.state.color[3]=== "blue"){
    //         this.setState({
    //             color:['yellow','orange','green','red']
    //         })

    //     }
    // }

    
    
}

export default App