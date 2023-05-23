import React from 'react'
import { tw } from 'typewind'
 
export const Box = (
  { children }: { children: React.ReactNode }
) => (
  <div className={tw.p_small.text_none
    .mobile(tw.bg_info)
    .tablet(tw.bg_success)
    .desktop(tw.bg_info.p_large)
  }>
    {children}
  </div>
)
