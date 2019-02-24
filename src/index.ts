import {
  space as styledSpace,
  width as styledWidth,
  ResponsiveValue,
  SpaceProps,
  WidthProps,
  px
} from 'styled-system'

import { WithTheme, StyledTheme } from './theme'
import { mapKeysFromThemeMap } from './mapper'
import { SPACE_KEYS, WIDTH_KEYS } from './keys'

type GenericStyledProps<TStyledProps, TMap> =
  | { [K in keyof TStyledProps]: ResponsiveValue<keyof TMap> }
  | { [K in keyof TStyledProps]?: TStyledProps[K] }

export type StyledSpaceProps<TSpaceMap = any> = GenericStyledProps<SpaceProps, TSpaceMap>

export type StyledWidthProps<TWidthMap = any> = GenericStyledProps<WidthProps, TWidthMap>

const mapSpace = (props: WithTheme<StyledSpaceProps>): StyledSpaceProps => {
  const test = props.theme.space
    ? mapKeysFromThemeMap(props.theme.space, props, SPACE_KEYS, px)
    : props

  return test
}

const mapWidth = (props: WithTheme<StyledWidthProps>): StyledWidthProps =>
  props.theme.space ? mapKeysFromThemeMap(props.theme.space, props, WIDTH_KEYS, px) : props

export const space = (props: WithTheme<StyledSpaceProps<any>>) => styledSpace(mapSpace(props))

export const width = (props: WithTheme<StyledWidthProps>) => styledWidth(mapWidth(props))

export { StyledTheme }
