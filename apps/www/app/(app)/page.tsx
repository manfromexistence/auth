"use client"

import React from "react"
import {
  Card,
  CardContent,
} from "@/registry/default/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/registry/new-york/ui/carousel"
import Authentication from "@/components/authentication"
import { CopyButton } from "@/components/copy-button"

export default function IndexPage() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div className="container">
      <div className="w-full">
        <Carousel setApi={setApi} className="relative flex h-screen w-full select-none items-center justify-center">
          <CarouselContent>
            <CarouselItem >
              <Authentication />
            </CarouselItem>
          </CarouselContent>
          {/* <div className="absolute bottom-4 left-0 grid w-full grid-cols-3">
            <div>
              <CopyButton value={"auth"} />
            </div>
            <div className="flex w-full items-center justify-center space-x-2">
              <div className="hover-bg-primary h-3.5 w-3.5 rounded-full border-[3px] border-primary"></div>
              <div className="hover-bg-primary h-3.5 w-3.5 rounded-full border-[3px] border-primary"></div>
              <div className="hover-bg-primary h-3.5 w-3.5 rounded-full border-[3px] border-primary"></div>
              <div className="group relative cursor-pointer ">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-600 to-violet-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="items-top relative flex h-3.5 w-3.5 justify-start space-x-6 rounded-full border-[3px] border-primary leading-none ring-1 ring-gray-900/5"></div>
              </div>
            </div>
            <span className="rounded-sm bg-primary-foreground p-2 text-xs text-primary">
              npx shadcn manfromexistence/auth
            </span>
          </div> */}
        </Carousel>

      </div>
    </div>
  )
}

