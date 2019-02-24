import { ResponsiveValue } from 'styled-system'
import { WithTheme, ThemeMap } from './theme'

export const isObject = (n: any) => typeof n === 'object' && n !== null

type ValueConverter = (value: any) => any
const identity = (value: any) => value

const getValueFromThemeMap = (map: ThemeMap, value: any, convert: ValueConverter = identity) =>
  Object.keys(map).indexOf(value) > -1 ? convert(map[value]) : value

const mapValueFromThemeMap = (
  themeMap: ThemeMap,
  value: ResponsiveValue<any>,
  convert: ValueConverter = identity
) => {
  if (isObject(value)) {
    const mappedValue = {} as ResponsiveValue<any>
    for (const key in value) {
      mappedValue[key] = getValueFromThemeMap(themeMap, value[key], convert)
    }

    return mappedValue
  }
  if (Array.isArray(value)) {
    return value.map(val => getValueFromThemeMap(themeMap, val, convert))
  }
  return getValueFromThemeMap(themeMap, value, convert)
}

export const mapKeysFromThemeMap = <TKeys>(
  themeMap: ThemeMap,
  props: WithTheme<TKeys>,
  keysToMap: string[],
  convert: ValueConverter = identity
): WithTheme<TKeys> => {
  const mappedProps = {} as WithTheme<TKeys>
  for (const key of keysToMap) {
    const propValue = (props as any)[key]
    if (propValue !== undefined) {
      mappedProps[key as keyof WithTheme<TKeys>] = mapValueFromThemeMap(
        themeMap,
        propValue,
        convert
      )
    }
  }

  mappedProps.theme = props.theme
  return mappedProps
}
