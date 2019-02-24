import styled, { CreateStyled } from '@emotion/styled'
import { StyledTheme, StyledSpaceProps, StyledWidthProps } from 'styled-system-mapper'

export type Theme = StyledTheme

const spacingUnit = 10

export const space = {
  xxsmall: spacingUnit / 2,
  xsmall: spacingUnit,
  small: spacingUnit * 2,
  smedium: spacingUnit * 3,
  medium: spacingUnit * 4,
  large: spacingUnit * 6,
  xlarge: spacingUnit * 8,
  xxlarge: spacingUnit * 10
}

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

export const theme: Theme = {
  space,
  breakpoints
}

export type SpaceProps = StyledSpaceProps<typeof space>
export type WidthProps = StyledWidthProps<typeof space>

export default styled as CreateStyled<Theme>
