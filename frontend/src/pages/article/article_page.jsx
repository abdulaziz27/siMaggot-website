import React from "react";
import { useParams } from "react-router-dom";
import "../article/article_page.css";
import HeaderBlog from "../../components/header_blog/header_blog";
import Footer from "../../components/footer/footer";
import ArticlePage1 from "./article_component/article_1";
import ArticlePage2 from "./article_component/article_2";
import ArticlePage3 from "./article_component/article_3";
import ArticlePage4 from "./article_component/article_4";
import ArticlePage5 from "./article_component/article_5";

const ArticlePage = () => {
	const { id } = useParams();
	const getArticleComponent = (articleId) => {
		switch (articleId) {
			case "1":
				return <ArticlePage1 />;
			case "2":
				return <ArticlePage2 />;
			case "3":
				return <ArticlePage3 />;
			case "4":
				return <ArticlePage4 />;
			case "5":
				return <ArticlePage5 />;
			default:
				return <p>Article not found</p>;
		}
	};

	return (
		<div className="article-main-page-container">
			<HeaderBlog />

			<div className="article-information-container-width">
				{getArticleComponent(id)}
			</div>

			<Footer />
		</div>
	);
};

export default ArticlePage;
