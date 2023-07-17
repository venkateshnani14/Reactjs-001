import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Textarea(){
  const [head,setHead]=useState('');
  const [text,setText] = useState(head);
  const [lettercase,setLettercase] = useState('To uppercase');
  const [title,setTitle] = useState({})
  const [words,setWords] = useState('words')
  
  // 
  // else{
    // setWords('words')
  // }
  // let wcounter = text.split(' ').length
  // const [wordcount,setWordcount] = useState(wcounter)
  // setWordcount(text.split(' ').length)
  const setThings = (name,fame)=>{
    setTitle({
      name:name,
      fame:fame
    })
  }

  const[newText,setNewText]=useState('');
  const clickme = ()=>{
  console.log('clicked me');
  let newText = head.toUpperCase();
  setHead(newText)
  setText(newText)
  }
  const clickme2 = ()=>{
    console.log('clicked me2');
    let newText = head.toLowerCase();
    setHead(newText)
    setText(newText)
  }
  const changes = (event)=>{
  console.log('text is changed');
  setHead(event.target.value)
  setText(event.target.value)
  }
  const clickme3 = ()=>{
  setText('')
  }
  const[mystyle,setMystyle] = useState({
  backgroundColor:'white',
  color:'black'
  })
  const [substyle,setSubstyle] = useState({
  setMystyle})

  const [mode,setMode] = useState('Dark mode')
  const clickme4 = ()=>{
  if(mystyle.backgroundColor=='white'){
    setMode('Light mode')
    setThings("dark mode has been enabled","yeah that\'s true")
    alert('You are about to activate Darkmode')
    console.log('clickme 4 is clicked')
    //                                   Just for grabbing user attention but makes the site unprofessional(not recommended)
    // setInterval(() => {
      // document.title = 'Darkmode!!'
    // }, 2000);
    // setInterval(() => {
      // document.title = 'Lightmode again'
    // },4000)
    // setFirst('Dark mode has been enabled')
    document.body.style.backgroundColor = 'black'
    // document.body.h2.style.Color = 'lightgrey'
    setMystyle({
      backgroundColor:'rgb(1, 15, 23)',
      color:'white',
    })
    setSubstyle({
      backgroundColor:'black',
      color:'white'
    })
    //  setThings("those were gold","24karats")
    }
    else{
    setMode('Dark mode')
    document.body.style.backgroundColor = 'white'
    
    // document.body.ih2.style.color = 'black'
    setMystyle({
      backgroundColor:'white',
      color:'black'
    })
    setSubstyle({
      backgroundColor:'white',
      color:'black'
    })
    }
    }

  //
  return(
    <div className='container-fluid ms-5 ' style={mystyle}>
        <h5 className='mb-0'>Type something mate!</h5>
        <textarea className='textarea col-8' style={substyle} value={text} onChange={changes}/>
        <br></br>
        <button className='btn btn-primary txt-light' onClick={clickme}>{lettercase}</button>
        <button className='btn btn-primary txt-light ms-4' onClick={clickme2}>To lowercase</button>
        <button className='btn btn-danger txt-light ms-4 mt-2' onClick={clickme3}>Delete</button>
        <button className='btn btn-dark txt-light ms-4 mt-2' onClick={clickme4}>{mode}</button>
        <h4 className='mb-0 mt-4'>Number of words and letters</h4>
        <p className='my-0'>Your sentence has <b>{text.split(' ').filter((element)=>{return element.length!=0}).length}</b> {words} and <b>{text.length}</b> letters.</p>
        <p className='my-0'>Estimated reading time: <b>{text.split(" ").filter(()=>{return text.length!=0}).length * 0.006}</b> minutes</p>
   </div>
  )
}
// text.split(' ').length