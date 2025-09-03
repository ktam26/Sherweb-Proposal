import React, { forwardRef } from 'react';
import * as Headless from '@headlessui/react';
// ... rest of the file from theme-package/components/link.tsx ... 

export const Link = forwardRef(function Link(
  props: React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <Headless.DataInteractive>
      <a ref={ref} {...props} />
    </Headless.DataInteractive>
  );
}); 