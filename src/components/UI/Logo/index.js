import React from 'react'
import { Wrapper, Link, Image } from './styles'

import DEFAULT_IMG from '../../../assets/logo.png'
const DEFAULT_IMG_ALT = 'Clic AQUI'
const DEFAULT_URL = '/'

export const Logo = ({ cover = DEFAULT_IMG, alt = DEFAULT_IMG_ALT, url = DEFAULT_URL }) => (
  <Wrapper>
    <Link to={url}>
      <Image src={cover} alt={alt} />
    </Link>
  </Wrapper>
)
