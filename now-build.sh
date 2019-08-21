#!/usr/bin/env bash
#
# Zeit (now for github)

set -euo pipefail

umask 077

IFS=$'\n\t'

# prerequisites
yarn --cwd packages/css install
yarn --cwd packages/react install

# build
yarn --cwd packages/react run build:storybook
