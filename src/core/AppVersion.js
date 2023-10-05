//ELanguage V 2.1
import * as appversionData from '../../appversion.json'

export const appversiondata = () => JSON.parse(JSON.stringify(appversionData)).default;
