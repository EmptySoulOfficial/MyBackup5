import { appversiondata } from "./appversion";
//Force App Title
function HtmlTitle() {
  const appVData = appversiondata()
  document.title = appVData.product_name;
}

export default HtmlTitle
