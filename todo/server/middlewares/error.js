import asyncHandler from "express-async-handler"
export const handError = asyncHandler( async(req, res) => {
  const err = new Error('Exemple Error')
  res.status(404)
  throw err
})