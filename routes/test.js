var request = require("request");


var uploadfunction = 

module.exports = {
    upload: function(token,filename,data,cb){
        var options = { method: 'PUT',
        url: 'https://graph.microsoft.com/v1.0/me/drive/root:/UPLOAD/'+filename+':/content',
        headers: {
        'authorization': 'bearer '+token,
        'content-type': 'text/plain'},
        body: data 
        };
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
      
        console.log(body);
        cb(null,body)
      });
    }

}


