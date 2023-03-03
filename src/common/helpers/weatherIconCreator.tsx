import { WiCloudy, WiDaySunny, WiDaySunnyOvercast, WiHail, WiSnow } from 'react-icons/all'

const iconStyle = {
  width: '150px',
  height: '150px'
}

export const weatherIconCreator = (main: string) => {
  switch (main) {
    case 'Clear':
      return <WiDaySunny style={iconStyle}/>
    case 'Clouds':
      return <WiCloudy style={iconStyle}/>
    case 'Rain':
      return <WiHail style={iconStyle}/>
    case 'Snow':
      return <WiSnow style={iconStyle}/>
    default:
      return <WiDaySunnyOvercast style={iconStyle}/>
  }
}