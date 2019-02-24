import {
  alignSelf,
  AlignSelfProps,
  flex,
  FlexProps,
  fontSize,
  FontSizeProps,
  order,
  OrderProps,
  color,
  BgColorProps
} from 'styled-system'
import { space, width } from 'styled-system-mapper'
import styled, { SpaceProps, WidthProps } from './styled'

type Props = FontSizeProps &
  FlexProps &
  OrderProps &
  AlignSelfProps &
  SpaceProps &
  WidthProps &
  BgColorProps

const Box = styled('div')<Props>(
  {
    boxSizing: 'border-box'
  },
  color,
  space,
  width,
  fontSize,
  flex,
  order,
  alignSelf
)

export type BoxProps = Props
export default Box
