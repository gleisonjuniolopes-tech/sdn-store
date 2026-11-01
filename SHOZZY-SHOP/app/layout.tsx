import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/components/CartProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SHOZZY SHOP | Loja gamer profissional para Free Fire',
  description: 'Loja profissional com sensibilidade, HUD, otimização e suporte para Free Fire.',
  metadataBase: new URL('https://shozzyshop.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <div className="min-h-screen bg-[#050816] text-white">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
