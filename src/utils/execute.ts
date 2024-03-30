import { exec } from 'child_process';

export function execute(cmd: string) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject();

        return;
      }

      if (stderr) {
        reject(stderr);

        return;
      }

      resolve(stdout);
    });
  });
}
