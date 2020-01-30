import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavBar = styled.div`
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  width: 100%;
  background: rgba(226, 232, 238, 0.9);
  /* background: rgba(5, 58, 146, 0.9); */
  margin: 5px 0 0 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-align-items: center;
  justify-content: flex-end;

  a {
    padding: 10px 10px;
    color: #053A92;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    border-bottom: 2px solid;
    border-top: 2px solid;
    display: block;
    text-align: center;
  }

  a:hover {
    background-color: #053A92;
    color: white;
    text-shadow: 0px 0px 3px #BECCDA;
  }

  img {
    width: 60px;
    margin-right: auto;
    padding: 0 10px;
  }
`
export default StyledNavBar
