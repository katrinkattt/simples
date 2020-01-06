import React, {Component} from 'react'

export default class Plane extends Component {
    render(){
        return(
            <div  className="container container__plane">
                <div className="title__section">Feature</div>
                <div class="row">
                    <div class="col-6 col-sm-4 component__4">
                        <div className="img__content">
                            <img src="https://i.ytimg.com/vi/blvE3Si-qt4/maxresdefault.jpg" alt=""/>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 component__4">Путешествие – это не только фотографии на память. Путешествия расширяют кругозор и меняют нас в корне. </div>

                    <div class="w-100 d-none d-md-block line__r"></div>

                    <div class="col-6 col-sm-4 component__4">Покупка онлайн билетов на самолет и ж/д билетов по всем направлениям по выгодным ценам. Бронирование отелей в России и по всему миру</div>
                    <div class="col-6 col-sm-4 component__4">
                    <div className="img__content">
                            <img src="https://bigpicture.ru/wp-content/uploads/2016/07/travel-970-head.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}