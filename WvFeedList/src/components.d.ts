/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface WvFeed {
    'record': Object;
  }
  interface WvFeedList {
    'isDebug': string;
    'records': string;
  }
}

declare global {


  interface HTMLWvFeedElement extends Components.WvFeed, HTMLStencilElement {}
  var HTMLWvFeedElement: {
    prototype: HTMLWvFeedElement;
    new (): HTMLWvFeedElement;
  };

  interface HTMLWvFeedListElement extends Components.WvFeedList, HTMLStencilElement {}
  var HTMLWvFeedListElement: {
    prototype: HTMLWvFeedListElement;
    new (): HTMLWvFeedListElement;
  };
  interface HTMLElementTagNameMap {
    'wv-feed': HTMLWvFeedElement;
    'wv-feed-list': HTMLWvFeedListElement;
  }
}

declare namespace LocalJSX {
  interface WvFeed {
    'record'?: Object;
  }
  interface WvFeedList {
    'isDebug'?: string;
    'records'?: string;
  }

  interface IntrinsicElements {
    'wv-feed': WvFeed;
    'wv-feed-list': WvFeedList;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'wv-feed': LocalJSX.WvFeed & JSXBase.HTMLAttributes<HTMLWvFeedElement>;
      'wv-feed-list': LocalJSX.WvFeedList & JSXBase.HTMLAttributes<HTMLWvFeedListElement>;
    }
  }
}


