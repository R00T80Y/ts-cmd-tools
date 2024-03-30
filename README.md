# What's that?

A starter kit for creating scripts to run in the terminal

## Project Structure

- /src
  - /utils
  - index.ts - Program entry point usually nothing needs to be changed here
  - opts.ts - Here are the settings for [commander.js](https://github.com/tj/commander.js)
  - main.ts - Основной файл вашего скрипта

## Install

```shell
git clone https://github.com/R00T80Y/ts-cmd-tools

pnpm install

pnpm run dev
```

## How to use it?

```shell
# Create the final script file
pnpm run build

# Change the script version in package.json

# Runs ./scripts/deploy.sh which will do:
# 1. Copies the final copy of the script to $HOME/Documents/scripts/
# 2. Will create a link to it in $HOME/bin/$NAME-script
pnpm run deploy

# Running the script(If you need to change the name of the script, you can do it in the "name" field of the package.json file)
ts-cmd-tools-script --version
```

To create an executable file you need to do the following

```shell
# Pkg is used to create executable files
pnpm install -g pkg

# Create an executable file. The file will need to be in ./dist/bin
pnpm run buildexec
```

## Create executable file

```shell
pnpm install -g pkg
```

# Problems

## deploy.sh

### Error: cp: cannot create regular file '$HOME/Documents/scripts/$FILENAME.js': Permission denied

The error occurs when you try to overwrite a previously created script file with the same version

- Modifying the version in package.json
- Deleting a file that was previously created
- Modification of "deploy.sh"

1. Modifying the version in package.json

   - Open package.json
   - Find the line with "version"
   - Update version

2. Deleting a file that was previously created

   - Go to $HOME/Documents/scripts
   - Remove file "$FILENAME" ($FILENAME = name_in_package_json + "-v-" + version_in_package_json + ".js")

3. Modification of "deploy.sh"

   - Open ./deploy.sh
   - Go to line 28(chmod -R 400 $HOME/Documents/scripts/$FILENAME)
   - Comment this line
