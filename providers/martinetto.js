fetch("https://www.martinetto.com.ar/properties", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "es,en-US;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "https://www.martinetto.com.ar/properties",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "_method=POST&data%5BSearch%5D%5Btype_property_id%5D=2&data%5BSearch%5D%5Bzp_location_id%5D=1374&data%5BSearch%5D%5Boperation_id%5D=2&data%5BSearch%5D%5Bprice_from%5D=25000&data%5BSearch%5D%5Bprice_to%5D=40000&data%5BSearch%5D%5Bcurrency_id%5D=pesos",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});