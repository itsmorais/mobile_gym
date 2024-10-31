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
    width: 250px;
  }
`

export const ImageCardContainer = styled.div`
  width: 100%;
  height: 150px;
  background-size:cover ;
  background-position: center;
  margin: auto;
  padding: 0 2%;
  border-radius: 4px;

  




`

export const TreinoContainer = styled.div`
  width: 350px;
  height: fit-content;
  padding-bottom: 2.5%;
  margin-bottom: 50px;
 

 background: rgba(38, 87, 215, 0.25);
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    gap: 5%;

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