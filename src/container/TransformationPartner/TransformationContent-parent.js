import React from 'react'
import TransformationContentOne from '../../components/TransformationContent/TransformationContent-two'
import TransformationContentThree from '../../components/TransformationContent/TransformationContent-three'
import TransformationContentTwo from '../../components/TransformationContent/TransformationContent-two'

const TransformationContentParent = () => {
  return (
    <div>    
        <TransformationContentOne/>
        <TransformationContentTwo/>
        <TransformationContentThree/>
        <TransformationContentFour/>
    </div>
  )
}

export default TransformationContentParent