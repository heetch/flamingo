#!/usr/bin/env bash
#
# Zeit (now for github)

set -euo pipefail

umask 077

IFS=$'\n\t'

# prerequisites
yarn setup

# build
yarn --cwd packages/react run build:storybook
