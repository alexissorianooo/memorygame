import React from 'react'

export default function Blocks(props){
    let checker = /matched/.test(props.blockName)
    let showItem = /show/.test(props.blockName)
    let newBlockName = props.blockName.substring(0,props.blockName.indexOf('|'))

    // console.log('showItem',showItem, props.blockName)

    let displayAnswer = ''

    if(checker || showItem){
        displayAnswer = newBlockName
    }else{
        displayAnswer = newBlockName
    }
   

    return(
        <div 
            className={`blocks blocks-alignment aspect-square ${checker ? 'bg-yellow-400 ' : 'bg-indigo-400'}`}
            // onClick={() => {props.blockClicked(); show();}}
            onClick={props.blockClicked}
            name={props.blockName}
            disabled={checker}
        >
            {displayAnswer}
        </div>
       
    )
}