#!/bin/bash
set -e

echo "Commit generated documentation"
git config --global user.email "builds@travis-ci.org"
git config --global user.name "Travis CI"
git config --global push.default simple
echo "Configure remote"
git remote set-url origin "https://${CONNECT_GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" > /dev/null 2>&1
echo "Get version from package.json"
export GIT_TAG=v$(node -p "require('./package.json').version")
echo "Stage generated docs"
git add ./mddocs
echo "Commit docs"
git commit -m "[ci skip] Documentation generated for release $GIT_TAG"
echo "Push generated documentation and tag"
git tag -a $GIT_TAG -m "Generated tag from TravisCI build"
echo "Tag $GIT_TAG added"
git push origin master && git push origin master --tags
echo "Version $GIT_TAG successfully tagged!"
