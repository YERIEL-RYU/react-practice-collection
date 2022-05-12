import { Paper } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  width: 80%;
  height: 80%;
`;