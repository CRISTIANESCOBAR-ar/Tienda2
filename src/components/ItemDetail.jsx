// import React from 'react'
import ItemCount from './ItemCount/ItemCount'

const ItemDetail = ({producto, mostrarSiguiente, mostrarAnterior}) => {

    const {id, image, title, description, category, rating, price} = producto


  return (
    <div className='prod-card'>
    <h3>{title}</h3>
    <img src={image} alt={`foto del producto ${title}`} height={200} width={200}/>
    <p>{description}</p>
    <p>{price}</p>
    <button onClick={mostrarAnterior}>Ver Anterior</button>
    <button onClick={mostrarSiguiente}>Ver Siguiente</button>
    <ItemCount id={id}/>

  </div>
  )
}

export default ItemDetail