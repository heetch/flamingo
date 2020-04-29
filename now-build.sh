#!/usr/bin/env bash
#
# Zeit (now for github)

set -euo pipefail

umask 077

IFS=$'\n\t'

# prerequisites
yarn install

# build
yarn build:storybook
