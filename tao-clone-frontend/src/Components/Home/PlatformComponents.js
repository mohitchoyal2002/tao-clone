import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Fade } from 'react-reveal';
import styled from 'styled-components'
import { setComponents, Solutions } from '../../features/Platform Components/ComponentsSlice';
import DiscriptionCard from './DiscriptionCard';

const PlatformComponents = () => {

  const dispatch = useDispatch();
  const cards = useSelector(Solutions)

  useEffect(()=>{
    dispatch(setComponents())
  },[])
  
  const renderCard = cards.map((card, index)=>{
    return(
      <DiscriptionCard card = {card} key = {index}/>
    )
  })

  return (
    <Components className="components main">
      {renderCard}
    </Components>
  )
}

export default PlatformComponents

const Components = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding:  50px 250px;
  gap: 50px 30px;
`