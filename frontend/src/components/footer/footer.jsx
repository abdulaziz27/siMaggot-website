import React from "react";
import "../footer/footer.css";
import { Icon } from "@iconify/react";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-about-container">
				<div className="about footer-option">
					<h1>Maggot Yahoot</h1>
					<a href="./shop">
						<p>Toko</p>
					</a>

					<a>
						<p>Blog</p>
					</a>

					<a>
						<p>Tentang Maggot Yahoot</p>
					</a>
				</div>

				<div className="jual footer-option">
					<h1>Jual</h1>
					<a>
						<p>Pusat Panduan Penjual</p>
					</a>

					<a>
						<p>Daftar Toko</p>
					</a>
				</div>

				<div className="pusat-bantuan footer-option">
					<h1>Pusat bantuan</h1>
					<a>
						<p>Syarat dan Ketentuan</p>
					</a>

					<a>
						<p>Kebijakan Privasi</p>
					</a>
				</div>

				<div className="follow footer-option">
					<h1>Ikuti Kami</h1>
					<div className="link-icon">
						<a>
							<Icon icon="logos:facebook" />
						</a>

						<a>
							<Icon icon="skill-icons:instagram" />
						</a>

						<a>
							<Icon icon="logos:tiktok-icon" />
						</a>

						<a>
							<Icon icon="fa6-brands:x-twitter" />
						</a>
					</div>
				</div>
			</div>

			<div className="horizontal-line-footer"></div>

			<div className="copyright">
				<p>
					Copyright <Icon icon="ph:copyright" /> Maggot Yahoot. All
					right reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
