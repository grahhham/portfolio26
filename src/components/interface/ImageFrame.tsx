import React, { Component } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageFrameProps extends Omit<ImageProps, 'loading'> {
  // Option to explicitly enable/disable lazy loading
  shouldLazyLoad?: boolean;
  className?: string;
}

interface ImageFrameState {
  isLoading: boolean;
  hasError: boolean;
}

class ImageFrame extends Component<ImageFrameProps, ImageFrameState> {
  constructor(props: ImageFrameProps) {
    super(props);
    this.state = {
      isLoading: true,
      hasError: false,
    };
  }

  handleLoad = () => {
    this.setState({ isLoading: false });
  };

  handleError = () => {
    this.setState({ isLoading: false, hasError: true });
  };

  render() {
    const { src, alt, shouldLazyLoad = true, width, height, className, ...rest } = this.props;
    const { isLoading, hasError } = this.state;

    // Use "eager" if shouldLazyLoad is false, otherwise default to "lazy"
    const loadingStrategy = shouldLazyLoad ? 'lazy' : 'eager';

    return (
      <>
        {/* Skeleton Loader: Displayed only while loading */}
        {isLoading && !hasError && (
          <div className={`img-skeleton ${className}`} />
        )}

        {/* Fallback Alt Text: Displayed if image fails to load */}
        {hasError ? (
          <div className={`img-error ${className}`}>
            {alt || 'Image failed to load'}
          </div>
        ) : (
          <Image
            {...rest}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loadingStrategy}
            onLoad={this.handleLoad}
            onError={this.handleError}
            // Ensure the image stays hidden until loaded to prevent flash
            className={`${className} ${isLoading ? ' hidden' : ''}`}
          />
        )}
      </>
    );
  }
}

export default ImageFrame;