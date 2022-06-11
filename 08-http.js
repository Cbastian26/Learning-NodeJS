const http = require(`http`);

const server = http.createServer((req, res) => {
  if (req.url === `/`) {
    // res.write(`Hi Cbastian, this is your almost first server \n`);
    res.end(`Welcome to the home page`);
  } else if (req.url === `/about`) {
    res.end(`This is a short story about us. I hope you enjoy it`);
  } else {
    res.end(`
    <h1>Oops! The page doesn't exist</h1>
    <p>Go back to our home before it's too late <a href="/">Go Home!</a>`);
  }
});

server.listen(3000);
