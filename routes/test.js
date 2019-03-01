var request = require("request");
module.exports = {
  // upload: function (token, filename, data, cb) {
  //   var options = {
  //     method: 'PUT',
  //     url: 'https://graph.microsoft.com/v1.0/me/drive/root:/UPLOAD/' + filename + ':/content',
  //     headers: {
  //       'authorization': 'bearer ' + token,
  //       'content-type': 'text/plain'
  //     },
  //     body: data
  //   };

  //   request(options, function (error, response, body) {
  //     if (error){
  //       cb(error)
  //     }else{

  //       if(response.statusCode === 413){
  //         cb("errocode:"+response.statusCode+"file size exceed")
  //       }else{
  //         console.log(body,"\n",response.statusCode);
  //         cb(null, body)
  //       }
  //     }

  //   });
  // }
  upload: function (token, filename, data, cb) {
    var options = {
      method: 'POST',
      url: 'https://graph.microsoft.com/v1.0/me/drive/root:/LargeFiles:/createUploadSession',
      headers: {
        'authorization': 'bearer ' + token,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        "@microsoft.graph.conflictBehavior": "rename | fail | replace",
        "description": "description",
        "fileSystemInfo": { "@odata.type": "microsoft.graph.fileSystemInfo" },
        "name": filename
      })
    };

    request(options, function (error, response, body) {
      if (error){
        console.log(response.statusCode,"----\n",error)
        cb(error)
      }else{
        console.log(typeof body,"\n",body)
        cb(null,body);
      }

    });
  }
}