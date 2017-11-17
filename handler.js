'use strict';

const create = require('./create.js');

const base_page = `<html lang="zh-cmn-Hans">
  <head>
    <title>Growth Studio Landing Page Test</title>
    <meta http-equiv="content-language" content="zh-CN"/>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Phodal, URL Shorter, shorter">
    <meta name="description" content="Landing Page">
    <link href="https://cdn.bootcss.com/pure/1.0.0/pure-nr-min.css" rel="stylesheet">
  </head>
  <body class="pure-g">
    <div class="pure-u-1-5">
    </div>
    <div class="pure-u-3-5">
      <div style="width: 300px; margin:100px auto;">
        <h2><a href="https://www.phodal.com/">欢迎来到 Growth Studio</h1>
        <form method="POST" action="/todos" class="pure-form">
          <input type="text" placeholder="Email id="link" name="link" size="40" autofocus />
          <br/>
          <br/>
          <input type="submit" value="生成" class="pure-button pure-button-primary" />
        </form>
      </div>
    </div>
  </body>
</html>`

module.exports.create = (event, context, callback) => {
  create(event, (error, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};


module.exports.home = (event, context, callback) => {
  callback(
    null,
    {
      statusCode: 200,
      body: base_page,
      headers: {'Content-Type': 'text/html'},
    }
  );
};
