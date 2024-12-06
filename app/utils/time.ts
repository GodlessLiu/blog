import dayjs from "dayjs"

export function formateYYYYMMDD(date: string) {
    if(!date) return ''
    return dayjs(date).format('YYYY-MM-DD')
}