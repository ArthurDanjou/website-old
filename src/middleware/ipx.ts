import { createIPX, createIPXMiddleware } from 'ipx'

// https://github.com/unjs/ipx
const ipx = createIPX({
  dir: 'src/static'
})

export default createIPXMiddleware(ipx)
