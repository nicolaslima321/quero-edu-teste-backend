var memoryCache = require('memory-cache');

module.exports = {
  handle (request, response, next) {
    let cacheKey = '__API_QUERO__' + request.originalUrl || request.url
    let cachedBody = memoryCache.get(cacheKey)

    if (cachedBody) {
      console.log("Thats is an cached body")
      return response.json(cachedBody)
    } 
    
    next()
  }
}