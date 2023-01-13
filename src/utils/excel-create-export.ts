import XLSX from 'sheetjs-style'
import * as FileSaver from 'file-saver'
import i18next from "i18next";


const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"

export const createExcelAndExport = (data: any) => {

    const ws = XLSX.utils.json_to_sheet([{ '': '' }])
    XLSX.utils.sheet_add_aoa(ws, [[`${i18next.t("Date")}`, `${i18next.t("Systolic")}`, `${i18next.t("Diastolic")}`, `${i18next.t("Pulse")}`]]);

    XLSX.utils.sheet_add_json(ws, data, { skipHeader: true, origin: 'A2' })

    const wb = { Sheets: { "data": ws }, SheetNames: ['data'] }

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

    const excelData = new Blob([excelBuffer], { type: fileType })
    FileSaver.saveAs(excelData, `${i18next.t("blood-pressure")}.xlsx`)
}