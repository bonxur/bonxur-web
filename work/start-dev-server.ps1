$ErrorActionPreference = "Stop"

Set-Location "C:\Users\cacha\Documents\Codex\2026-06-10\crea-una-web-para-bonxur-con"

$node = "C:\Users\cacha\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$npm = "C:\Users\cacha\Documents\Codex\2026-06-10\crea-una-web-para-bonxur-con\work\npm\package\bin\npm-cli.js"
$env:Path = "$(Split-Path $node);$env:Path"

& $node $npm run dev
