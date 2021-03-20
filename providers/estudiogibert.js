fetch("https://sioc-be-test.herokuapp.com/api/dwellings/search", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "es,en-US;q=0.9,en;q=0.8",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWMyODExYzJkZGQ4MDAyMmEyYTNkZCIsImV4dGVybmFsQXV0aG9yaXphdGlvbiI6dHJ1ZSwiaWF0IjoxNTY1Mzg1NDM0LCJzdWIiOiJNYXJ0aW5leiBQcm9waWVkYWRlcyJ9.q93RJO1r3OwbZ8s2Qr_1mfkmaNu9MxEHnPzWyzdHm14",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "http://estudiogibert.com.ar/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "searchParams%5Bpage%5D%5BpageNumber%5D=1&searchParams%5Bpage%5D%5BjustPerPage%5D=true&searchParams%5BagencyDwellings%5D=true&searchParams%5BagencyId%5D=5bca27c62e462f00210a9005&searchParams%5BorderKeyByPrice%5D=cheapest&searchParams%5BpublicationType%5D=Alquiler&searchParams%5Bsubtype%5D=Departamento&searchParams%5Btype%5D=Residencial&searchParams%5Bprice%5D%5Bmin%5D=25000&searchParams%5Bprice%5D%5Bmax%5D=40000&siocTemplate=true",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});