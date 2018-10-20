import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'
import HelloWorld from '@/components/HelloWorld/HelloWorld'
import '@/assets/css/main.scss'
import '../public/favicon.ico'

const App = () => <HelloWorld />

render(App(), document.getElementById('app'))

export default hot(module)(App)
