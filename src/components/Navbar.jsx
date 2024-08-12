import React, { useEffect, useState } from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

//Es una copia de la version que subio el profe, mi objetivo es seguir aprendiendo sin perder acceso a las clases. No estoy interesado en el certificado sino tener todas las clases disponibles mientras voy aprendiendo la sontaxis//
 
const Navbar = () => {
  const [categorias, setCategorias] = useState([])


  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategorias(json))
  }, [])

  
  return (
    <nav>
        <Link to="/">
        <h1>Tienda</h1>
        </Link>
        <ul>
          {
            categorias.length > 0 && categorias.map(e => <Link key={e} to={`/categoria/${e}`}>{e + " "}</Link>)
          }         
        </ul>
        <CartWidget />
    </nav>
    
    
  )
}

export default Navbar