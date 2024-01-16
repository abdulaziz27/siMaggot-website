import React from "react";
import "../blog_page/blog_page.css";
import HeaderBlog from "../../components/header_blog/header_blog";
import Footer from "../../components/footer/footer";
import ArticleComponent from "../../components/article/article_card";

const BlogPage = () => {
	return (
		<div className="blog-main-page-container">
			<HeaderBlog />

			<ArticleComponent />

			<Footer />
		</div>
	);
};

export default BlogPage;
