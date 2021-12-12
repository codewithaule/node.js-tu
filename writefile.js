const {readFileSync,writeFileSync} = require('fs')

writeFileSync(
    './content/result-sync.txt','here is the result:${first},${second}',
    {flag:'a'}
)