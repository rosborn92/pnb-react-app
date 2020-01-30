import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledMobileNav = styled.div`
  height: 60px;
  width: 100%;
  background: rgba(226, 232, 238, 0.9);
  /* background: rgba(5, 58, 146, 0.9); */
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
  &.dropdown {
    position: absolute;
    display: none;
    width: max-content;
  }
  button {
    padding: 10px;
    display: block;
    text-align: center;
  }
  a {
    color: #053A92;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    /* border-bottom: 2px solid; */
    /* border-top: 2px solid; */
    display: block;
    text-align: left;
  }

  img {
    width: 60px;
    /* margin-right: auto; */
    padding: 0;
  }
`
export default StyledMobileNav
