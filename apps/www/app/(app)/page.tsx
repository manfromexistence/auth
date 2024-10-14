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
import Authentication03 from "@/components/authentication-03"

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
    <div className="container relative">
      <div className="w-full">
        <Carousel setApi={setApi} className="flex h-[85vh] w-full items-center justify-center">
          <CarouselContent>
            <CarouselItem >
              <Authentication03 />
            </CarouselItem>
            <CarouselItem >
              <Authentication03 />
            </CarouselItem>
            <CarouselItem >
              <Authentication03 />
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  )
}

