import React from 'react'
import PropTypes from 'prop-types'
import PropTypes from 'prop-types'


export default function Textform(props) {
  return (
    <div>
      <form>
  <div class="form-group">
    <h2>{props.heading}</h2>
    <label for="exampleInputEmail1">{props.labelname}</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">{props.smallinfo}</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
Textform.defaultprops = {
  title:props.labelname
}
Textform.propsTypes ={
smallinfo: 'We will never share your email to anyone'
}