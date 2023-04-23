import styled from "styled-components";

export const TreinoNome = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-weight: 700;
  font-size: 21px;
  line-height: 32px;
  margin:  5% 7.5% 2.5%;

  >svg{
    width: 50px;
  }
  >h3{
    width: 150px;
  }
`

export const ImageCardContainer = styled.div`
  width: 100%;
  height: 150px;
  background: url("supinoPlano.webp");
  background-size:cover ;
  background-position: center;
  margin: auto;
  border-radius: 4px;

  




`

export const TreinoContainer = styled.div`
  width: 355px;
  height: fit-content;
  padding-bottom: 5%;
  margin-bottom: 50px;
 

 background: rgba(38, 87, 215, 0.25);
  box-shadow: 2px 2px 4px rgba(38, 87, 215, 0.5);
  border-radius: 4px;
  margin: auto;
  position: relative;

  >p{
  font-weight: 400;
  font-size: 21px;
  line-height: 32px;

  background: transparent;
  margin: 5% 0 0 5%;
  }

  >#carga{
   display: flex;
   width: 80%;
   align-items: center;
   font-weight: 400;
    font-size: 21px;
    line-height: 32px;
    margin: 5% 0 0 5%;

    background: transparent;
 
    >p{
      background: transparent;
      text-align: center;
    }

   >svg{
  
    background: transparent;

   }

   
   
  }






`