import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
  // const [title,setTitle] = useState('First setted alert')
  return (
    props.title &&
     <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.title.name}{props.title.fame}</strong>
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
    </button>
    </div>
  )}
