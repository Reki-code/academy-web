const shortOptions = { month: 'long', day: 'numeric' }
const longOptions = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
export const shortFormat = (timeStamp) => new Intl.DateTimeFormat('zh-CN', shortOptions).format(timeStamp)
export const longFormat = (timeStamp) => new Intl.DateTimeFormat('zh-CN', longOptions).format(timeStamp)
