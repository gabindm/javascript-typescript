import app from "./app";

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`\nServer started on port ${port}.\n`);
  console.log(`\nCtrl + click on http://localhost:${port}\n`);
});
