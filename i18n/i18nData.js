const fs = require("fs-extra");
const unflatten = require("flat").unflatten;
const { extractSheets } = require("spreadsheet-to-json");
const path = require("path");


extractSheets(
  {
    spreadsheetKey: "1BvJPfLYcaCbwmX1jpLqqtJ2Y63PyBoi9idJpHsJqFq8",
    credentials: require("./analog-sum-375704-14346ff4c291.json"),
    sheetsToExtract: ['index'],
  },
  (err, data) => {
    console.log('get',err,data)
    if (err) throw err;
    const i18nData = [...data['index']];
    const result = {};
    const files = [];
    
    for (const key in i18nData[0]) {
      if (key !== "key") {
        files.push(key);
        result[key] = {};
      }
    }
    i18nData.forEach((item) => {
      for (const file of files) {
        result[file][item["key"]] = item[file] ? item[file] : "";
      }
    });
    for (const fileName of files) {
      fs.ensureDirSync(
        path.dirname(
          path.resolve(__dirname, "./language", `${fileName}.json`)
        )
      );
      fs.writeJSONSync(
        path.resolve(__dirname, "./language", `${fileName}.json`),
        unflatten(result[fileName], { object: true }),
        { spaces: 2 }
      );
    }
  }
);



// app.listen(5000, () => {
//   console.log('server listening on 5000...')
// })
