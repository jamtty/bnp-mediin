import { createRoot } from 'react-dom/client'
import App from '@/App.tsx'
import '@/assets/css/common.css'
import '@/assets/css/editor.css'

createRoot(document.getElementById('root')!).render(<App />)
