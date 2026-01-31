"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import {
  calculateRenderMetrics,
  DESIGN_ACTUAL_RESOLUTION,
  getRenderCssVariables,
} from "@/lib/utils"

type RenderScaleProviderProps = {
  children: ReactNode
}

const applyCssVariables = (variables: Record<string, string>) => {
  const root = document.documentElement
  Object.entries(variables).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
}

export const RenderScaleProvider = ({
  children,
}: RenderScaleProviderProps) => {
  useEffect(() => {
    if (typeof window === "undefined") return

    const update = () => {
      const metrics = calculateRenderMetrics({
        screen: {
          width: window.screen.width,
          height: window.screen.height,
        },
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        dpr: window.devicePixelRatio || 1,
        design: DESIGN_ACTUAL_RESOLUTION,
      })
      applyCssVariables(getRenderCssVariables(metrics))
    }

    update()
    window.addEventListener("resize", update)
    window.addEventListener("orientationchange", update)
    return () => {
      window.removeEventListener("resize", update)
      window.removeEventListener("orientationchange", update)
    }
  }, [])

  return <>{children}</>
}
