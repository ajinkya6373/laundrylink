import React from 'react'
import { TagWrapper } from './specialityTag'

export default function SpecialityTag({img, text,small}) {
  return (
    <TagWrapper small={small}>
    {img&&<img src={`/assets/Icons/${img}`} alt="Icon" />}
    {text}
  </TagWrapper>
  )
}
