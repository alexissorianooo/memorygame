import React from 'react'
import apple from './images/apple.png'
import banana from './images/banana.png'
import mango from './images/mango.png'
import orange from './images/orange.png'
import potato from './images/potato.png'
import strawberry from './images/strawberry.png'
import tomato from './images/tomato.png'
import watermelon from './images/watermelon.png'


export default function Blocks(props){
    let checker = /matched/.test(props.blockName)
    // let showItem = /show/.test(props.blockName)
    let newBlockName = props.blockName.substring(0,props.blockName.indexOf('|'))

    // console.log('showItem',showItem, props.blockName)

    // let displayAnswer = ''

    // if(checker || showItem){
    //     displayAnswer = newBlockName
    // }else{
    //     displayAnswer = newBlockName
    // }
   
    let imgSrc = ''
    switch(newBlockName){
        case 'apple':
            imgSrc = apple
            break;
        case 'banana':
            imgSrc = banana
            break;
        case 'mango':
            imgSrc = mango
            break;
        case 'orange':
            imgSrc = orange
            break;
        case 'potato':
            imgSrc = potato
            break;
        case 'strawberry':
            imgSrc = strawberry
            break;
        case 'tomato':
            imgSrc = tomato
            break;
        case 'watermelon':
            imgSrc = watermelon
            break;
        default:
            imgSrc = ''
            break; 
    }

    return(
        <div 
            className={`blocks blocks-alignment aspect-square ${checker ? 'bg-yellow-400 ' : 'bg-indigo-400'}`}
            onClick={props.blockClicked}
            name={props.blockName}
            disabled={checker}
        >
            <img src={imgSrc} alt={newBlockName}/>
        </div>
       
    )
}