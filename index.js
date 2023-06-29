const {json} = require('micro') // Opt-in JSON

// Main entry function
module.exports = async (req, res) => {
    if(req.url === '/login' && req.method === 'POST') {
        return login(req, res)
    } else if(req.url === '/register' && req.method === 'POST') {
        return register(req, res)
    }
  res.end('Welcome to Micro Login API!')
}

// Login
async function login(req, res) {
    const data = await json(req)
    // TODO: Find user
	console.log(data)
    // TODO: Return response "ok"
    return {result: "failed"}
}

// Register
async function register(req, res) {
    const data = await json(req)
    // TODO: Push user
	console.log(data)
    // TODO: Return response "ok"
    return {result: "failed"}
}
