#!/bin/env bash
yarn doc
git checkout publish-pages
mv -f doc/* ./
git add .
git commit -m "update"
git push origin publish-pages
git checkout master