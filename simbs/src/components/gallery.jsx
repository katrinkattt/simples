import React, {Component} from 'react';
import Block from './block'

export default class Gallery extends Component{
    render(){
        return(
            <div  className="container">
            <div className="gallery__block">
                <div class="container-fluid">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel__item active">
                            <img class="" src="#" alt="Первый слайд">
                            </img>
                        </div>
                        <div class="carousel__item">
                            <img class="" src="#" alt="Второй слайд">
                            </img>
                        </div>
                        <div class="carousel__item">
                            <img class="" src="#" alt="Третий слайд">
                            </img>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}