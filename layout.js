import './globals.css';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Gary Wilson – Estate Planning Attorney',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}