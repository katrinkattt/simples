import React, {Component} from 'react';

import TitleBlock from './titleBl';
import TextBlock from './textBl';

export default function Block(props) {
    return(
        <div className="block_line">
            <div className="block__one">
                <div className="block__foto"></div>
                <div key="title"id="blockTitle" className="block__title">
                    <TitleBlock />
                </div>
                <div key="text" id="blockText" className="block__text">
                    <TextBlock />
                </div>
            </div>
        </div>
    )
}


// function RenderText(props){
//        // ADD FOR HZ
//         const texts = (
//         <div>
//             {props.words.map((post) =>
//             <p key={post.id}>
//                 {post.title}
//             </p>
//             )}
//         </div>
//     )
//     const content = (
//     <div>
//         {props.words.map((post) =>
//             <p key={post.id}>
//                 {post.content}
//             </p>
//         )}
//     </div>
//     );
//     return(
//         <div>
//             {texts}
//             <hr />
//             {content}
//         </div>
//     );
// }




// const Text = (props) => {
//     return(
//         <p>This is a {props.title} and {props.text}</p>
//     )
// }





// export default class Block extends Component {
//     render(){
//         return(
//                         <div className="block__one col-sm">
//                             <div className="block__foto"></div>
//                             <div key="title" className="block__title">{this.title}</div>
//                             <div key="text" className="block__text">{this.text}</div>
//                         </div>
//         )
//     }
// }


// const words = [
//     {id:1, title:'text1', content:'slovaaa mnogo slov'},
//     {id:2, title:'text2', content:'eche slova i eche'},
//     {id:3, title:'text3', content:'v thret zagolovke'}
// ];

// function RenderText(props){
//        // ADD FOR HZ
//         const texts = (
//         <div>
//             {props.words.map((post) =>
//             <p key={post.id}>
//                 {post.title}
//             </p>
//             )}
//         </div>
//     )
//     const content = (
//     <div>
//         {props.words.map((post) =>
//             <p key={post.id}>
//                 {post.content}
//             </p>
//         )}
//     </div>
//     );
//     return(
//         <div>
//             {texts}
//             <hr />
//             {content}
//         </div>
//     );
// }



// function ListText(props){
//     const words = props.words;
//     const listItems = words.map((text)=>
//         <p key={text.toString()} className="text__in__block">{text}</p>
//     );
//     return(
//         <p>{listItems}</p>
//     );
// }

