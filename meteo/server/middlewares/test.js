exports.testMiddleware = (req,res, next) => {
  console.log("Middleware Test")
  next()
}