import { css, FlattenSimpleInterpolation } from 'styled-components'

export const BASE_FONT_SIZE = 16

// these sizes are arbitrary and you can set them to whatever you wish
export const breakpoints = Object.freeze({
  XL: 1440,
  L: 1280,
  M: 1024,
  S: 768,
  XS: 320
})

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
export const emBreakpoints = Object.freeze(
  Object.keys(breakpoints).reduce(
    (newEmBreakpoints, breakPoint) => ({
      ...newEmBreakpoints,
      [breakPoint as keyof typeof breakpoints]:
        breakpoints[breakPoint as keyof typeof breakpoints] / BASE_FONT_SIZE
    }),
    {} as typeof breakpoints
  )
)

type IInput = any
type IBreakpoints = keyof typeof breakpoints
type IBreakpointFunctions = {
  [key in IBreakpoints]: (...args: IInput) => FlattenSimpleInterpolation
}
type IPxFunction = (
  px: number
) => (...args: IInput) => FlattenSimpleInterpolation

interface IMediaQueries {
  from: {
    px: IPxFunction
    breakpoint: IBreakpointFunctions
  }
  to: {
    px: IPxFunction
    breakpoint: IBreakpointFunctions
  }
}

// iterate through the sizes and create a media template
const fromBreakpoint = Object.freeze(
  Object.keys(breakpoints).reduce(
    (mqObject, breakPoint) => ({
      ...mqObject,
      [breakPoint as keyof typeof breakpoints]: (...args: IInput) => {
        const [first, ...rest] = args
        return css`
          @media (min-width: ${emBreakpoints[
              breakPoint as keyof typeof breakpoints
            ]}em) {
            ${css(first, ...rest)}
          }
        `
      }
    }),
    {} as IBreakpointFunctions
  )
)

const fromPx: IPxFunction = px => (...args) => {
  const [first, ...rest] = args
  return css`
    @media (min-width: ${px}px) {
      ${css(first, ...rest)}
    }
  `
}

const toBreakpoint = Object.freeze(
  Object.keys(breakpoints).reduce(
    (mqObject, breakPoint) => ({
      ...mqObject,
      [breakPoint as keyof typeof breakpoints]: (...args: IInput) => {
        const [first, ...rest] = args
        return css`
          @media (max-width: ${emBreakpoints[
              breakPoint as keyof typeof breakpoints
            ] -
              1 / BASE_FONT_SIZE}em) {
            ${css(first, ...rest)}
          }
        `
      }
    }),
    {} as IBreakpointFunctions
  )
)

const toPx: IPxFunction = px => (...args) => {
  const [first, ...rest] = args
  return css`
    @media (max-width: ${px}px) {
      ${css(first, ...rest)}
    }
  `
}

const mediaQueries: IMediaQueries = {
  from: {
    px: fromPx,
    breakpoint: fromBreakpoint
  },
  to: {
    px: toPx,
    breakpoint: toBreakpoint
  }
}

const mq = mediaQueries
export { mq }
export default mediaQueries
