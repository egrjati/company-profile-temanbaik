import { createServer } from 'http'
import { listener } from './.output/server/index.mjs'

const port = process.env.PORT || 3000

createServer(listener).listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
