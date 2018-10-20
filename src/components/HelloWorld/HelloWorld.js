import React from 'react'
import Icon from './icon.svg'
import './HelloWorld.scss'

const HelloWorld = () => (
  <div className="hello-world">
    <h1>
      <img src={Icon} alt="world" />
      Hello World!!!
    </h1>
  </div>
)

export default HelloWorld
