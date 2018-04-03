var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: true

    },
    date: {
        type: String,
        trim: true,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});
const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;