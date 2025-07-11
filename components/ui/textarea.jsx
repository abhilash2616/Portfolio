import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "bg-[#202020] placeholder:text-[#747474a8] text-white flex h-[120px] w-full rounded-md border border-[#ffc91773] px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#ffc917] focus:border-[#ffc917] transition-all duration-300",
        className
      )}
      {...props} />
  );
}

export { Textarea }
