// Import any necessary dependencies
import { useClient } from 'react-server-components';
import Head from 'next/head';

// Define any necessary dependencies or configurations
const fonts = DM_Sans({ subsets: ["latin"] });

// Export the metadata object
export const metadata = {
  title: "Pcari Movie App",
  description: "Explore and discover your favorite movies.",
};

// Define your custom Layout component
export function Layout({ children }) {
  // You can use the `useClient` directive here if needed
  useClient();

  return (
    <div className="container">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Include other meta tags, styles, or scripts as needed */}
      </Head>
      <header>
        <nav>
          {/* Your navigation bar or menu */}
        </nav>
      </header>
      <main>
        {children}
        {/* This is where the page content will be injected */}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Pcari Movie App</p>
        {/* Additional footer content */}
      </footer>
      <style jsx global>{`
        /* Global CSS styles go here */
        body {
          font-family: ${fonts}; /* Use your chosen font */
        }
      `}</style>
      <style jsx>{`
        /* Component-specific CSS styles go here */
        .container {
          margin: 0 auto;
          padding: 2rem;
          max-width: 800px; /* Adjust as needed */
        }
        header {
          background-color: #333;
          color: white;
          padding: 1rem;
        }
        main {
          padding: 1rem;
        }
        footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}

// Export the layout component
export default Layout;
