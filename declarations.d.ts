// src/declarations.d.ts 또는 프로젝트 루트에
declare module '*.svg' {
  import * as React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
