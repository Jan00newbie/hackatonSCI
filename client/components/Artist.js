import React from 'react'

export default ({
    match: {
      params: { artistName }
    },
    location
  }) => (
    <p>
      artist {artistName}
    </p>
  )