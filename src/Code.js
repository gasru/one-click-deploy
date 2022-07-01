function deployA_project() {
  var id, OAuthToken,options,payload,rtrn,url;

  id = ScriptApp.getScriptId();//Get the project ID of this script project
  Logger.log('id: ' + id)

  url = 'https://script.googleapis.com/v1/projects/' + id + '/deployments';//For REST

  OAuthToken = ScriptApp.getOAuthToken();

  payload = {
    "versionNumber": 1,
    "manifestFileName": "appsscript",
    "description": "autodeploy"
  }

  options = {
    "method" : "POST",
    "muteHttpExceptions": true,
    "headers": {
      'Authorization': 'Bearer ' +  OAuthToken
    },
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };

  rtrn = UrlFetchApp.fetch(url,options);

  Logger.log('rtrn: ' + rtrn)


}