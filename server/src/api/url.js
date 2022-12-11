const express = require("express");
const router = express.Router();
const { list, get } = require("../db/modules/url");

const { current: currentAccount } = require("../db/modules/account/get");

router.get("/list", async function (req, res) {
	const [account, error] = await currentAccount(req);
	if (error) return res.status(error.code).send(error.message);
	const { pagesize, page } = req.query;
	const data = await list({ pagesize, page });

	res.status(200).json({
		success: true,
		data: result,
	});
});

router.get("/", async function (req, res) {
	const { slug } = req.query;
	const data = await get({
		slug,
	});

	if (data) {
		res.status(200).json({
			success: true,
			result: {
				destination: data.destination,
			},
		});
	} else {
		res.status(404).json({
			success: false,
			message: "invalid url",
		});
	}
});

module.exports = router;
