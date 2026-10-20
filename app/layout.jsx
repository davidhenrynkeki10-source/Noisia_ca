import './globals.css';

export const metadata = {
  title: 'N O I S I A — creative agency',
  description: 'N O I S I A — Creative Agency',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Cinzel:wght@400;500;600&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Italiana&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/avenir-lt-pro" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet" />
      </head>
      <body className="h-full m-0 p-0 overflow-x-hidden antialiased bg-black select-none">
        {children}
      </body>
    </html>
  );
}
