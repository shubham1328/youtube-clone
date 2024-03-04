import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const btnList = [
    "All",
    "Kapil",
    "Songs",
    "Cricket",
    "Songs",
    "News",
    "Cooking",
    "Valentines",
    "Movies",
]
  return (
    <div className='flex'>
      {btnList.map((btn, ele) => 
            <Button key={ele} name={btn}/>
      )}
        {/* <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Songs"/>
        <Button name="Live"/>
        <Button name="Cricket"/>
        <Button name="News"/>
        <Button name="Cooking"/>
        <Button name="Valentines"/> */}
    </div>
  )
}

export default ButtonList