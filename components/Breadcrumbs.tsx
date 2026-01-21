import { BreadcrumbNavigation } from "../lib/seo";
import { useRouter } from "next/router";

interface BreadcrumbsProps {
  className?: string;
}

export default function Breadcrumbs({ className = "" }: BreadcrumbsProps) {
  const router = useRouter();
  const breadcrumbNav = new BreadcrumbNavigation();
  
  const breadcrumbData = breadcrumbNav.generateReactBreadcrumbProps(
    router.asPath,
    router.pathname === '/' ? 'home' : 'generic'
  );

  if (!breadcrumbData.showBreadcrumbs) {
    return null;
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbData.structuredData
        }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav 
        aria-label="Breadcrumb" 
        className={`breadcrumb-navigation ${className}`}
      >
        <ol className="flex items-center space-x-2 text-sm text-gray-600" role="list">
          {breadcrumbData.breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbData.breadcrumbs.length - 1;
            
            return (
              <li key={breadcrumb.position} className="flex items-center" role="listitem">
                {!isLast ? (
                  <>
                    <a 
                      href={breadcrumb.url}
                      className="hover:text-gray-900 transition-colors"
                      title={`Go to ${breadcrumb.name}`}
                    >
                      {breadcrumb.name}
                    </a>
                    <span className="mx-2 text-gray-400" aria-hidden="true">
                      /
                    </span>
                  </>
                ) : (
                  <span 
                    className="text-gray-900 font-medium" 
                    aria-current="page"
                  >
                    {breadcrumb.name}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}