import type { Metadata } from 'next'
import '../styles/global.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Airel Adrivano',
  description: 'Full-stack engineer. System architect. Developer.',
  openGraph: {
    title: 'Airel Adrivano',
    description: 'Full-stack engineer. System architect. Developer.',
    url: 'https://aireladrivano.vercel.app',
    siteName: 'Airel Adrivano',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airel Adrivano',
    description: 'Full-stack engineer. System architect. Developer.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Clear any saved scroll position
                if (window.history && window.history.scrollRestoration) {
                  window.history.scrollRestoration = 'manual';
                }
                
                // Force scroll to top on page show
                window.addEventListener('pageshow', function(event) {
                  if (event.persisted) {
                    window.scrollTo(0, 0);
                  }
                });
                
                // Run immediately and again after load
                var scrollToTop = function() {
                  window.scrollTo(0, 0);
                };
                
                if (document.readyState === 'complete') {
                  scrollToTop();
                } else {
                  window.addEventListener('load', scrollToTop);
                }
                
                // Also try on DOMContentLoaded
                if (document.readyState !== 'loading') {
                  scrollToTop();
                } else {
                  document.addEventListener('DOMContentLoaded', scrollToTop);
                }
              })();
            `,
          }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}