import { Text, Image, Box } from "@skynexui/components";
import appConfig from "../../config.json";

function ListaStickers({ onStickerClick, setOpenState }) {
	return (
		<Box
			styleSheet={{
				display: "flex",
				flexDirection: "column",
				borderRadius: "5px",
				backgroundColor: appConfig.theme.colors.neutrals[800],
				width: "100%",
				height: "300px",
				right: "30px",
				overflow: "hidden",
				zIndex: "1000",
				bottom: "30px",
				padding: "16px",
				boxShadow:
					"rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px",
			}}
			onClick={setOpenState}
		>
			<Text
				styleSheet={{
					color: appConfig.theme.colors.neutrals["000"],
					fontWeight: "bold",
				}}
			>
				Stickers
			</Text>
			<Box
				tag="ul"
				styleSheet={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-between",
					flex: 1,
					paddingTop: "16px",
					overflowY: "scroll",
					marginRight: "-35px",
					paddingRight: "15px",
				}}
			>
				{appConfig.stickers.map((sticker) => (
					<Text
						onClick={() => {
								onStickerClick(sticker);
						}}
						tag="li"
						key={sticker}
						styleSheet={{
							width: "30%",
							borderRadius: "5px",
							padding: "10px",
                            cursor: 'pointer',
							focus: {
								backgroundColor:
									appConfig.theme.colors.neutrals[600],
							},
							hover: {
								backgroundColor:
									appConfig.theme.colors.neutrals[600],
							},
						}}
					>
						<Image src={sticker} alt="Sticker." />
					</Text>
				))}
			</Box>
		</Box>
	);
}

export default ListaStickers;
