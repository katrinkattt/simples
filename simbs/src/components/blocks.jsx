import React, {Component} from 'react';
import Block from './block';
import altay from '../img/altay.jpg';
import ural from '../img/ural.jpg';
import tayga from '../img/tayga.jpg';


export default class Blocks extends Component {
    constructor(props){
        super(props)
        this.initialState = {

            title:['Altay',
                    'Ural',
                    'Tayga'],
            text:[
                'ldiuf hsdk fhosdf jsdof pjoify',
                'oqwer tyui oasd fghjk',
                'nbvcxz asd fghjk lpoi uytrew'
            ],
            img:[
                altay,
                ural,
                tayga
            ]
        }
    }


    render(){
        return(
            <div  className="container container__first">
                <div className="title__section">Offers</div>
                <div className="blockLine col">
                    <div class="row align-items-center">
                        {
                            this.initialState.text.map((txt, id) =>
                            <div class="col">
                                <Block foto={this.initialState.img[id]} title={this.initialState.title[id]} text={this.initialState.text[id]}/>
                            </div>
                            )
                        }
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