import styled from 'styled-components'

export const Logout = styled.div`
  margin-top:1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  text-align: center;

  #logout{
  width: fit-content;
  padding: 0 10px 0 10px;
  font-size:1rem;
  border-radius: 4px;
  font-weight: italic;
  color: var(--text-color);
  cursor:pointer;
  background-color: var(--button-warn);
  border:none;
  font-size: 1rem;
  }


#userName{
  width: fit-content;
  color:var(--primary-color);
  font-weight: bold;
  background-color: transparent;
  cursor:pointer;
  font-size: 1.2rem;
  white-space: nowrap;


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
  >svg{
    width: 25px;
    color: var(--button-warn);
  }

`
