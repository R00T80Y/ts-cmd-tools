#!/bin/bash

set -e

# Name из ./package.json
NAME=$(cat package.json \
  | grep name \
  | head -1 \
  | awk -F ":" '{ print $2 }' \
  | sed 's/[", ]//g')

# Version из ./package.json
VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F ":" '{ print $2 }' \
  | sed 's/[", ]//g')

FILENAME=$NAME-v-$VERSION.js

# Копирует index.js в executable.js и добавляет shebang
sed '1s;^;#!/usr/bin/env node\n\n;' ./dist/index.js > ./dist/executable.js

# Копирует executable.js в $HOME/Documents/scripts/
mkdir -p $HOME/Documents/scripts/ && cp -i ./dist/executable.js $HOME/Documents/scripts/$FILENAME

# Устанавливаем права только для просмотра
chmod -R 400 $HOME/Documents/scripts/$FILENAME

# Устанавливает права на выполнение файла
chmod +x $HOME/Documents/scripts/$FILENAME

# Создает ссылку на файл $HOME/bin/$NAME-script
ln -sf $HOME/Documents/scripts/$FILENAME $HOME/bin/$NAME-script

# Информация для запуска
printf "Script is end: %s\n" "$0";

printf "File created: %s\n" "$HOME/Documents/scripts/$FILENAME";

printf 'Try run in terminal: "%s-script"\n' "$NAME";
