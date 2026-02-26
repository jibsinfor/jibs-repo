import { createApp, type Component } from 'vue'
import './style.css'
import App from './App.vue'

export type imgSource = {
  url: string
  alt: string
}
export type fileDoc = {
 winId: string
  name: string
  fullName: string
  src: imgSource
}

export type WindowActions = {
  open?:()=> void
  save?: () => void
  share?: ()=> void
  print?: () => void
  close?: () => void
}

export type windowFrame = {
  id:string, 
  x: number,
  y: number,
  isOpen: boolean,
  windowState: string,
  selected:boolean,
  showWinTools:boolean,
  directionText:string | null,  
  showMenubar:boolean,
  menuBarOptions:Array<string> | null,
  headerData: headerData, 
  componentToShow: Component | null
} 
export type headerData = {
  headerIcon: imgSource,
  headerName: string,
  allowMaximize: boolean, 
  isMaximized:Boolean, 
}
export type desktopIcon = {
  winId: string, 
  x: number
  y: number
  docName: string
  img: imgSource
}

createApp(App).mount('#app')
