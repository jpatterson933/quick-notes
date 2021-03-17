const logger = (req, res, next) => {
    //${req.protocol} gives us http next we get the host (localhost:7000) -- then we ask for the page url
console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
next();
}

module.exports = logger;