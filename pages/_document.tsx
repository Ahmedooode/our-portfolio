// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const locale = this.props.__NEXT_DATA__.locale || "en";

    return (
      <Html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <Head />
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
