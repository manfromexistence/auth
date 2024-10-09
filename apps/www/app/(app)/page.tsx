"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Bot,
  Check,
  ChevronsUpDown,
  Contact,
  Earth,
  EarthLock,
  EyeIcon,
  EyeOffIcon,
  Fingerprint,
  Gem,
  Key,
  NotebookTabs,
  QrCode,
  Shapes,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { Dock, DockIcon } from "@/components/dock"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import { Button } from "@/registry/new-york/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york/ui/command"
import { type InputProps } from "@/registry/new-york/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/registry/new-york/ui/carousel"

export function CarouselDApiDemo() {
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
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}




export type IconProps = React.HTMLAttributes<SVGElement>
const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const disabled =
      props.value === "" || props.value === undefined || props.disabled
    // const words = "Staggered Letter Pull Up"
    // const letters = words.split("")

    // const pullupVariant = {
    //   initial: { y: 100, opacity: 0 },
    //   animate: (i: any) => ({
    //     y: 0,
    //     opacity: 1,
    //     transition: {
    //       delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
    //     },
    //   }),
    // }
    // {letters.map((letter, i) => (
    //   <motion.h1
    //     key={i}
    //     variants={pullupVariant}
    //     initial="initial"
    //     animate="animate"
    //     custom={i}
    //     className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    //   >
    //     {letter === " " ? <span>&nbsp;</span> : letter}
    //   </motion.h1>
    // ))}

    return (
      <div className="relative">
        <Input
          placeholder={placeholder ? placeholder : "password 1 👌"}
          type={showPassword ? "text" : "password"}
          className={cn("hide-password-toggle pr-10", className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
        >
          {showPassword && !disabled ? (
            <EyeIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"

function AuthOptions() {
  return (
    <div className="relative flex h-16 w-full items-center justify-center">
      <Dock magnification={60} distance={100}>
        <DockIcon className="rounded-full bg-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
          <Earth className="h-4 w-4" />
        </DockIcon>
        <DockIcon className="rounded-full bg-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
          <EarthLock className="h-4 w-4" />
        </DockIcon>
        <DockIcon className="rounded-full bg-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
          <QrCode className="h-4 w-4" />
        </DockIcon>
        <DockIcon className="rounded-full bg-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
          <Key className="h-4 w-4" />
        </DockIcon>
        <DockIcon className="rounded-full bg-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
          <Fingerprint className="h-4 w-4" />
        </DockIcon>
        <DockIcon className="rounded-full bg-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
          <Shapes className="h-4 w-4" />
        </DockIcon>
        <DockIcon className="rounded-full bg-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
          <NotebookTabs className="h-4 w-4" />
        </DockIcon>
        {/* <DockIcon className="rounded-full bg-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
          <Contact className="h-4 w-4" />
        </DockIcon>  */}
      </Dock>
    </div>
  )
}

const languages = [
  {
    value: "eng",
    label: "English",
  },
  {
    value: "hd",
    label: "Hindi",
  },
  {
    value: "bn",
    label: "Bangla",
  },
  {
    value: "jp",
    label: "Japanese",
  },
  {
    value: "ar",
    label: "Arabic",
  },
]
const narrators = [
  {
    value: "jarvis",
    label: "Jarvis",
  },
  {
    value: "edit",
    label: "Edit",
  },
]

const accents = [
  {
    value: "captain jack sparow",
    label: "Captain Jack Sparow",
  },
  {
    value: "tony stark",
    label: "Tony Stark",
  },
]

export function Languages() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value
            ? languages.find((languages) => languages.value === value)?.label
            : "Lang..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search languages..." />
          <CommandList>
            <CommandEmpty>No languages found.</CommandEmpty>
            <CommandGroup>
              {languages.map((languages) => (
                <CommandItem
                  key={languages.value}
                  value={languages.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === languages.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {languages.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
export function Narrators() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between truncate"
        >
          {value
            ? narrators.find((narrators) => narrators.value === value)?.label
            : "Narrators"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search narrators..." />
          <CommandList>
            <CommandEmpty>No narrators found.</CommandEmpty>
            <CommandGroup>
              {narrators.map((narrators) => (
                <CommandItem
                  key={narrators.value}
                  value={narrators.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === narrators.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {narrators.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
export function Accents() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value
            ? accents.find((accents) => accents.value === value)?.label
            : "Accents"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search accents..." />
          <CommandList>
            <CommandEmpty>No accents found.</CommandEmpty>
            <CommandGroup>
              {accents.map((accents) => (
                <CommandItem
                  key={accents.value}
                  value={accents.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === accents.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {accents.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default function IndexPage() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  return (
    <div className="container relative flex h-screen flex-col items-center justify-center">
      {/* <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your authenticaton library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed authenticaton components that you can copy and
          paste into your apps.
        </PageHeaderDescription>
      </PageHeader> */}

      <Card className="w-full max-w-[430px] space-x-1 p-0">
        <CardHeader>
          <Image
            className="mx-auto rounded-full border"
            src="/manfromexistence.png"
            alt="Auth"
            width={85}
            height={85}
          />
          <CardTitle className="w-full text-center text-4xl">Login</CardTitle>
          <CardDescription className="grid grid-cols-3 gap-2">
            <Languages />
            <Narrators />
            <Accents />
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="manfromexistence@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            {/* <Label htmlFor="password">Password</Label>
            <Input
              placeholder="password 👌"
              id="password"
              type="password"
              required
            /> */}
            <Label htmlFor="current_password">Password</Label>
            <PasswordInput
              placeholder="password ✅"
              id="current_password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
        </CardContent>
        <CardFooter className="m-0 flex flex-col gap-2">
          <Button className="w-full">Sign in</Button>
          <AuthOptions />
        </CardFooter>
      </Card>
      <div className="mt-4 text-center text-sm">
        Dont&apos;t have an account?{" "}
        <Link href="#" className="underline">
          Sign up
        </Link>
      </div>
      <CarouselDApiDemo />
    </div>
  )
}

{
  /* <DockIcon className="rounded-full bg-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
          <Bot className="h-4 w-4" />
        </DockIcon>
*/
}
