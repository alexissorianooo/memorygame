import React from 'react'

let showCounter = 0
export default function Blocks(props){
    let checker = /matched/.test(props.blockName)
    let newBlockName = props.blockName.substring(0,props.blockName.indexOf('matched'))

    const [showItem, setShowItem] = React.useState(false)
    
    function show(){
        showCounter++
        if(showCounter<3){
            setShowItem(prevState => !prevState)
        }else{
            showCounter=0
            console.log('reset show')
            setShowItem(false)
        }
        console.log('showCounter', showCounter)
    }
    return(
        <div 
            className={`blocks blocks-alignment aspect-square ${checker ? 'bg-yellow-400' : 'bg-indigo-400'}`}
            onClick={() => {props.blockClicked(); show();}}
            name={props.blockName}
        >
            {showItem ? checker ? newBlockName : props.blockName : ''}
        </div>
       
    )
}