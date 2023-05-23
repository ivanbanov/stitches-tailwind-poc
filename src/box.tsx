import React from 'react'
import { tw } from 'typewind'
import { tv, type VariantProps } from 'tailwind-variants'
 
const box = tv({
  base: tw.text_white
    .mobile(tw.p_inset_200)
    .tablet(tw.p_inset_300)
    .desktop(tw.p_inset_400),
  variants: {
    foo: {
      success: tw.bg_green_600
        .desktop(tw.mx_offset_200),
      error: tw.bg_background_danger_prominent
        .desktop(tw.mx_offset_400),
      info: tw.bg_background_primary_prominent
        .desktop(tw.mx_offset_600),
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
