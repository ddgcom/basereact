import styled from 'styled-components'

export const Body = styled.div`
  clear: both;
`

export const Content = styled.div`
  clear: both;
`

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:center;

  &.header-wrapper-home {
    background: transparent;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  &.header-wrapper-website {
    background: white;
  }

  &.header-wrapper-blog {
    background: white;
  }

  &.header-wrapper-landing {
    background: white;
  }

  &.header-wrapper-unset {
    display: none;
  }

  &.header-wrapper-fixed {
    position: absolute;
    width: 100%;
    top: 0;
  }
`