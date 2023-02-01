import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cards:[
    {
      info: 'Component',
      image: '/images/card-side1.webp',
      title: 'Authoring',
      subtitle: 'Empower assessment authors with easy tools, 21st-century item banking, and smart workflows that raise the standard of testing content.',
    },
    {
      info: 'Component',
      image: '/images/card-side2.webp',
      title: 'Roasting & Delivery',
      subtitle: 'Manage and deliver assessments to candidates via test-centers, groups or the LTI standard for a secure, integrated testing experience.',
    },
    {
      info: 'Component',
      image: '/images/card-side3.webp',
      title: 'Reporting',
      subtitle: 'Leverage actionable testing data to drive teaching improvements, enable personalized assessment, and promote better learning outcomes. ',
    },
    {
      info: 'Add on',
      image: '/images/card-side4.webp',
      title: 'Tao Advance',
      subtitle: 'Bring your assessment delivery to the next level with our cloud-native, 100% accessible test-taker interface designed to meet learners’ diverse needs. ',
    },
    {
      info: 'Add on',
      image: '/images/card-side5.png',
      title: 'Tao Grader',
      subtitle: 'In addition to TAO’s automatic scoring capabilities, TAO Grader enables easy and collaborative open response marking to help improve the reliability of test scores.  ',
    },
    {
      info: 'Add on',
      image: '/images/card-side6.png',
      title: 'Tao Insights',
      subtitle: 'Access dynamic data for on-demand analysis via our API to uncover item trends and pinpoint opportunities to optimize learning.',
    }
  ]
}

const ComponentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    setComponents: (state)=>{
      state.cards = initialState.cards
    }
  }
});

export const {setComponents} = ComponentsSlice.actions

export const Solutions = state=>state.components.cards;

export default ComponentsSlice.reducer