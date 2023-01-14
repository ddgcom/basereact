import React, { Fragment } from 'react'
import { Article as ArticleImg, Image as Img, Link as LinkImg } from './styles'

import DEFAULT_IMG from '../../../assets/default.png'
const DEFAULT_IMG_ALT = 'SLIDE'
const DEFAULT_URL = '#'

export const Image = ({ link = DEFAULT_URL, src = DEFAULT_IMG, alt = DEFAULT_IMG_ALT }) => {
  return (
    <ArticleImg>
      <Fragment>
          <LinkImg to={link}>
            <Img src={src} alt={alt} />
          </LinkImg>
      </Fragment>
    </ArticleImg>
  )
}
