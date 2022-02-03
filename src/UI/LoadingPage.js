import { Box } from "@skynexui/components";
import LoadingComponent from "./LoadingComponent";

function LoadingPage() {
	return (
		<Box
			styleSheet={{
				width: "100vw",
				height: "100vh",
				backgroundColor: "#111111",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<LoadingComponent />
		</Box>
	);
}

export default LoadingPage;
