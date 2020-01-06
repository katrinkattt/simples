import React  from 'react';

export default function TitleBlock(){
    const words = ['commerce', 'offers', 'products'];
    const items = words.map((titl)=> <p>{titl}</p>);
    return(<div>{items}</div>, document.getElementById("blockTitle"))
}
