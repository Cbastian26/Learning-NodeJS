const { readFile, writeFile } = require(`fs`);

readFile(`./content/first.txt`, `utf-8`, (err, res) => {
  if (err) return;
  console.log(res);
  readFile(`./content/second.txt`, `utf-8`, (err, res) => {
    if (err) return;
    console.log(res);
    writeFile(
      `./content/third-async.txt`,
      `Hi Cbastian, I'm the third-async text`,
      (err) => {
        if (err) return;
        readFile(`./content/third-async.txt`, `utf-8`, (err, res) => {
          if (err) return;
          console.log(res);
        });
      }
    );
  });
});
