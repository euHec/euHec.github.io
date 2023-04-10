import { Component } from 'react';

export default class Icon extends Component {
  render() {
    const { link, label, icon } = this.props;
    return (
      <a
        href={ link }
        aria-label={ label }
        target="_blank"
        rel="noopener noreferrer"
      >
        { icon }
      </a>
    );
  }
}