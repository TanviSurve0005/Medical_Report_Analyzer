import "./globals.css"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/ThemeProvider"


const outfit = Outfit({ 
  subsets: ["latin"],
  // Include all weights we'll use
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

