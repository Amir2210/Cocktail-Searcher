import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { AppContext } from './AppContext'
import './index.css'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
  <QueryClientProvider client={queryClient}>
    <ToastContainer position='top-center' autoClose={2000} />
    <App />
  </QueryClientProvider>
  </AppContext>
)
