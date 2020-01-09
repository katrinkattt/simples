import React, {Component} from 'react';
import Block from './block';
import altay from '../img/altay.jpg';
import ural from '../img/ural.jpg';
import tayga from '../img/tayga.jpg';


export default class Blocks extends Component {
//     constructor(props){
//         super(props)
//         initialState = {
//         currentId:0,
//         blockS:[
//             {
//                 title:'commerce',
//                 text:'ldiuf hsdk fhosdf jsdof pjoify'
//             },
//             {
//                 title:'offers',
//                 text:'oqwer tyui oasd fghjk'
//             },
//             {
//                 title:'products',
//                 text:'nbvcxz asd fghjk lpoi uytrew'
//             }
//         ]
//     }
//     updateValues();{
//         this.initialState({title: 'comm'})
//     }
// }


    render(){
        return(
            <div  className="container container__first">
                <div className="title__section">Offers</div>
                <div className="blockLine col">
                <div class="row align-items-center">
                    <div class="col">
                        <Block  />
                    </div>
                    <div class="col">
                        <Block />
                    </div>
                    <div class="col">
                        <Block />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
// const words = ['commerce', 'offers', 'products'];
// const items = words.map((titl)=> <p>{titl}</p>);

// ReactDOM.render(<div>{items}</div>, document.getElementById("blockTitle"))


// TO CHTO BILO DO ! FUNCTION
// render(){
//     return(
//         <div className="container container__first">
//             <div className="blocks">
//             <div className="row">
//                 <div className="col-sm">
//                     <Block  />
                // </div>
//                 <div className="col-sm">
//                     <Block />
//                 </div>
//                 <div className="col-sm">
//                     <Block />
//                 </div>
//             </div>
//             </div>
//         </div>

//     )
// }