import app from "./app";

const port = 3336;

app.listen(port, () => {
  console.log(`\nServer started on port ${port}.\n`);
  console.log(`\nCtrl + click on http://localhost:${port}\n`);
});
