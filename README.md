# What's that?

A starter kit for creating scripts to run in the terminal

## Install

```shell
git clone https://github.com/R00T80Y/ts-cmd-tools my-script && cd my-script

pnpm install

pnpm run dev
```

## Project Structure

- /src
  - /utils
    - execute.ts - Wrapper for running terminal commands
  - index.ts - Program entry point usually nothing needs to be changed here
  - opts.ts - Here are the settings for [commander.js](https://github.com/tj/commander.js)
  - main.ts - The main file of your script

## How to use it?

### To create a js file and place it in the system

```shell
# Create the final script file
pnpm run build

# Change the script version in package.json
npm pkg set version=0.0.2

# Runs ./scripts/deploy.sh which will do:
# 1. Copies the final copy of the script to $HOME/Documents/scripts/
# 2. Will create a link to it in $HOME/bin/$NAME-script
pnpm run deploy

# Running the script (If you need to change the name of the script,
# you can do it in the "name" field of the package.json file)
ts-cmd-tools-script --version
```

### To create an executable file you need to do the following

```shell
# Pkg is used to create executable files
pnpm install -g pkg

# Create an executable file. The file will need to be in ./dist/bin
pnpm run buildexec
```

# Problems

## deploy.sh

### Error: cp: cannot create regular file '$HOME/Documents/scripts/$FILENAME.js': Permission denied

The error occurs when you try to overwrite a previously created script file with the same version. Possible solutions to the problem:

1. Modifying the version in package.json

   - Open package.json
   - Find the line with "version"
   - Update version

2. Deleting a file that was previously created

   - Go to $HOME/Documents/scripts `cd $HOME/Documents/scripts`
   - Delete the file called `name_in_package_json + "-v-" + version_in_package_json + ".js"`

3. Modification of "deploy.sh"

   - Open `./scripts/deploy.sh`
   - Go to line 28. Change the permissions on the file "644" `chmod -R 644 $HOME/Documents/scripts/$FILENAME`
   - Proceed to step 2
