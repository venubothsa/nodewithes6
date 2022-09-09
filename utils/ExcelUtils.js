
var XLSX = require('xlsx');

GetTableFromExcel()
function GetTableFromExcel() {
    //Read the Excel File data in binary
    var workbook = XLSX.readFile("D:/git/nodewithes6/utils/test.xls");
    var sheetName = workbook.SheetNames[0];

    var sheet = workbook.Sheets[sheetName];

    var range = XLSX.utils.decode_range(sheet['!ref']);

    for (var R = range.s.r; R <= range.e.r; ++R) {
        for (var C = range.s.c; C <= range.e.c; ++C) {
            var cell_address = { c: C, r: R };
            var cell_ref = XLSX.utils.encode_cell(cell_address);
            var cell = sheet[cell_ref]

            if (cell)
                console.log(cell);

        }
    }



}
/* output
{ v: 'sdfdsf', t: 's', w: 'sdfdsf' }
{ v: 'fsdfsd', t: 's', w: 'fsdfsd' } */