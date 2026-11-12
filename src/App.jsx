import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'

// Les pages secondaires sont chargées à la demande pour alléger le premier affichage.
const About = lazy(() => import('./pages/About.jsx'))
const Products = lazy(() => import('./pages/Products.jsx'))
const ProductDetails = lazy(() => import('./pages/ProductDetails.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const Training = lazy(() => import('./pages/Training.jsx'))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Cart = lazy(() => import('./pages/Cart.jsx'))
const Legal = lazy(() => import('./pages/Legal.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="entreprise" element={<About />} />
          <Route path="produits" element={<Products />} />
          <Route path="produits/:slug" element={<ProductDetails />} />
          <Route path="services" element={<Services />} />
          <Route path="formations" element={<Training />} />
          <Route path="galerie" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="panier" element={<Cart />} />
          <Route path="mentions-legales" element={<Legal />} />
          <Route path="confidentialite" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
