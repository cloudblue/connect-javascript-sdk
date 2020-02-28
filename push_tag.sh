#!/bin/bash
set -e

git config --global user.email "builds@travis-ci.org"
git config --global user.name "Travis CI"
export GIT_TAG=v$(node -p "require('./package.json').version")
git tag -a $GIT_TAG -m "Generated tag from TravisCI build"
git push --quiet --tags https://$CONNECT_GITHUB_TOKEN@github.com/cloudblue/connect-fulfillment-zapier-app > /dev/null 2>&1

echo "Version $GIT_TAG successfully tagged!"