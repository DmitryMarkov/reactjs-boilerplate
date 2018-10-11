import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'
import Routes from '@/components/Routes'
import '@/assets/css/main.scss'
import '../public/favicon.ico'

const App = () => <Routes />

render(App(), document.getElementById('app'))

export default hot(module)(App)
