import type { ReactNode } from 'react';
export const metadata = { title: 'GamarraYa | Simulacro' };
export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="es"><body style={{fontFamily:'Arial, sans-serif',margin:0}}>{children}</body></html>;
}
