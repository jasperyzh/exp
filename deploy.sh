#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
# cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
# git checkout -B main
# git add -A
git add .
git commit -m 'deploy github-pages'
git push
git subtree push --prefix dist origin gh-pages

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:jasperyzh/exp.git main:gh-pages

cd -


# https://stackoverflow.com/questions/33172857/how-do-i-force-a-subtree-push-to-overwrite-remote-changes
# git push origin `git subtree split --prefix dist main`:gh-pages --force