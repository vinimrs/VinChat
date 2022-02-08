import { Box } from "@skynexui/components";
import appConfig from "../../config.json";
import IndexMain from "../containers/IndexMain";

export default function PaginaInicial() {
	return (
		<Box
			styleSheet={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundImage: 'url(/bg2.jpg)',
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundBlendMode: "multiply",
                height: {
                    sm: '100vh'
                },
			}}
		>
			<Box
				styleSheet={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					backgroundColor: `${appConfig.theme.colors.secondary[800]}ca`,
					boxShadow:
						"0 0 32px 0 appConfig.theme.colors.secondary[800]",
					backdropFilter: "blur( 4px )",
					maxWidth: "400px",
            
					borderRadius: "10px",
					padding: "32px",
					margin: "16px",
				}}
			>
				<IndexMain />
			</Box>
		</Box>
	);
}
