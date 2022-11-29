
export const lngToISO = (language: string) => {
    switch (language) {
        case "Polish":
            return 'pl'
        case "German":
            return 'de'
        case "Italian":
            return 'it'
        default:
            return 'en'
    }
}