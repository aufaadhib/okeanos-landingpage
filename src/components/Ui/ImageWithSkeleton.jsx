import React, { useState } from 'react'

const skeletonClassName =
  'absolute inset-0 animate-pulse bg-slate-200 motion-reduce:animate-none'

export function ImageWithSkeleton({
  alt,
  className = '',
  wrapperClassName = '',
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError,
  ...rest
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = (event) => {
    setIsLoaded(true)
    onLoad?.(event)
  }

  const handleError = (event) => {
    setHasError(true)
    setIsLoaded(true)
    onError?.(event)
  }

  return (
    <div
      className={`overflow-hidden ${wrapperClassName}`}
      aria-busy={!isLoaded}
    >
      {!isLoaded && <div aria-hidden="true" className={skeletonClassName} />}
      {hasError ? (
        <div
          role="img"
          aria-label={alt}
          className="relative flex h-full w-full items-center justify-center bg-slate-200 px-4 text-center text-sm text-slate-500"
        >
          Gambar tidak tersedia
        </div>
      ) : (
        <img
          {...rest}
          src={rest.src}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={handleLoad}
          onError={handleError}
          className={`relative z-10 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      )}
    </div>
  )
}
