import React, {Component} from 'react'
// import { valueToNode } from '@babel/types'

export default class FormBlock extends Component {
    render(){
        return(
            <div id= "form_content" className="form_content">
                <form action="input">
                <div class="form-group">
                    <label for="exampleInputEmail1">Text</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
            </form>
            </div>
        );
    }
}
