var fs = require('fs');
var request = require("request")
fs.readFile('/Users/Karthi/Desktop/Data Structures and Algorithms with JavaScript - Free Pdf Book.pdf',function(err,data){
    requestHandle(data,'','',function(err,data){
        console.log(err,data)
    })
})


function requestHandle(data,contentRange,contentLength,cb){
    // console.log(range)
    contentRange = contentRange ? 'bytes '+contentRange+'/9087323' : 'bytes 0-327679/9087323'
    contentLength = contentLength ? contentLength : 320 * 1024;
    console.log(contentRange,"-----",contentLength)

    var arrByte = Uint8Array.from(data)

    var out = new Buffer(contentLength)

        var test = contentRange.split(' ')[1].split('-');
        
        for(var i=test[0];i<=test[1];i++){
            out.write(arrByte[i].toString())
        }

    var options = {
        method: 'PUT',
        url: 'https://api.onedrive.com/rup/af4fd6ae8ab799d9/eyJSZXNvdXJjZUlEIjoiQUY0RkQ2QUU4QUI3OTlEOSExMDEiLCJSZWxhdGlvbnNoaXBOYW1lIjoiRGF0YSBTdHJ1Y3R1cmVzIGFuZCBBbGdvcml0aG1zIHdpdGggSmF2YVNjcmlwdCAtIEZyZWUgUGRmIEJvb2sucGRmIn0/4mOEnaWxAs4JfTM4xbVEJrHbMnnTPoftRK29B9fWWApj6R9ktMY89yPAq0tgEl4-j1zbxqq4FC-7R0W0_kTWznWovQqYsD_8sBhvfdiNRJtP0/eyJOYW1lIjoiRGF0YSBTdHJ1Y3R1cmVzIGFuZCBBbGdvcml0aG1zIHdpdGggSmF2YVNjcmlwdCAtIEZyZWUgUGRmIEJvb2sucGRmIn0/4wJa0S2s0p-96Lifblo3PLyajiBOBwl2eZxNwD9KJA15-E3V5Z-nM4nZ54-KUlEMNWgQeOpyfiAK1aOdTPDCPp1oQSWWV7KFV2-U_nvzyGo0cVEihdNTVipb3MMCF12nFZQwEQyoMnYDKmgCZFkFtobrX-uRrh_Quyb97YoOq57WR6xbJo1d2W4gz5CwedkhK1TtFh3Dx03gB-U3zjGvvl8bhC5_tn4CNXddi3GK930962vUklYPzXRQlmE5R912bdmDNcBYtlsScUoR53fUsNgy2Xl7yK4io8R17akUMjOiOhe9qjSdqa1YTUoVXOYwp6k32rd-S2x2LCpta1LbbSOK88Cm6Qv6FwDH_tvuKnyRNY85GWpuPRZjLVYDKJRhEMUCSiIV5RPqpoRqLZ72Hc5N4fQVSjtRSDMkcNsDbYLGAIr5Irjgyo2Nxv9lsf78IVYAHltna-wr6WpzQLY3eH4613PEJxL5_FGsG95kzrh0MGGBKdUjyW8iMMmDzWFH0PNzihWpEJngOA7J2V6hSNpTYC8hX_uwZonvPRMutuNgd-N9LOEq81gf8pfoEguACg',
        headers: {
        'authorization': 'bearer EwBwA8l6BAAURSN/FHlDW5xN74t6GzbtsBBeBUYAARAiMRZgORJHWY44GmvFc04qnvYrkSx/v11Q274NuKnuJjbP4zNF9hTABFt8hlWURfW6d9gy55ttjtbPO/Cit0Y6RhO653zL2Xlv1Xbz9VZvEoCxjpsWI3ifecRWRSX5M60DKTocGQsUcGIdMvbq3fVlmn7Xsvc9tk5VW/MyhGlS2p+yiDpj/00drdFjRgtKuDGOyuFjGV2M6Txt8R5UOfMFGs1ppkPBO1HR//0eE5HQACNV3HW5r3EfVy/iIBv2kSFYawbCILtAP2MWg+Frs1kQP0QRLNQkcy3YKQJPDeT8BwBjahwIj3PiWbDb6+gnQcZmI3/BJRJfe4VZ4Y7YTBcDZgAACD8x3k2rY/8UQAKbGGIVbwu0GY9MWGnFTmwNuqWDWuyNm6TC6vfmbJg+WyH3Kz3sXKFvvXDy1nVgrebRw6KD8zTzGlszeb5YZmGCLED7hqFz0BbA3Pz6rjOaFF9DD6qixKe2AtcyXPAy5pn4yuzL1FvdlR5gTuU5FK5s3XInmYa02+tK83XuJQcS29OxKjv495vjflMKddSlapbCoBcFB5cyjPAzX6kvhfVEGXWFxVP20S04/8ovHn80E8MqCrVqArSpc1Dq69oQ3RYO9l/NHiqT3O9eIGxyLos/B4aZHUk9ixryRPKgncXDz2TpuGX8nmdYPOlQWKh4doT9yJKVXsREFM8UZjUIglEURL1JGp8ekSoKd7jj/V1QicYgf+3CTgNsz4VCWh4BEW0Bg4gejni5TUbSn+zyfWPbFsMVSscFUmd75C5uHHBsznb+3F21Unm+yWMqU6pvZ66XBDxvDeEpgcnS9AoIzlUJRykfh13jEPb8h93gFAMN5MkC9+jG2K8IIaJEyYLeeF1jLeR/zltoERMevcARkCsD0fonZ5VAi2qPB1x4y+z8aVfCP/2KuFWzODoQQ63hw2HkSC0sTDE4FvmIrus7+XmDr0Y0EFqqRWxlG92Ib0lbFKXSSbBVfi//K27HcF/1SVFiRZpx4t+sJD6fEC8b07bORMUNL3A8FMk/UbUJjFoqJ8Df2tLNEn9okn/o4TwMubTZE+I0swgZlywrPv0J8RYKhDUbzVSXfghFagGgQq0UvRy+RIz32aKJFlKOuqxd+KeDAg==',
        'Content-Length': contentLength,
        'Content-Range': contentRange,
        // 'Connection': 'keep-alive'
        },
        body:out
    };

    request(options, function (error, response, body) {
        if (error){
            console.log("eeeeeeeeeeeeeeeeeeeeeeeeee",error)
            cb(error)
        // cb(error)
        }else{
            console.log(body)
            body = JSON.parse(body)
            if(body.nextExpectedRanges && body.nextExpectedRanges[0]){
                let range = body.nextExpectedRanges[0].split('-')
                let cc = range[1]-range[0] + 1;
                let crange = body.nextExpectedRanges[0];

                requestHandle(data,crange,cc,function(err,data){
                    if(err){
                        console.log(err)
                        cb(err)
                    }else{
                        console.log(data)
                        cb(null,data)
                    }
                })
            }else{
                console.log("------here")
                cb(null,body)
            }
            
                
        }
    })
}