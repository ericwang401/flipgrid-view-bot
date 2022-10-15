const axios = require('axios')
const token = ''
const endpoint = 'https://api.flipgrid.com/api/grids/<FILL IN>/responses/<FILL IN>/views'

setInterval(() => {
    axios({method: 'POST', url: endpoint,
      headers: {
          'User-Agent': 'PostmanRuntime/7.26.3',
          'Accept-encoding': 'gzip, deflate, br',
          'Content-Type': 'application/json',
          'Connection': 'keep-alive',
          'x-authorization': `grid_token ${token}`,
      }
    })
    .then(res => {
    console.log('Request dispatched successfully')
    })
    .catch(error => {
      console.log(error)
    })

}, 100);