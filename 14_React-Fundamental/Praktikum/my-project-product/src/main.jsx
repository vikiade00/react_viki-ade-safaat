import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ConfigProvider } from "antd"
import { ThemeConfig } from './theme/ThemeConfig'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={ThemeConfig}>
    <App />
    </ConfigProvider>
  </React.StrictMode>,
)
