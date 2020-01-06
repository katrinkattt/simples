import React, {Component} from 'react';


function paralax(event){
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX*speed/100}px)`
    })
}
document.addEventListener('mousemove', paralax);

export default class Wallpaper extends Component {
    render(){
        return(
            <div class="scene">
                <div data-speed="1"  class="layer  layer__bg" ></div>
                <div data-speed="5" class="layer layer__0"></div>
                <div data-speed="10" class="layer layer__1"></div>
                <div data-speed="15" class="layer layer__2"></div>
            </div>
        );
    }
}
