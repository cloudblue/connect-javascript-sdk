#!/bin/bash
set -e
if [[ "$TRAVIS_JOB_NUMBER" =~ .*\.1$ ]]; then
    echo "Commit generated documentation"
    git config --global user.email "builds@travis-ci.org"
    git config --global user.name "Travis CI"
    git config --global push.default simple
    echo "Checkout current branch $TRAVIS_BRANCH"
    git checkout $TRAVIS_BRANCH
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
    CHECK_TAG=$(git tag -l "$GIT_TAG")
    if [ "$CHECK_TAG" != "$GIT_TAG" ]; then
        echo "Create tag $GIT_TAG"
        git tag -a $GIT_TAG -m "Generated tag from TravisCI build"
        echo "Tag $GIT_TAG added"
        git push origin $TRAVIS_BRANCH --tags
    else
        echo "Tag $GIT_TAG already exists!"
    fi
    echo "Done for version $GIT_TAG!"
else
    echo "Do nothing due to job number > .1 ($TRAVIS_JOB_NUMBER)"
fi