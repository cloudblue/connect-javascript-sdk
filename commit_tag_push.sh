#!/bin/bash
set -e

echo "Commit generated documentation"
git config --global user.email "builds@travis-ci.org"
git config --global user.name "Travis CI"
git config --global push.default simple
git remote add origin https://${CONNECT_GITHUB_TOKEN}@github.com/cloudblue/${TRAVIS_REPO_SLUG}.git > /dev/null 2>&1
export GIT_TAG=v$(node -p "require('./package.json').version")
git add ./mddocs
git commit -m "Documentation generated for release $GIT_TAG"
echo "Push generated documentation and tag"
git tag -a $GIT_TAG -m "Generated tag from TravisCI build"
git push origin master && git push origin master --tags
echo "Version $GIT_TAG successfully tagged!"
