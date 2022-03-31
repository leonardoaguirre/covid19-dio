import styled from 'styled-components'
import { CardContent,Typography } from '../../../components/index'

export const LabelStyled = styled(Typography)`
    font-weight: 500;
    font-size: 1.5rem;
`

export const ValueStyled = styled(Typography)`
    font-weight: 400;
    font-size: 2.5rem;
`

export const CardContentStyled = styled(CardContent)`
    border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`

export const CardPanelContentStyled = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 25px;
`

export const ItemStyled = styled.div`
    display: flex;
    margin: 1rem;
    justify-content: space-between;
    min-width: 150px;
`