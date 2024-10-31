import styled from 'styled-components'

export const Logout = styled.div`
  display: flex;
  justify-content: flex-end;
  gap:5%;
  align-items: center;
  color:white;
  width: 90vw;
  text-align: center;
  position: absolute;
  top:2%;
  right:5%;

    #logout{
    width: fit-content;
    padding: 0 10px 0 10px;
    font-size:0.9rem;
    border-radius: 4px;
    font-weight: italic;
    color: #fff;
    cursor:pointer;
    background-color: #2657d7;
    border:none;

    }
    #userName{
      width: fit-content;
      color: white;
      font-weight: bold;
      background-color: transparent;
      cursor:pointer;
      color:#2657d7;

    }

`

export const Container = styled.header`
  width: 100%;
  height: 30px;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  color:#ffffff;
  margin: 60px auto 0;
`
export const Nav = styled.button`
  width: 125px;
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