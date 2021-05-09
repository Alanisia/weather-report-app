import React from 'react';

export default class SvgIcon extends React.Component {
  render () {
    const iconName = this.props.icon;
    const clazzName = this.props.clazz;
    return (
      <svg>
        <use xlinkHref={iconName} className={clazzName}></use>
      </svg>
    )
  }
}