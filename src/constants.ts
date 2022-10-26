import { Dimensions, Platform } from "react-native";


export const primary = '#50E3C2'
export const tertiary= '#EC0868'
export const secondary = '#ff06f4'
export const red = 'red'
export const gray = '#949494'
export const white = '#ffffff'
export const black = '#17191A'
export const dimGray = '#707070'
export const lightGray = '#D1CDCD'

export const KLMN = Platform.OS === 'ios' ? 'KLMN' : 'KLMN'
export const Dolbak = Platform.OS === 'ios' ? 'TheDolbak' : 'TheDolbak-Brush'
export const Etna = Platform.OS === 'ios' ? 'Etna' : 'etna-free-font'
export const Narrow = 'Narrow'


export const Airbold = Platform.OS === 'ios' ? 'airbnb-bold' : 'airbnb-bold'
export const Airthin = Platform.OS === 'ios' ? 'airbnb-regular' : 'airbnb-regular'
export const Airblack = Platform.OS === 'ios' ? 'airbnb-black' : 'airbnb-black'
export const Airlight = Platform.OS === 'ios' ? 'airbnb-light' : 'airbnb-light'
export const Airmedium = Platform.OS === 'ios' ? 'airbnb-medium': 'airbnb-medium'

export const win = Dimensions.get('window')
export const W = win.width
export const H = win.height

export const Device = {
  // eslint-disable-next-line
  select(variants: any) {
    if (W >= 300 && W <= 314) return variants.mobile300 || {}
    if (W >= 315 && W <= 341) return variants.mobile315 || {}
    if (W >= 342 && W <= 359) return variants.mobile342 || {}
    if (W >= 360 && W <= 374) return variants.mobile360 || {}
    if (W >= 375 && W <= 399) return variants.mobile375 || {}
    if (W >= 400 && W <= 409) return variants.mobile400 || {}
    if (W >= 410 && W <= 414) return variants.mobile410 || {}
    if (W >= 415 && W <= 480) return variants.mobile415 || {}
    if (W >= 481) return variants.mobile481 || {}
  }
}

export const goBack = (navigation: any) => () => navigation.goBack()

export const onScreen = (screen: string, navigation: any, obj?: unknown) => () => {
  navigation.navigate(screen, obj)
}

export const goHome = (navigation: any) => () => navigation.popToTop()()

export const colors = {
  primary: {
    "50": '#fdf2f8',
    "100": '#fce7f3',
    "200": '#fbcfe8',
    "300": '#f9a8d4',
    "400": '#f472b6',
    "500": '#ec4899',
    "600": '#db2777',
    "700": '#be185d',
    "800": '#9d174d',
    "900": '#831843'
  },
  secondary: {
    "50": '#dbf4ff',
    "100": '#addbff',
    "200": '#7cc2ff',
    "300": '#4aa9ff',
    "400": '#1A91ff',
    "500": '#0077e6',
    "600": '#005db4',
    "700": '#004282',
    "800": '#002851',
    "900": '#000e21'
  },
  blue: {
    "50": '#eff6ff',
    "100": '#dbeafe',
    "200": '#bfdbfe',
    "300": '#93c5fd',
    "400": '#60a5fa',
    "500": '#3b82f6',
    "600": '#2563eb',
    "700": '#1d4ed8',
    "800": '#1e40af',
    "900": '#1e3a8a'
  },
  dark: {
    "50": '#18181b',
    "100": '#27272a',
    "200": '#3f3f46',
    "300": '#52525b',
    "400": '#71717a',
    "500": '#a1a1aa',
    "600": '#d4d4d8',
    "700": '#e4e4e7',
    "800": '#f4f4f5',
    "900": '#fafafa',
  },
  gray: {
    "50": '#fafafa',
    "100": '#f4f4f5',
    "200": '#e4e4e7',
    "300": '#d4d4d8',
    "400": '#a1a1aa',
    "500": '#71717a',
    "600": '#52525b',
    "700": '#3f3f46',
    "800": '#27272a',
    "900": '#18181b',
  },
  blueGray: {
    "50": '#f8fafc',
    "100": '#f1f5f9',
    "200": '#e2e8f0',
    "300": "#cbd5e1",
    "400": "#94a3b8",
    "500": "#64748b",
    "600": "#475569",
    "700": '#334155',
    "800": "#1e293b",
    "900": "#0f172a"
  },
  warmGray: {
    "50": '#fafaf9',
    "100": '#f5f5f4',
    "200": '#e7e5e4',
    "300": '#d6d3d1',
    "400": '#a8a29e',
    "500": '#78716c',
    "600": '#57534e',
    "700": '#44403c',
    "800": '#292524',
    900: '#1c2917'
  },
  red: {
    "50":'#FFF0F3',
    "100":'#FFCCD5',
    "200":'#FFB3C1',
    "300": '#FF8FA3',
    "400": '#FF758F',
    "500": '#FF4D6D',
    "600": '#C9184A',
    "700": '#A4133C',
    "800": '#800F2F',
    "900":'#590D22'
  },
  coolGray: {
    "50": '#f9fafb',
    "100": '#f3f4f6',
    "200": '#e5e7eb',
    "300": '#d1d5db',
    "400": '#9ca3af',
    "500": '#6b7280',
    "600": '#4b5563',
    "700": '#374151',
    "800": '#1f2937',
    "900": '#111827',
  },
  light: {
    "50": '#fafaf9',
    "100": '#f5f5f4',
    "200": '#e7e5e4',
    "300": ' #d6d3d1',
    "400": '#a8a29e',
    "500": '#78716c',
    "600": '#57534e',
    "700": '#44403c',
    "800": '#292524',
    "900": '#1c1917'
  },
  rose: {
    "50": '#fff1f2',
    "100": '#ffe4e6',
    "200": '#fecdd3',
    "300": '#fda4af',
    "400": '#fb7185',
    "500": '#f43f5e',
    "600": '#e11d48',
    "700": '#be123c',
    "800": '#9f1239',
    "900": '#881337'
  },
  pink: {
    "500": '#ff1493',
    "600": '#e51284',
    "700": '#cc1075',
    "800": '#b20e66',
    "900": '#990c58'
  },
  success: {
    "50": '#f0fdf4',
    "100": '#dcfce7',
    "200": '#bbf7d0',
    "300": '#86efac',
    "400": '#4ade80',
    "500": '#22c55e',
    "600": '#16a34a',
    "700": '#15803d',
    "800": '#166534',
    "900": '#14532d',
  }
}
