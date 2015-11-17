import React from 'react';
import WinTeaser from './';

const today = new Date();
export default (
  <div>
    <WinTeaser
      image={{
        sources: [
          { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
          { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
          { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
          { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
          { url: 'https://placehold.it/1280x720', width: 640, height: 360, dppx: 2 },
          { url: 'https://placehold.it/640x470', width: 640, height: 360, dppx: 1 },
          { url: 'https://placehold.it/1024x768', width: 512, height: 384, dppx: 2 },
          { url: 'https://placehold.it/512x384', width: 512, height: 384, dppx: 1 },
          { url: 'https://placehold.it/768x768', width: 384, height: 384, dppx: 2 },
          { url: 'https://placehold.it/384x288', width: 384, height: 384, dppx: 1 },
          { url: 'https://placehold.it/512x768', width: 256, height: 384, dppx: 2 },
          { url: 'https://placehold.it/256x384', width: 256, height: 384, dppx: 1 },
        ],
        alt:"this is the image description",
      }}
      variantName= "hero"
      section="International"
      title="An example of a hero teaser"
      dateTime={today}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam."
      itemType=""
      itemProp=""
      teaserId={""}
    />
    <WinTeaser
      image={{
        sources: [
          { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
          { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
          { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
          { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
          { url: 'https://placehold.it/1280x720', width: 640, height: 360, dppx: 2 },
          { url: 'https://placehold.it/640x470', width: 640, height: 360, dppx: 1 },
          { url: 'https://placehold.it/1024x768', width: 512, height: 384, dppx: 2 },
          { url: 'https://placehold.it/512x384', width: 512, height: 384, dppx: 1 },
          { url: 'https://placehold.it/768x768', width: 384, height: 384, dppx: 2 },
          { url: 'https://placehold.it/384x288', width: 384, height: 384, dppx: 1 },
          { url: 'https://placehold.it/512x768', width: 256, height: 384, dppx: 2 },
          { url: 'https://placehold.it/256x384', width: 256, height: 384, dppx: 1 },
        ],
        alt:"this is the image description",
      }}
      variantName= "default"
      section="International"
      title="An example of a default teaser"
      dateTime={today}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam."
      link={{
        href: `http://www.economist.com/blogs/erasmus/2015/09/un-religion-and-development-0`,
      }}
      itemType=""
      itemProp=""
      teaserId={""}
    />
  </div>
);
