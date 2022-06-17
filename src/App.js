import React from 'react'
import headImage from "./Components/Vector1.png"
import nemodarImage from  "./Components/Rectangle 9.png"
import tableImage from "./Components/Rectangle 10.png"
import listImage from "./Components/Group 19.png"
import leftSide from "./Components/Rectangle 2.png"
import irancellImage from './Components/irancell.png'
import "./App.css"
import User from './Components/User'
import firstIcon from "./Components/extra-piggie-04.png"
import secondIcon from "./Components/extra-piggie-05.png"

function App() {
  return (
    <div className='App'>

<div className='right'>

<img src={irancellImage}/>
<input type="text" placeholder='جستجو'/>
<img src={listImage}/>
</div>


<div className='center'>
<h3>صفحه اصلی</h3>
      <img src={headImage}/>
      <img src={nemodarImage}/>
      <img src={tableImage}/>
</div>


<div className='left'>
<User user={"سلام، مهسا انقلابی"} email={"mhs642@gmail.com"} img={firstIcon}/>

  <User user={"سلام ساحل عطایی"} email={"sahelataei12345@gmail.com"} img={secondIcon}/>

<img src={leftSide}/>
</div>
  
    </div>
  )
}

export default App