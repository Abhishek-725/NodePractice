const ExcelJS = require('exceljs');
const wb = new ExcelJS.Workbook();
const fileName = 'data.xlsx';

wb.xlsx.readFile(fileName).then(() => {
    const ws = wb.getWorksheet('Sheet1');
    let data = [];
    const c1 = ws.eachRow((row , rowNumber) =>{
        console.log(`Row ${rowNumber} = `,row.values[2]);
        let obj = {
            pid:row.values[2],
            year_establishment:row.values[3],
            table_number:row.values[4],
            area_number:row.values[5],
            table_name:row.values[6],
            school_name:row.values[7],
            state:row.values[8],
            students:row.values[9],
            total_sq_ft:row.values[10],
            classrooms:row.values[11],
            project_cost:row.values[12],
            grant_amount:row.values[13],
            city:row.values[14],
            address:row.values[15]
        };
        data.push(obj);
    
    })
    console.log(data);

}).catch(err => {
    console.log(err);
});