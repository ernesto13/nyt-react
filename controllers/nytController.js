const db = require('../models');
var axios = require('axios');
module.exports = {
    findAll: function(req, res) {
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },



    getArticles: function(req, res) {
        console.log(req.query)
        const params = Object.assign({ api_key: "9b3adf57854f4a19b7b5782cdd6e427a" },
            req.query
        );
        axios
            .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
                params
            })
            .then(response => {
                db.Article
                    .find()
                    .then(dbArticles =>
                        response.data.response.docs.filter(article =>
                            dbArticles.every(
                                dbArticle => dbArticle._id.toString() !== article._id
                            )
                        )
                    )
                    .then(articles => res.json(articles))
                    .catch(err => res.status(422).json(err));
            });


    }
}