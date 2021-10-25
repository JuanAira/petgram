import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;

  ${props => props.fixed && css`
  {
    ${fadeIn({ time: '1.5s' })};
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    left: 0;
    padding: 5px;
    position: fixed;
    top: 0;
    transform: scale(.8);
    z-index: 1;
  }
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
