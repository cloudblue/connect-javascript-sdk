#!/bin/bash
set -e

echo "Commit generated documentation"
git config --global user.email "builds@travis-ci.org"
git config --global user.name "Travis CI"
git config --global push.default simple
echo "Configure remote"
git remote set-url origin https://${CONNECT_GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git > /dev/null 2>&1
echo "Fetching tags from remote"
git fetch --tags
echo "Get version from package.json"
export GIT_TAG=v$(node -p "require('./package.json').version")
echo "Stage generated docs"
git add .
echo "Commit docs"
git commit -m "[ci skip] Documentation generated for release $GIT_TAG"
echo "Push docs commit"
git push origin $TRAVIS_BRANCH
if git tag $GIT_TAG -a -m "Generated tag from TravisCI build" 2>/dev/null; then
    echo "Create tag tag"
    git tag -a $GIT_TAG -m "Generated tag from TravisCI build"
    echo "Tag $GIT_TAG added"
    git push origin $TRAVIS_BRANCH --tags
fi

echo "Done for version $GIT_TAG!"
