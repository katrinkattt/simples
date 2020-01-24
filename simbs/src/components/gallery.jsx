import React, {Component} from 'react';
import fair from '../img/fair.jpg';
import bylk from '../img/bylk.jpg';
import gebirge from '../img/gebirge.jpg';
import toptop from '../img/toptop.jpg';

export default class Gallery extends Component{
    constructor(props){
        super(props)
        this.state=[gebirge, toptop, bylk, fair]
        this.count =0
    }

    clickList(p){
        if(p == 'next'){
        return this.state[(this.count+1)]
        alert('next')
        }
        if(p == 'prev'){
        return   this.state[(this.count-1)]
        alert('prev')
        }
        else{
            p=p
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
                            <img class="slaid second" src={this.state[this.count]}>
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