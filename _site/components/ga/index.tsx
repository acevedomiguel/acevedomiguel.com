import config from '../../next.config';

export const GA = ({ code = "" }) => {
    if (!code || code==="") { return(<script></script>); }

    return(<>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${code}`}
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${code}', {
                page_path: window.location.pathname,
                });`,
            }}
        />
    </>)
}

export default GA;

declare global {
    interface Window {
        gtag:any;
    }
}

export const pageview = (url) => {
    if (config.gaCode){
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, { page_path: url })
    }
}
  
export const event = ({ action, params }) => {
    if (config.gaCode){
        window.gtag('event', action, params)
    }
}

export const eventOnClick = (action, params) => {
    return () => { event({ action, params }) }
}

export const onThisClick = (e) => {
    eventOnClick("outbound_click", { url: e.currentTarget.href })
}