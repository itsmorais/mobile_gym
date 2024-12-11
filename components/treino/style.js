import styled from "styled-components";

export const TreinoNome = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 1rem;

  font-weight: 700;
  font-size: 1.5rem;
  margin: 2% 0 0 5%;


  >svg{
    background-color: transparent;

  }
  >h3{
    width:fit-content;
    background-color: transparent;

  }
`

export const ImageCardContainer = styled.div`
  width: 100%;
  height: 12rem;
  background-size:cover ;
  background-position: center;
  margin: auto;
  padding: 0 2%;
  border-radius: 4px;

  




`

export const TreinoContainer = styled.div`
  width: 92%;
  height: fit-content;
  padding-bottom: 0.5rem;
  overflow-y: hidden;
 
 

 background: var(--card-background);
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  margin: 1rem auto;
  position: relative;

  >p{
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 32px;

  background: transparent;
  margin: 2% 0 0 5%;

  >span{
    background: transparent;
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--text-color);
    
  }
  }

  >#carga{
   display: flex;
   width: 80%;
   align-items: center;
   font-weight: 700;
   font-size: 1.3rem;
    line-height: 32px;
    margin: 2% 0 0 5%;
    gap: 5%;

    background: transparent;
 
    >p{
      background: transparent;
      text-align: center;
      >span{
    background: transparent;
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--text-color);
    
  }
    }

   >svg{
  
    background: transparent;

   }

   
   
  }






`