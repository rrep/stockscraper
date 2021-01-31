const axios = require('axios');
const cheerio = require('cheerio');

const BASE_URL = "https://stocktrack.ca/?";
const WM_PREFIX = "s=wm"
const UPC_PREFIX = "upc="

axios.get("https://stocktrack.ca/wm/availability.php?storeId=3056|3659|5789|1052|3644|3738|5833|1177|3162|3091&upc=19173024244&src=upc")
.then((result)=>{
    console.log(result.data);
})