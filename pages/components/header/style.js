import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.header`
  width: 100%;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  

  color:#ffffff;
  margin: 50px auto 0;
`
export const Nav = styled(Link)`
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  >svg{
    width: 25px;
  }
  >p{
    width: 70px;
     text-align: center;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 32px;

  text-align: center;
  margin-top: -10px;

  >span{
    color: #2657d7;
  }

`