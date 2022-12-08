import XLSX from 'sheetjs-style'
import * as FileSaver from 'file-saver'
import { BloodPressure } from './parse-blood-pressure-text'

const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"

export const exportExcel = (data: any) => {

    const ws = XLSX.utils.json_to_sheet([{ '': '' }])
    XLSX.utils.sheet_add_aoa(ws, [["Data", "Skurczowe", "Rozkurczowe", "Puls"]]);

    XLSX.utils.sheet_add_json(ws, data, { skipHeader: true, origin: 'A2' })

    const wb = { Sheets: { "data": ws }, SheetNames: ['data'] }

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

    const excelData = new Blob([excelBuffer], { type: fileType })
    FileSaver.saveAs(excelData, `${"blood-presure"}.xlsx`)
}