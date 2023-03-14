import {
	FacebookIcon,
	FacebookShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from "next-share";
import type { FC } from "react";

interface ShareButtonsProps {
	slug: string;
	name: string;
	description: string;
}

export const ShareButtons: FC<ShareButtonsProps> = ({
	slug,
	name,
	description,
}) => {
	return (
		<div className="flex items-center justify-center gap-2 mt-5">
			<FacebookShareButton
				url={`https://catalogo-app-nu.vercel.app/products/${slug}`}
				quote={`Producto: ${name} - ${description}`}
			>
				<FacebookIcon size={32} round />
			</FacebookShareButton>
			<WhatsappShareButton
				url={`https://catalogo-app-nu.vercel.app/products/${slug}`}
				title={`Producto: ${name} - ${description}`}
			>
				<WhatsappIcon size={32} round />
			</WhatsappShareButton>
		</div>
	);
};
