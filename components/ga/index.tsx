import nextConfig from '../../next.config';

export const GA = () => {
    if (!nextConfig.gaCode) { return(<></>); }

    return(<>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${nextConfig.gaCode}`}
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${nextConfig.gaCode}', {
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
    if (nextConfig.gaCode){
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, { page_path: url })
    }
}
  
export const event = ({ action, params }) => {
    if (nextConfig.gaCode){
        window.gtag('event', action, params)
    }
}
  