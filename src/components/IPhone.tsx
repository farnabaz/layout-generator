import styled from 'styled-components'

const IPhone = styled.div`
    width: 112px;
    height: 200px;
    position: relative;
    border: 5px solid #333;
    border-width: 35px 7px 40px;
    border-radius: 15px;
    margin: 5px;
    float: left;
    box-shadow: 0 0 2px rgb(138, 138, 138);

  &:after {
    content: " ";
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 25px;
    background: rgba(200, 200, 200, 0.15);
    box-shadow: 0 0 3px rgba(0, 0, 0) inset;
    border-radius: 99em;
  }
  &:before {
    content: " ";
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 5px;
    background: rgba(200, 200, 200, 0.15);
    box-shadow: 0 0 3px rgba(0, 0, 0) inset;
    border-radius: 99em;
  }
`

export default IPhone;