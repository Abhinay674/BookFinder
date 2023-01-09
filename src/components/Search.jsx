import React from 'react'

function Search({ data  }) {
  
  const thumbnail= `http://books.google.com/books/content?id=${data.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;


  return (
    <div className='books'>
        <img src={thumbnail} alt={data.title} />   
      <div className="bookinfo">
        <h3>{data.volumeInfo.title}</h3>
      </div>
      <a href={data.volumeInfo.previewLink}  target='_blank' >Preview</a>
    </div>
  )
}

export default Search
