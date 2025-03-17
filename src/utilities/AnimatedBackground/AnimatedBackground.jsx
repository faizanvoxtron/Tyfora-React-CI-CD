import React, { forwardRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = forwardRef(
  (
    {
      children,
      className = '',
      active = false,
      isInner = false, // New Prop: Switch Backgrounds
      bgColor, // Removed default value (set dynamically)
      bgSize = 'cover',
      bgSizeMob = 'cover',
      noGrid = false,
      showBlob = true, // New Prop: Controls blob visibility
    },
    ref
  ) => {
    const backgroundImage = isInner ? '/inner-hero.png' : '/cube.png';
    const computedBgColor = bgColor || (isInner ? 'bg-innerBg' : 'bg-whiteBg');

    return (
      <div
        ref={ref}
        className={`${!noGrid ? 'animated-background' : ''} ${computedBgColor} ${active ? 'active' : ''} ${className}`}
        data-show-blob={showBlob} // Pass to CSS for conditional blobs
        style={{
          '--bg-image': `url(${backgroundImage})`,
          '--bg-size': bgSize,
          '--bg-size-mob': bgSizeMob,
        }}
      >
        {children}
      </div>
    );
  }
);

export default AnimatedBackground;
