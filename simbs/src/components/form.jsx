import React, {Component} from 'react';
import FormBlock from './formBlock';
import BtnForm from './btn';
import '../'
// import { placeholder, labeledStatement } from '@babel/types';

export default class Form extends Component {
    render(){
        return(
            <div id="forms" className="container container__form">
                <div className="title__section">Feedback</div>
                <div className="block__main__form">
                    <FormBlock label="email" placeholder="your email" id="emailInput" text="vvedite your email"/>
                    <FormBlock label="nnumber" placeholder="your number" id="telephonInput" text="vvedite your number"/>
                    <FormBlock label="qestion" placeholder="your qestion" id="qestionInput" text="vvedite your questions"/>
                    <BtnForm />
                </div>
            </div>
        )
    }
}
// nado naverno sozdat' ekzemplyar class