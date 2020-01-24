import React, {Component} from 'react';
import fair from '../img/fair.jpg';
import bylk from '../img/bylk.jpg';
import gebirge from '../img/gebirge.jpg';
import toptop from '../img/toptop.jpg';

export default class Gallery extends Component{
    constructor(props){
        super(props)
        this.state={
            curList: 0,
            list: [gebirge, toptop, bylk, fair]
            }
        }

    clickList(p){
        if(this.state.curList < (this.state.list.length-1)){
            if(p== 'next'){
                this.setState({
                    curList: this.state.curList +1
                })
            }
            if(p == 'prev'){
                this.setState({
                    curList: this.state.curList -1
                })
            }

        }
        else{
            this.setState({
                curList: 0
            })
        }
        
    }


    render(){
        return(
            <div  className="container">
                <div className="title__section">Gallery</div>
            <div className="gallery__block">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel__inner">
                        <div class="carousel__item">
                            <img class="slaid second" style={{background: `url(${this.state.list[this.state.curList]})`}} src={this.state[this.count]}>
                            </img>
                        </div>
                    </div>
                    <a class="carousel-control-prev" onClick={ () => this.clickList('prev')}>
                        <span class="carousel-control-prev-icon"  aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next" onClick={ () => this.clickList('next')}>
                        <span class="carousel-control-next-icon"  aria-hidden="true"></span>
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}