const axios = require("axios");
const router = require("express").Router();
const nytController = require("../controllers/nytController");

router.get("/articles", (req, res) => {

            // console.log(req.query)
            // const params = Object.assign({ api_key: "9b3adf57854f4a19b7b5782cdd6e427a" },
            //     req.query,


                axios
                .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=9b3adf57854f4a19b7b5782cdd6e427a&q=" + req.query.query)
                .then(({ data: { results } }) => res.json(results))
                .catch(err => res.status(422).json(err));
            });

        // need to implement saved method here


        module.exports = router;