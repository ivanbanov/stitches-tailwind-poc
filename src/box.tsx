import React from 'react'
import { tw } from 'typewind'
import { tv, type VariantProps } from 'tailwind-variants'
 
const box = tv({
  base: tw.p_small.text_none
    .mobile(tw.p_small)
    .tablet(tw.p_medium)
    .desktop(tw.p_large),
  variants: {
    foo: {
      error: tw.bg_error,
      success: tw.bg_success,
      info: tw.bg_info.p_large,
    },
    ghost: {
      true: tw.opacity_30
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
