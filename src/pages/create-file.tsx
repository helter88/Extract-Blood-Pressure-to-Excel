import React from 'react'
import styled from 'styled-components'
import CenterBox from '../components/center-box'
import FileBox from '../components/file-box'
import InputBox from '../components/input-box'

const CreateFileContainer = styled.div`
    margin-top: 10rem;
    display: flex;
    justify-content: space-between;
    padding: 0 25rem;
`

const CreateFile = () => {
  return (
    <CreateFileContainer>
      <InputBox />
      <CenterBox/>
      <FileBox />
    </CreateFileContainer>
  )
}

export default CreateFile
