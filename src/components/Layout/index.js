import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Body, Content, Header } from './styles'

import {Logo} from '../UI/Logo'
import {Menu} from '../UI/Menu'

const DEFAULT_TYPE = 'website'

function selectedTypeHeader( type ) {
  switch( type ) {
    case 'home':
      return 'header-wrapper-home header-wrapper-fixed'
    case 'website':
      return 'header-wrapper-website'
    case 'blog':
      return 'header-wrapper-blog'
    case 'landing':
      return 'header-wrapper-landing'
    default:
      return 'header-wrapper-unset'
  }
}

export const Layout = ({ children, type = DEFAULT_TYPE, title, description }) => {
  const typeHeader = selectedTypeHeader(type)
  const noHeader = new RegExp('header-wrapper-unset|header-wrapper-home|header-wrapper-landing')
  const isFixed = new RegExp('header-wrapper-fixed')
  const body_class = (isFixed.test(typeHeader)) ? type + ' header-fixed': type

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        {title && <title>{title} | Clic AQUI</title>}
        {description && <meta name='description' content={description} /> }
      </Helmet>
      <Body className={body_class} menuHeight="155.8">
        <Header className={typeHeader}>
          <div class="container">
            {typeHeader != 'header-wrapper-unset' && <Logo />}
            {
              (!noHeader.test(typeHeader))
                ? <Menu>
                    <a href="#">Test</a>
                  </Menu>
                : ''
            } 
          </div>
        </Header>
        <Content>
          {children}
        </Content>
      </Body>
    </Fragment>
  )
}
