export default function testMiddleware (req, res, next) {
  console.log("Middleware Test")
  next()
}