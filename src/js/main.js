import React from 'react';
import { createRoot } from 'react-dom/client'
import InfoPanel from './components/InfoPanel'

chrome.runtime.onMessage.addListener((request, sender, response) => {
  if (request.action === 'showInfo') {
    injectComponent('page-tools-info', <InfoPanel />)
    response({ success: true })
  }
})

function injectComponent(id, component) {
  const existing = document.getElementById(id)
  if (existing) {
    existing.remove()
    return
  }

  const div = document.createElement('div');
  div.setAttribute('id', id)
  document.body.appendChild(div)
  
  const root = createRoot(div)
  root.render(component)
}