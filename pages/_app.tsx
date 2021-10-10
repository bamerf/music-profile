import "src/styles/main.scss";
import type { AppProps } from "next/app";
import { MainLayout } from "src/containers/Main/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
}
export default MyApp;
