import React from 'react'
import Button from './Button.jsx'
import AppActions from '../lib/AppActions'
import AppMessage from './Message.jsx'

const List = ({ articles,listHeader,onRemove}) =>  
{
        var listItems = articles != undefined ? articles.map((article,i) => {
            return <li key={i}> Article {i+1}:{article} <Button  handleClick={()=>onRemove(i)} text="X"/></li> 
        }) :[];
        
        return (
            <div>
                <h1>{listHeader}</h1>
                <ul>
                    {listItems} 
                </ul>
                <AppMessage/>
            </div>
        );
}

export default List;