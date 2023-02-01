import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {setSolutions, Solutions } from '../../features/Platform Solutions/SolutionSlice'
import DiscriptionCard from './DiscriptionCard'

const PlatformSolutions = () => {
  const dispatch = useDispatch()
  const cards = useSelector(Solutions)
  useEffect(()=>{
    dispatch(setSolutions());   
  }, [])

  const renderCard = cards.map((card, index)=>{
    return(
      <DiscriptionCard card = {card} key = {index} />
    )
  })

  return (
    <Solution className="solutions">
      {renderCard}
    </Solution>
  )
}

export default PlatformSolutions

const Solution = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding:  50px 250px;
  gap: 50px 30px;
`