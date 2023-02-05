import merge from "lodash/merge";
import { NextRouter } from "next/router";

import BasicSeo from "./BasicSeo";
import OpenGraph from "./openGraph";

class ConfigSEO {
  BasicSeo: BasicSeo;

  OpenGraph: OpenGraph;

  configSeo = {};

  constructor() {
    this.BasicSeo = new BasicSeo();
    this.OpenGraph = new OpenGraph();

    this.configSeo = {
      ...this.BasicSeo.seo,
      ...this.OpenGraph.configOpenGraph,
    };
  }

  overwriteProperty(overwriteConfig: object) {
    merge(this.configSeo, overwriteConfig);
  }

  updateRoutr(router: NextRouter) {
    this.overwriteProperty({ canonical: `${this.BasicSeo.seo.url}${router.asPath}` });
  }

  getMetaTags() {
    return {
      ...this.configSeo,
      ...this.BasicSeo.seo,
      ...this.OpenGraph.configOpenGraph,
    };
  }

  getNextSeoConfig() {
    return {
      ...this.configSeo,
    };
  }

  getConfig() {
    return {
      ...this.configSeo,
    };
  }
}

const configSEO = new ConfigSEO();
export default configSEO;
