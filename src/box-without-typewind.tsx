import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants';
 
const box = tv({
  base: 'p-small text-none',
  variants: {
    foo: {
      error: 'bg-error',
      success: 'bg-success',
      info: 'bg-info p-large',
    },
    ghost: {
      true: 'opacity-30',
    },
  },
  defaultVariants: {
    foo: 'error',
  },
}, {
  responsiveVariants: true
})

type BoxVariants = VariantProps<typeof box>

export const Box = (
  { children, foo, ghost }: { children: React.ReactNode } & BoxVariants
) => (
  <div className={box({ foo, ghost })}>
    {children}
  </div>
)
