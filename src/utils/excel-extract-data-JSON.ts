import * as XLSX from 'sheetjs-style';
import i18next from "i18next";
import { Console } from 'console';

export const excelExtractDataJSON = async (e: any) => {
    const file = e?.target?.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    let filteredDataWithEnglishProperties;
    const promise = new Promise((resolve, reject) => reader.onload = (event: any) => {
        const binarystr = new Uint8Array(event?.target?.result);
        const workbook = XLSX.read(binarystr, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { raw: true });

        const filteredData = data.map((row: any) => {
            const { __rowNum__, ...rest } = row;
            return rest;
        });

        filteredDataWithEnglishProperties = filteredData.map((row: any) => {
            return {
                date: row[`${i18next.t("Date")}`],
                systolic: row[`${i18next.t("Systolic")}`],
                diastolic: row[`${i18next.t("Diastolic")}`],
                pulse: row[`${i18next.t("Pulse")}`]
            }
        })
        resolve(filteredDataWithEnglishProperties)

    })
    const result = await Promise.all([promise])
    return result[0]
}
