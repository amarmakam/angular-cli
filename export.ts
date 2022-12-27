import { Directive, Input, HostListener } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

/**
 * This is a common directive used to export Array of JS Objects to xlsx,xlsm,xlsb files.
 * Required Params : exportData is Array of JS Objects, fileName is user defined filename, fileType is
 * the file extension which takes xlsx,xlsm,xlsb.
 * Optional Params : colProps takes array of column objects in the specified format - {column : 'col1', 'width' : 40},
 * headerNames takes array of heading names that is displayed in Excel header if we donot want to override
 * heading name we should give a blank value ''.
 */
@Directive({
  selector: '[firmsExportData]'
})
export class ExportDataDirective {

  @Input('exportData') exportData;
  @Input('fileName') fileName;
  @Input('fileType') fileType;
  @Input('colProps') colProps;
  @Input('headerNames') headerNames;
  @Input('additionalData') additionalData;
  @Input('sheetName') sheetName;

  constructor() { }

  @HostListener('click') onClick() {

    const fileExtn = '.' + this.fileType;
    this.sheetName = this.sheetName ? this.sheetName : 'data';

    if ('xlsx' === this.fileType || 'xlsm' === this.fileType || 'xlsb' === this.fileType) {
      const formattedExcelData = this.formatData(this.exportData);
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(formattedExcelData);


      if (this.colProps && Object.keys(this.colProps).length > 0) {
        const columnWidth = [];
        const fieldNames = Object.keys(this.colProps);

        for (let i = 0; i < fieldNames.length; i++) {
          const wch = !!this.colProps[fieldNames[i]].width ? this.colProps[fieldNames[i]].width : 10;
          columnWidth.push({ wch });
        }
        worksheet['!cols'] = columnWidth;

        for (let i = 0; i < fieldNames.length; i++) {
          const format = !!this.colProps[fieldNames[i]].format ? this.colProps[fieldNames[i]].format : null;
          const displayColumn = !!this.colProps[fieldNames[i]].displayColumn ? this.colProps[fieldNames[i]].displayColumn : null;
          if (displayColumn && format) {
            for (let j = 1; j <= formattedExcelData.length + 1; j++) {
              worksheet[displayColumn + j.toString()].z = format;
            }
          }
        }
      }

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, worksheet, this.sheetName);
      XLSX.writeFile(wb, this.fileName + '_' + new Date().getTime() + '.' + this.fileType);

    }
  }

  private formatData(data) {
    const fields = !!this.colProps ? Object.keys(this.colProps) : [];
    const excelData = [];

    if (fields.length === 0) {
      return data;
    }

    for (let i = 0; i < this.exportData.length; i++) {
      const currentItem = {};
      for (let j = 0; j < fields.length; j++) {
        const fieldName = fields[j];
        if (this.exportData[i][fieldName] !== undefined || !!this.colProps[fieldName].expression) {
          const proertyName = !!this.colProps[fieldName].headerName ? this.colProps[fieldName].headerName : fieldName;
          currentItem[proertyName] = !!this.colProps[fieldName].expression ?
            this.colProps[fieldName].expression.call(null, this.exportData[i]) : this.exportData[i][fieldName];

        } else {
          const proertyName = !!this.colProps[fieldName].headerName ? this.colProps[fieldName].headerName : fieldName;
          currentItem[proertyName] = this.additionalData ? this.additionalData[fieldName] : '';
        }
      }

      excelData.push(currentItem);
    }

    return excelData;
  }

}
