import React from "react";
import "../header_blog/header_blog.css";

const HeaderBlog = () => {
	return (
		<div className="article-header-main-page-container">
			<div className="article-navigation-header-container">
				<div className="logo-simaggot">
					<a href="/">SiMaggot</a>
				</div>
				<div className="beranda-simaggot-button">
					<a href="/blog">Beranda</a>
				</div>
			</div>
		</div>
	);
};

export default HeaderBlog;
