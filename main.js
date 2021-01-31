const axios = require('axios');

const BASE_URL = "https://stocktrack.ca/";
const WM_PREFIX = "wm/";
const API_PAGE = "availability.php?store";
const WM_DIEPPE_STORE = "Id=3056|";
const WM_MONCTON_STORE = "3659";
const UPC_PREFFIX = "&upc=";
const UPC_SUFFIX = "&src=upc";

const TENLBUPC = "19173024244";
const TWOPOINTFIVEUPC = "19173024242";
const TWENTYFIVEUPC = "19173024245";

const TENREQUESTURL = BASE_URL + WM_PREFIX + API_PAGE + WM_DIEPPE_STORE + WM_MONCTON_STORE + UPC_PREFFIX + TENLBUPC + UPC_SUFFIX;
const TWOPOINTFIVEREQUESTURL = BASE_URL + WM_PREFIX + API_PAGE + WM_DIEPPE_STORE + WM_MONCTON_STORE + UPC_PREFFIX + TWOPOINTFIVEUPC + UPC_SUFFIX;
const TWENTYFIVEREQUESTURL = BASE_URL + WM_PREFIX + API_PAGE + WM_DIEPPE_STORE + WM_MONCTON_STORE + UPC_PREFFIX + TWENTYFIVEUPC + UPC_SUFFIX;

const CT_PREFIX = "ct/";
const CTSTORES = "=0063,0691,0249,0647"
const SKU_PREFIX = "&sku="
const CTPROD_SUFFIX = "&src=prod"
const CANTIRETENLBUPC = "0840042"
const CTTENLBURL = BASE_URL +  CT_PREFIX + API_PAGE + CTSTORES + SKU_PREFIX + CANTIRETENLBUPC + CTPROD_SUFFIX;

/*
//Walmart 2.5lb
axios.get(TWOPOINTFIVEREQUESTURL)
.then((result)=>{
    console.log(result.data);
})

//walmart 10lb
axios.get(TENREQUESTURL)
.then((result)=>{
    console.log(result.data);
})

//walmart 25lb
axios.get(TWENTYFIVEREQUESTURL)
.then((result)=>{
    console.log(result.data);
})

//canadiantire 10lb
axios.get(CTTENLBURL)
.then((result)=>{
    console.log(result.data);
})
*/
//canadiantire 10lb
console.log(CTTENLBURL);