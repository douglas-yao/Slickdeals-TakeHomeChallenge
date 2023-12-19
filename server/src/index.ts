import createServer from './utils/createServer';

const app = createServer();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
