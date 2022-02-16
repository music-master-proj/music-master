import React from 'react'

export const YoutubeFrame = ({ videoId }) => {
  return (
    <div style={{ height: '14rem' }}>
      <iframe src={`https://www.youtube.com/embed/${videoId}`}
        frameborder='0'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
        title='video'
        style={{ height: '14rem' }}
      />
    </div>
  )
}
