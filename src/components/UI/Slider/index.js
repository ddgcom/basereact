import React from 'react'
import {Wrapper} from './styles'

import {Image} from '../../Toolbox/Image'

export const Slider = ({ data: { images = [] } } = {}) => {
  return (
    <Wrapper>
      {images.map(image => <Image key={image.id} {...photo} />)}
    </Wrapper>
  )
}
