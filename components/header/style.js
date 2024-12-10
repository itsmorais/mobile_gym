import styled from 'styled-components'

export const Logout = styled.div`
margin-top:1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color:white;
  width: 100vw;
  text-align: center;

    #logout{
    width: fit-content;
    padding: 0 10px 0 10px;
    font-size:1.2rem;
    border-radius: 4px;
    font-weight: italic;
    color: #fff;
    cursor:pointer;
    background-color: #2657d7;
    border:none;
    font-size: 1rem;

    }
    #userName{
      width: fit-content;
      color: white;
      font-weight: bold;
      background-color: transparent;
      cursor:pointer;
      color:#2657d7;
      font-size: 1.2rem;


    }

`

export const Container = styled.header`
  width: 100%;
  height: fit-content;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  color:#ffffff;
  margin: 20px auto 0;
`
export const Nav = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;

  >svg{
    width: 25px;
  }
  >p{
    width: 70px;
     text-align: center;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 21px;
  line-height: 32px;

  text-align: center;
  margin-top: -10px;

  >span{
    color: #2657d7;
  }

`