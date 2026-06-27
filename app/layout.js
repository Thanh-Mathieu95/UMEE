import { Nunito } from 'next/font/google';
import './globals.css';

const nunitoDisplay = Nunito({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const nunitoBody = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'UMEE — Vietnamese Coffee, Bold & Raw',
  description:
    'A poetic escape where You and Me get lost in the craft of Vietnamese coffee. UMEE celebrates the art of slow-drip phin coffee in Ho Chi Minh City.',
  openGraph: {
    title: 'UMEE Coffee',
    description: 'Where You & Me find each other over Vietnamese coffee.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${nunitoDisplay.variable} ${nunitoBody.variable}`}>
      <body>{children}</body>
    </html>
  );
}
