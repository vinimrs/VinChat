import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import appConfig from '../../config.json';
import flaticon from "../../public/flaticon.png"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingPage from "../UI/LoadingPage";

function GlobalStyle() {
	return (
		<style global jstyleSheet>{`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				list-style: none;
			}
			body {
				font-family: "Open Sans", sans-serif;
			}
			/* App fit Height */
			html,
			body,
			#__next {
				min-height: 100vh;
				display: flex;
				flex: 1;
			}
			#__next {
				flex: 1;
			}
			#__next > * {
				flex: 1;
			}
			/* ./App fit Height */
		`}</style>
	);
}

export default function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState();
    const route = useRouter();
    
    useEffect(() => {
        const handleRouteChangeStart = (url, {shallow}) => {
            console.log(
                `App is changing to ${url} ${
                  shallow ? 'with' : 'without'
                } shallow routing`
            )
            setLoading(true);
        }

        const handleRouteChangeComplete = (url, {shallow}) => {
            console.log(
                `App is changing to ${url} ${
                  shallow ? 'with' : 'without'
                } shallow routing`
            )
            setLoading(false);
        }

        route.events.on('routeChangeStart', handleRouteChangeStart);
        // route.events.off('routeChangeStart', handleRouteChangeComplete);
        route.events.on('routeChangeComplete', handleRouteChangeComplete);
    }, [])

    return (
        <>
            <Head>
                <title>VinChat - Plataforma de Conversas</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={flaticon.src} />
            </Head>
            <GlobalStyle />
            <NextNProgress 
                color={`linear-gradient(90deg, ${appConfig.theme.colors.secondary[700]} 30%, ${appConfig.theme.colors.primary[600]} 100%)`}
                height={5}
            />
            {!loading ? (<Component {...pageProps} />) : (<LoadingPage />)}
            
        </>
    );
}