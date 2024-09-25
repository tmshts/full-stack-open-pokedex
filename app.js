const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // this_causes_error
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  // Simulate that GitHub Actions notices if a deployment breaks your application
  //if (true) throw('error...  ')
  res.send('ok')
})
