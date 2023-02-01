import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cards:[
    {
      info: 'Platform',
      image: '/images/card-side7.png',
      title: 'Tao Core',
      subtitle: 'Download our open source assessment platform at no cost today and extend the functionality with your own additions to the source code. ',
    },
    {
      info: 'Platform',
      image: '/images/card-side8.png',
      title: 'Tao Ignite',
      subtitle: 'Hit the ground running with your testing content using TAO’s turn-key solution to support up to 30,000 deliveries. ',
    },
    {
      info: 'Platform',
      image: '/images/card-side9.png',
      title: 'Tao Pro',
      subtitle: 'Our most popular TAO edition offers the same off-the-shelf feature set as TAO Ignite, plus supercharged scalability and dedicated account management.',
    },
    {
      info: 'Platform',
      image: '/images/card-side10.png',
      title: 'Tao Enterprice',
      subtitle: 'Leverage a completely customized, deeply integrated computer-based testing platform and scale your assessment programs to new heights. ',
    }
  ]
}

const SolutionSlice = createSlice({
  name: 'solutions',
  initialState,
  reducers: {
    setSolutions:(state)=>{
      state.cards = initialState.cards
    }
  }
});

export const {setSolutions} = SolutionSlice.actions
export const Solutions = state=>state.solutions.cards
export default SolutionSlice.reducer