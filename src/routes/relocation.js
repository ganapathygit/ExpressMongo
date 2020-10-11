const express = require("express")
const Relocation= require("../models/relocation") 
const router = express.Router()

router.get("/relocation", async (req, res) => {
	const relocation = await Relocation.find()
	res.send(relocation)
})

router.post("/relocation", async (req, res) => {
	const relocation = new Relocation({
		username: req.body.username,
    phone: req.body.phone,
    email: req.body.email,
    from: req.body.from,
    to: req.body.to,
	})
	await relocation.save()
	res.send(relocation)
})

router.get("/relocation/:username", async (req, res) => {
  console.log("=============Find relocation for==========="+req.params.username)
	const relocation = await Relocation.findOne({username: req.params.username})
	res.send(relocation)
})


module.exports = router
