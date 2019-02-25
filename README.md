# Styled system mapper

A library that allows using style functions from [styled-sytem](https://github.com/jxnblk/styled-system) with values that map to the keys of theme objects instead of array indices.

## Why?

In order to use style property `space` from `styled-system` with custom values, a `space` array should be added to theme. Then the array indices could be used as values for `space` properties on a component:

```
<Box mt={2} pt={[ 0, 1, 2 ]} mb={{ xs: 1, md: 3 }}/>
```

However, it can be difficult to get used to indices for values of spacing and challenging to remember the correct values that have to be applied on different breakpoints. Moreover, `theme` properties are quite often defined as key/values, e.g.:

```
const spacingUnit = 10

const space = {
  xsmall: spacingUnit,
  small: spacingUnit * 2,
  medium: spacingUnit * 4,
  large: spacingUnit * 6,
  xlarge: spacingUnit * 8,
}
```

It might be more intuitive and convenient to define spacing values as an object with key/values and use the actual keys instead of indicies:

```
<Box mt="small" pt={[ "xsmall", "small", "medium" ]} mb={{ xs: "small", md: "large" }}/>
```

And that's what the library does. It exposes utility functions that try to map the values for `space` and `width` properties passed into the component to the custom keys defined in theme before they reach `styled-system`. If no mapping exists, the value is passed as is, which means that all kinds of values supported by `styled-system` can be used.

`Typescript` support includes autocompletion for the keys in the `space` object in theme.

### Usage

Currently supports `space` and `width` props that will be mapped to the keys of the `space` object. The examples below demonstrate usage with `Typescript` and [`emotion`](https://github.com/emotion-js/emotion).

First, create a typed version of `styled` with a theme that will have a `space` object and the types for `space` and `width` props that will be used as component's props:

```
import styled, { CreateStyled } from '@emotion/styled'
import { StyledSpaceProps, StyledWidthProps } from 'styled-system-mapper'

const spacingUnit = 10

const space = {
  xsmall: spacingUnit,
  small: spacingUnit * 2,
  medium: spacingUnit * 4,
  large: spacingUnit * 6,
  xlarge: spacingUnit * 8,
}

const theme = {
  space,
}

export type SpaceProps = StyledSpaceProps<typeof space>
export type WidthProps = StyledWidthProps<typeof space>

export default styled as CreateStyled<typeof theme>

```

Pass the theme object into `ThemeProvider` of a CSS-in -JS library that has theming support:

```
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '.\styled'

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <...>
  </ThemeProvider>
)

```

Create a reusable component that will use the `space` and `width` props:

```
import { BgColorProps, bgColor } from 'styled-system'
import { space, width } from 'styled-system-mapper'

import styled, { SpaceProps, WidthProps } from './styled'

type Props = BgColorProps & SpaceProps & WidthProps

const Box = styled('div')<Props>(
  {
    boxSizing: 'border-box'
  },
  bgColor,
  space,
  width
)

export default Box

```

Any other style props from `styled-system` can combined together with `style` and `width` from `styled-system-mapper`.

Now the component is ready to be used:

```
<Box bgColor="#A4A4A4" p={{ xs: "small", sm: "medium", md: "xlarge" }} mb="medium">
  Look at me!
</Box>
```

## TODO

- mapper for color keys and font sizes,
- tests, tests, tests...
