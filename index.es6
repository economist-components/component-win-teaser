import React from 'react';
import Picture from '@economist/component-picture';

export default class WinTeaser extends React.Component {
  static get propTypes() {
    return {
      teaserId: React.PropTypes.string.isRequired,
      image: React.PropTypes.shape({
        sources: React.PropTypes.array,
        itemProp: React.PropTypes.string,
        className: React.PropTypes.string,
        alt: React.PropTypes.string,
      }),
      section: React.PropTypes.string,
      flyTitle: React.PropTypes.string,
      title: React.PropTypes.string.isRequired,
      variantName: React.PropTypes.string,
      dateTime: React.PropTypes.instanceOf(Date),
      dateFormat: React.PropTypes.instanceOf(Function),
      text: React.PropTypes.string,
      link: React.PropTypes.shape({
        itemProp: React.PropTypes.string,
        className: React.PropTypes.string,
      }),
      itemType: React.PropTypes.string,
      itemProp: React.PropTypes.string,
    };
  }
  static get defaultProps() {
    return {
      itemType: 'http://schema.org/Article',
      itemProp: 'article',
      dateFormat: (date) => {
        date = new Date(date);
        // Sep 19th 2015, 9:49
        function addPostFix(day) {
          const daystr = day.toString();
          const lastChar = daystr.charAt(daystr.length - 1);
          let postFix = '';
          switch (lastChar) {
            case '1':
              postFix = 'st';
              break;
            case '2':
              postFix = 'nd';
              break;
            case '3':
              postFix = 'rd';
              break;
            default:
              postFix = 'th';
              break;
          }
          return `${day}${postFix}`;
        }
        const shortMonthList = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
        let minutes = date.getMinutes() < 10 ? '0' : '';
        minutes += date.getMinutes();
        return `${shortMonthList[date.getMonth()]}
                ${addPostFix(date.getDay())}
                ${date.getFullYear()},
                ${date.getHours()}:${minutes}`;
      },
    };
  }
  render() {
    const teaserContent = [];
    const imageContent = [];
    if (this.props.variantName === 'hero') {
      imageContent.push((
        <div className="teaser__group-image" key={`teaser__img_${this.props.teaserId}`}>
          <Picture {...this.props.image}
            itemProp="image"
            className="teaser__img"
          />
          <div className="teaser__image-text-container">
          <h1
            className="teaser__title"
            itemProp="headline"
            key={`teaser__title_${this.props.teaserId}`}
          >{this.props.title}
          </h1>
          <div
            className="teaser__text"
            itemProp="description"
            key={`teaser__text_${this.props.teaserId}`}
            /* eslint-disable react/no-danger */
            dangerouslySetInnerHTML={{
              '__html': this.props.text,
            }}
            /* eslint-enable react/no-danger */
          />
          </div>
        </div>
      ));
      if (this.props.dateTime) {
        teaserContent.push((
          <time
            className="teaser__datetime"
            itemProp="dateCreated"
            dateTime={this.props.dateTime}
            key={`teaser__datetime_${this.props.teaserId}`}
          >{this.props.dateFormat(this.props.dateTime)}</time>
        ));
      }
      if (this.props.section) {
        teaserContent.push((
          <h3
            className="teaser__section"
            itemProp="section"
            key={`teaser__section_${this.props.teaserId}`}
          >{this.props.section}</h3>
        ));
      }
    } else if (this.props.variantName === 'default') {
      imageContent.push((
        <div className="teaser__group-image" key={`teaser__img_${this.props.teaserId}`}>
          <Picture {...this.props.image}
            itemProp="image"
            className="teaser__img"
          />
          <div className="teaser__image-text-container">
          <h1
            className="teaser__title"
            itemProp="headline"
            key={`teaser__title_${this.props.teaserId}`}
          >{this.props.title}
          </h1>
          </div>
        </div>
      ));
      if (this.props.text) {
        teaserContent.push((
          <div
            className="teaser__text"
            itemProp="description"
            key={`teaser__text_${this.props.teaserId}`}
            /* eslint-disable react/no-danger */
            dangerouslySetInnerHTML={{
              '__html': this.props.text,
            }}
          />
        ));
      }
      if (this.props.dateTime) {
        teaserContent.push((
          <time
            className="teaser__datetime"
            itemProp="dateCreated"
            dateTime={this.props.dateTime}
            key={`teaser__datetime_${this.props.teaserId}`}
          >{this.props.dateFormat(this.props.dateTime)}</time>
        ));
      }
      if (this.props.section) {
        teaserContent.push((
          <h3
            className="teaser__section"
            itemProp="section"
            key={`teaser__section_${this.props.teaserId}`}
          >{this.props.section}</h3>
        ));
      }
    }
    let content = {};
    content = (
      <a {...this.props.link}
        className="teaser__link"
        itemProp="url"
      >{imageContent}
      <div className="teaser__group-text">{teaserContent}</div></a>);
    return (
      <article
        className={`${this.props.variantName}__teaser`}
        itemScope itemType={this.props.itemType} itemProp={this.props.itemProp}
        role="article"
      >{content}</article>
    );
  }
}
