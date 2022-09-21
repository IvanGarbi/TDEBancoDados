import mongoose from "mongoose";
import Blog from "./model/Blog.js";

mongoose.connect("mongodb+srv://TDEBancoDados:,<password>@cluster0.6q4rkvi.mongodb.net/?retryWrites=true&w=majority");

// // Create a new blog post object
// const article = new Blog({
//     title: "Awesome Post!",
//     slug: "awesome-post",
//     published: true,
//     content: "This is the best post ever",
//     tags: ["featured", "announcement"],
// });

// // Insert the article in our MongoDb database
// await article.save();

// // Find a single post
// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);

const article = Blog.create({
    title: "Awesome Post!",
    slug: "awesome-post",
    published: true,
    content: "This is the best post ever",
    tags: ["featured", "announcement"],
});

const firstArticle = await Blog.findOne({});

console.log(firstArticle);