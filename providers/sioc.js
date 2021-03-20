fetch("https://sioc-be-test.herokuapp.com/api/dwellings/search", {
    "headers": {
      "accept-language": "es,en-US;q=0.9,en;q=0.8",
      "authorization": "Bearer null",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-ch-ua": "Google Chrome",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    "referrer": "https://www.sioc.com.ar/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{'searchParams':{'price':{'min':'${min_price}','max':'${max_price}'},'publicationType':'Alquiler','agencyDwellings':false,'currency':'pesos','selectedLocations':[{'latitude':-34.9204948,'altitude':-57.95356570000001,'city':'La Plata','state':'Provincia de Buenos Aires','country':'Argentina','formatted_address':'La Plata, Provincia de Buenos Aires, Argentina'}],'orderKeyByPrice':'cheapest','orderKeyByDate':null,'searchKeyword':'','address':[{'city':'La Plata','state':'Provincia de Buenos Aires','country':'Argentina'}],'subtype':['Departamento'],'spaces':{},'features':{}, 'services':{}, 'legal':{},'page':{'perPage':30,'pageNumber':1}}}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });