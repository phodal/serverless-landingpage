

```
$ yarn add --dev serverless-finch
$ yarn add --dev serverless-domain-manager
```

```

```

```
custom:
  customDomain:
    domainName: landing.wdsm.io
    basePath: ''
    stage: ${self:provider.stage}
    createRoute53Record: true
```

```
sls create_domain
```

```
serverless client deploy
```
