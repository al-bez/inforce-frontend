export interface PaletteColorOptions {
  light: string
  main: string
}

// for grey options
export interface ColorOptions {
  0: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  1000: string
  1100: string
  1200: string
  1300: string
}

export interface PalleteTextOptions {
  primary: string
  secondary: string
  disabled: string
}

export interface PaletteOptions {
  primary: PaletteColorOptions
  secondary: PaletteColorOptions
  text: PalleteTextOptions
  grey: ColorOptions | { [key: string]: string }
  success: PaletteColorOptions
  error: PaletteColorOptions
  warning: PaletteColorOptions
  info: PaletteColorOptions
}

export interface PaletteOptionsIndexed {
  [key: string]: PaletteColorOptions
}

const Palette: PaletteOptions = {
  primary: {
    main: '#DF263E',
    light: '#fff',
  },
  secondary: {
    main: '#fff',
    light: '#DF263E',
  },
  text: {
    primary: '#161616',
    secondary: '#fff',
    disabled: '#000',
  },
  grey: {
    0: '#ECECEC',
    100: '#F1F8FA',
    200: '#F4F6F8',
    300: '#F2F2F2', // slider card background
    400: '#B1C1CE', // scrollbar
    500: '#8E9EAE', // base light
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161616', // border color
    1000: '#BDC3C8',
    1100: '#EAEAEA',
    1200: '#DBDBDB',
    1300: '#121E28',
  },
  success: {
    main: '#1cbd2c',
    light: '#4caf50',
  },
  error: {
    main: '#DF263E',
    light: '#ef5350',
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
  },
}

export default Palette
