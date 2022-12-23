import React, { PureComponent } from 'react'

type Props = {}

class About extends PureComponent<Props> {
  render() {
    return (
      <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercaset tracking-[20px] text-gray-500 text-2xl'>ABOUT</h3>
        
        </div>
    )
  }
}

export default About