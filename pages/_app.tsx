import * as React from "react";
import Head from "next/head";

import "src/styles/main.scss";
import type { AppProps } from "next/app";

import { MainLayout } from "src/containers/Main/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<Head>
				<title>Zarb</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</React.Fragment>
	);
}
export default MyApp;
