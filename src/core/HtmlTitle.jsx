import { appversiondata } from "./AppVersion";
//Force App Title
function HtmlTitle() {
  const appVData = appversiondata()
  document.title = appVData.product_name;
}

export default HtmlTitle
