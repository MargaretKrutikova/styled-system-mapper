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

type OnlyStringKeys<T> = Pick<T, Extract<keyof T, string>>

type GenericStyledProps<TStyledProps, TMap> =
  | { [K in keyof OnlyStringKeys<TStyledProps>]?: ResponsiveValue<keyof OnlyStringKeys<TMap>> }
  | { [K in keyof OnlyStringKeys<TStyledProps>]?: TStyledProps[K] }

export type StyledSpaceProps<TSpaceMap = any> = GenericStyledProps<SpaceProps, TSpaceMap>

export type StyledWidthProps<TWidthMap = any> = GenericStyledProps<WidthProps, TWidthMap>

const mapSpace = (props: WithTheme<StyledSpaceProps>): StyledSpaceProps =>
  props.theme && props.theme.space
    ? mapKeysFromThemeMap(props.theme.space, props, SPACE_KEYS, px)
    : props

const mapWidth = (props: WithTheme<StyledWidthProps>): StyledWidthProps =>
  props.theme && props.theme.space
    ? mapKeysFromThemeMap(props.theme.space, props, WIDTH_KEYS, px)
    : props

export const space = (props: StyledSpaceProps) => styledSpace(mapSpace(props))

export const width = (props: StyledWidthProps) => styledWidth(mapWidth(props))

export { StyledTheme }
