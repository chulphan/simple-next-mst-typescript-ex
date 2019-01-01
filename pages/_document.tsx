import Document, { Head, Main, NextScript } from "next/document";
import Helmet from "react-helmet";
import { Footer } from "../src/components/footer";
export default class MyDocument extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    return { ...documentProps, helmet: Helmet.renderStatic() };
  }

  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== "htmlAttributes" && el !== "bodyAttributes")
      .map(el => this.props.helmet[el].toComponent());
  }

  get helmetJsx() {
    return (
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title="Chulphan"
        meta={[
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { property: "og:title", content: "Chulphan" }
        ]}
      />
    );
  }

  render() {
    return (
      // <html>
      //   <Head lang="en">
      //     <meta name="viewport" content="width=device-width, initial-scale=1" />
      //     <meta name="og:title" content="^^" />
      //   </Head>
      //   <body>
      //     <Main />
      //     <Footer />
      //     <NextScript />
      //   </body>
      // </html>
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    );
  }
}
