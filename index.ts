import app from "./app/app";
const PORT = process.env.PORT || 3535;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));