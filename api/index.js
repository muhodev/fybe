import "dotenv/config";
import app from "./app.js";
import { PORT } from "./@constants/index.js";

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening server on port ${PORT}`);
});
