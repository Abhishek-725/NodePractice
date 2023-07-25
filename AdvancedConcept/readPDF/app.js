// const pdf = require('pdf-parse');
// const fs = require('fs');
// const excel = require('exceljs');
// const { error } = require('console');

// let file = fs.readFileSync('./Vidly - Requirements.pdf');

// pdf(file).then((result) => {

//     console.log(result.info.Title);
//     const workBook =  new excel.Workbook();
//     const workSheets = workBook.addWorksheet('sheet1');
//     let data = [];
//     for (const key of Object.keys(result.info)) {
//           data.push({header : key , key : key})
//     }

//     workSheets.columns = data;
//     let obj = {
//         PDFFormatVersion :'1.3',
//         IsAcroFormPresent : false,
//         IsXFAPresent : false,
//         Title : 'Vidly - Requirements',
//         Creator : 'Pages',
//         Producer : 'macOS Version 10.14.3 (Build 18D109) Quartz PDFContext',
//         ModDate : "D:20190411210519Z00'00'"

//     }
//     // console.log(data);
//     workSheets.addRow(obj);
//     workSheets.addRow(obj);
//     workBook.xlsx.writeFile('./demo.xlsx')
//         .then((data) => {
//             console.log("=======",data);
//         })
//         .catch((error) => {
//             console.log("===Error ",error);
//         })

// })

