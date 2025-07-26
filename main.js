import './src/style.css'
import { App } from './src/app'

document.querySelector('#app').innerHTML = await App()
