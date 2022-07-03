import React from 'react'

//images
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
    let newBlockName = props.blockName.substring(0,props.blockName.indexOf('|')) 
    // newBlockName will be empty string if there are not indexOf('|') found on props.blockName
    /// hence, hiding the image when '|show' or '|matched' not found on the props.blockName

    let imgSrc = ''
    let display = /show|matched/.test(props.blockName) ? 'block' : 'hidden' 
    switch(/\|/.test(props.blockName) ? props.blockName.substring(0,props.blockName.indexOf('|')) : props.blockName){
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
            className={`blocks blocks-alignment aspect-square ${checker ? 'bg-yellow-400 ' : 'bg-indigo-400 hover:bg-green-300'}`}
            onClick={props.blockClicked}
            disabled={checker}
        >
            <img src={imgSrc} alt={newBlockName} className={display}/>
        </div>
       
    )
}
