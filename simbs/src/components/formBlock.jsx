import React, {Component} from 'react'
// import { valueToNode } from '@babel/types'

export default function FormBlock(props) {
    return(
        <div id= "form_content" className="form_content">
            <form action="input">
            <div class="form-group">
                <label for="exampleInputEmail1"></label>
                <input type="email" class="form-control" id={props.id} aria-describedby="emailHelp" placeholder={props.placeholder}></input>
                <small  class="form-text text-muted">{props.text}</small>
            </div>
        </form>
        </div>
    );
}

