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
                    <FormBlock />
                    <FormBlock />
                    <FormBlock />
                    <BtnForm />
                </div>
            </div>
        )
    }
}
// nado naverno sozdat' ekzemplyar class