// Created by Anderson Mancini @2024
// Check documentation on how to use it at https://codesandbox.io/p/sandbox/meshtransitionmaterialfree-l7pzn7

import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { easing } from 'maath'

export default function TransitionMaterialFree(props) {
  const materialRef = useRef()

  useFrame((_, delta) =>
    easing.dampC(
      materialRef.current.color,
      props.transitionColor,
      props.transitionTime ? props.transitionTime : 0.25,
      delta
    )
  )

  return <meshPhysicalMaterial ref={materialRef} {...props} />
}
