#!/bin/bash
set -e

echo "Commit generated documentation"
git config --global user.email "builds@travis-ci.org"
git config --global user.name "Travis CI"
export GIT_TAG=v$(node -p "require('./package.json').version")
git commit -am "Documentation generated for release $GIT_TAG"
echo "Push generated documentation"
git push --quiet https://$CONNECT_GITHUB_TOKEN@github.com/cloudblue/connect-fulfillment-zapier-app > /dev/null 2>&1
git tag -a $GIT_TAG -m "Generated tag from TravisCI build"
echo "Push tag $GIT_TAG"
git push --quiet --tags https://$CONNECT_GITHUB_TOKEN@github.com/cloudblue/connect-fulfillment-zapier-app > /dev/null 2>&1
echo "Version $GIT_TAG successfully tagged!"