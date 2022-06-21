#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist/

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git pull
git add -A
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io
git push  -f git@github.com:gxkai/gxkai.github.io.git main
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -