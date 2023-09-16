const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const { v4: uuidv4 } = require("uuid");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/tasks", (req, res) => {
  const id = uuidv4();

  res.send(`<li class="flex justify-between bg-blue-100 py-4 px-20 border-b border-solid border-black">${req.body?.post} <button hx-delete="/tasks/${id}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z" fill="#0D0D0D"/>
</svg></button></li> 
  <li id="response"></li>`);
});

app.delete("/tasks/:id", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
