import { Box, Button, Text, Image } from "@skynexui/components";
import dynamic from "next/dynamic";
import React from "react";
import appConfig from "../../config.json";
import LoadingComponent from "../UI/LoadingComponent";
const ListaStickers = dynamic(() => import("../components/ListaStickers"), {
	loading: () => (
		<Box
			styleSheet={{
				display: "flex",
				flexDirection: "column",
				borderRadius: "5px",
				position: "absolute",
				backgroundColor: appConfig.theme.colors.neutrals[800],
				width: {
					xs: "400px",
					sm: "290px",
				},
				height: "300px",
				right: "30px",
				overflow: "hidden",
				zIndex: "1000",
				bottom: "30px",
				padding: "16px",
				boxShadow:
					"rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px",
			}}
		>
			<LoadingComponent />
		</Box>
	),
});

export function BotaoAbreStickers({ onStickerClick }) {
	const [isOpen, setOpenState] = React.useState("");

	return (
		<Box>
			<Button
				styleSheet={{
					borderRadius: "50%",
					padding: "0 3px 0 0",
					minWidth: "50px",
					minHeight: "50px",
					fontSize: "20px",
					marginBottom: "8px",
					lineHeight: "0",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: isOpen
						? appConfig.theme.colors.primary[700]
						: appConfig.theme.colors.neutrals[400],
					hover: {
						color: appConfig.theme.colors.primary[700],
					},
				}}
				label="😋"
				onClick={() => setOpenState(!isOpen)}
			/>
			{isOpen && (
				<ListaStickers
					onStickerClick={onStickerClick}
					setOpenState={setOpenState}
				/>
			)}
		</Box>
	);
}
