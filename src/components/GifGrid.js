import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGif';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

  const {data:images , loading} = useFetchGifs(category);

  return (
    <>
      <h3 className="card-grid animate__animated animate__fadeIn">{category}</h3>

      { loading && <p>Cargando</p> }
      <div className="card-grid animate__animated animate__fadeIn">
        
        { images.map( img => (
            <GifGridItem 
              key={img.id}
              img={img}
            />
          ))
        }
        
      </div>
    </>
  )
}

export default GifGrid
