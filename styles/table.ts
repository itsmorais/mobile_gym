import styled from "styled-components";

export const TableWrapper = styled.div`  

table tr.LinhaTabela:hover {
    background-color: yellow !important;
  
    }

      /* Extra specificity */
  table tbody tr.LinhaTabela:hover {
    background-color: yellow !important;
  }
`