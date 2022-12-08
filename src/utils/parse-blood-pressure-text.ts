export interface BloodPressure {
    pulse: number
    date: string
    systolic: number
    diastolic: number
}

const totalDefault = { systolic: 0, diastolic: 0, pulse: 0 }

export const parse = (text: string): BloodPressure[] => {
    const lines = text.split('\n')
    const columns = lines.map(l => l.split(' ')).filter(l => l.length > 2)

    let total = totalDefault
    let items: BloodPressure[] = []

    columns.map((c, i) => {
        let pulseTxt = c[2]
        let pulse: number = 0

        if (pulseTxt.includes('p') && c?.length > 3) {
            pulseTxt = (c[2] + c[3])
        }

        pulse = parseInt(pulseTxt.replace(/\D/g, ''))

        const pressure = c[1].split('/')
        const systolic = parseInt(pressure[0])
        const diastolic = parseInt(pressure[1])

        total = {
            systolic: total.systolic + systolic,
            diastolic: total.diastolic + diastolic,
            pulse: total.pulse + pulse
        }

        items.push({
            date: c[0],
            systolic,
            diastolic,
            pulse,
        })

        if ((i + 1) % 7 === 0) {
            const bp = {
                date: 'Srednia',
                systolic: total.systolic / 7,
                diastolic: total.diastolic / 7,
                pulse: total.pulse / 7
            }

            total = totalDefault
            items.push(bp)
        }
    })

    return items
} 