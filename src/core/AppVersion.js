import * as appversionData from '../../appversion.json'

export const appversiondata = () => JSON.parse(JSON.stringify(appversionData)).default;
