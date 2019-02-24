import { Theme } from "styled-system"

export type Omit<T, U> = Pick<T, Exclude<keyof T, U>>

export interface ThemeMap {
  [k: string]: number | string
}

export interface Breakpoints extends ThemeMap {}

export interface Space extends ThemeMap {}

export interface StyledTheme extends Omit<Theme, "space" | "breakpoints"> {
  breakpoints?: Breakpoints
  space?: Space
}

export type WithTheme<
  TProps,
  TTheme extends StyledTheme = StyledTheme
> = TProps & { theme: TTheme }
