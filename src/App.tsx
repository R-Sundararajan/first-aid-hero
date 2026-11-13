import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import GuideDetail from './pages/GuideDetail'
import Guides from './pages/Guides'
import Home from './pages/Home'
import Learn from './pages/Learn'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="guides" element={<Guides />} />
        <Route path="guides/:slug" element={<GuideDetail />} />
        <Route path="learn" element={<Learn />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
