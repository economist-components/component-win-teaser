import WinTeaser from '../index.es6';
import React from 'react';
import TestUtils from 'react-addons-test-utils';


describe(`A teaser`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      WinTeaser.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(
        <WinTeaser
          variantName="default"
          title="Required"
          teaserId={'1'}
        />).should.equal(true);
    });
  });
  describe(`Expose a set of propTypes`, () => {
    it(`it renders a section`, () => {
      const teaser = TestUtils.renderIntoDocument(
        <WinTeaser
          variantName="default"
          section="section"
          title="Required"
          teaserId={'1'}
          image={{
            sources: [],
            alt: '',
          }}
        />
      );
      const elm = TestUtils.findRenderedDOMComponentWithClass(
      teaser, 'teaser__section');
      elm.props.className.should.be.equal('teaser__section');
      elm.props.children.should.be.equal('section');
    });
    it(`it renders a title`, () => {
      const teaser = TestUtils.renderIntoDocument(
        <WinTeaser
          variantName="default"
          section="section"
          title="title"
          teaserId={'1'}
          image={{
            sources: [],
            alt: '',
          }}
        />
      );
      const elm = TestUtils.findRenderedDOMComponentWithClass(
      teaser, 'teaser__title');
      elm.props.className.should.be.equal('teaser__title');
      elm.props.children.should.be.equal('title');
    });
    it(`it renders a dateTime`, () => {
      const today = new Date();
      function dateFormat(date) {
        return date.toString();
      }
      const teaser = TestUtils.renderIntoDocument(
        <WinTeaser
          variantName="default"
          dateTime={today}
          title="Required"
          teaserId={'1'}
          dateFormat={dateFormat}
          image={{
            sources: [],
            alt: '',
          }}
        />
      );
      const elm = TestUtils.findRenderedDOMComponentWithClass(
      teaser, 'teaser__datetime');
      elm.props.className.should.be.equal('teaser__datetime');
      elm.props.children.should.be.equal(today.toString());
    });
    it(`it renders a text`, () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(
        <WinTeaser
          variantName="default"
          text="WinTeaser text"
          title="Required"
          teaserId={'1'}
          image={{
            sources: [],
            alt: '',
          }}
        />
      );
      const teaser = renderer.getRenderOutput();
      const textProps = teaser.props.children.props.children[1].props.children[0].props;
      textProps.className.should.equal('teaser__text');
      /* eslint-disable no-underscore-dangle */
      textProps.dangerouslySetInnerHTML.__html.should.equal('WinTeaser text');
      /* eslint-enable no-underscore-dangle */
    });
    it(`it renders an image`, () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(
        <WinTeaser
          variantName="default"
          title="Required"
          teaserId={'1'}
          image={{
            sources: [
              { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
            ],
            alt: 'this is the image description',
          }}
        />
      );

      const teaser = renderer.getRenderOutput();
      const imageProps = teaser.props.children.props.children[0][0].props.children[0].props;
      imageProps.className.should.be.equal('teaser__img');
      imageProps.sources[0].url.should.be.equal('https://placehold.it/896x504');
      imageProps.alt.should.be.equal('this is the image description');
    });
    it(`it renders a link`, () => {
      const teaser = TestUtils.renderIntoDocument(
        <WinTeaser
          link={{ href: `http://www.economist.com` }}
          title="Required"
          teaserId={'1'}
          image={{
            sources: [],
            alt: '',
          }}
        />);
      const elm = TestUtils.findRenderedDOMComponentWithClass(
      teaser, 'teaser__link');
      elm.props.className.should.be.equal('teaser__link');
      elm.props.href.should.be.equal('http://www.economist.com');
    });
  });
});
