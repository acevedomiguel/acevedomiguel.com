// import config from '../../next.config';

export const GA = ({ code = "" }) => {
  // console.log("GA", code);
  if (!code || code === "") {
    return <script></script>;
  }

  return (
    <>
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
              gtag('config', '${code}');`,
        }}
      />
    </>
  );
};

export default GA;

declare global {
  interface Window {
    gtag: any;
  }
}

export const pageview = (url) => {
  if (process.env.GA_CODE) {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

export const event = ({ action, params }) => {
  if (process.env.GA_CODE) {
    window.gtag("event", action, params);
  }
};

export const eventOnClick = (action, params) => {
  return () => {
    event({ action, params });
  };
};

export const onThisClick = (e) => {
  eventOnClick("outbound_click", { url: e.currentTarget.href });
};
