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
import { PropsWithChildren, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
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
import { type InputProps } from "@/registry/new-york/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import PasswordInput from "./passwordinput"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/default/ui/command"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs"

// export interface DockProps extends VariantProps<typeof dockVariants> {
//   className?: string;
//   magnification?: number;
//   distance?: number;
//   direction?: "top" | "middle" | "bottom";
//   children: React.ReactNode;
// }

// const DEFAULT_MAGNIFICATION = 60;
// const DEFAULT_DISTANCE = 140;

// const dockVariants = cva(
//   "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto flex h-[58px] w-full items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md",
// );

// export interface DockIconProps {
//   size?: number;
//   magnification?: number;
//   distance?: number;
//   mouseX?: any;
//   className?: string;
//   children?: React.ReactNode;
//   props?: PropsWithChildren;
// }
// const Dock = React.forwardRef<HTMLDivElement, DockProps>(
//   (
//     {
//       className,
//       children,
//       magnification = DEFAULT_MAGNIFICATION,
//       distance = DEFAULT_DISTANCE,
//       direction = "bottom",
//       ...props
//     },
//     ref,
//   ) => {
//     const mouseX = useMotionValue(Infinity);

//     const renderChildren = () => {
//       return React.Children.map(children, (child) => {
//         if (React.isValidElement(child) && child.type === DockIcon) {
//           return React.cloneElement(child, {
//             ...child.props,
//             mouseX: mouseX,
//             magnification: magnification,
//             distance: distance,
//           });
//         }
//         return child;
//       });
//     };

//     return (
//       <motion.div
//         ref={ref}
//         onMouseMove={(e) => mouseX.set(e.pageX)}
//         onMouseLeave={() => mouseX.set(Infinity)}
//         {...props}
//         className={cn(dockVariants({ className }), {
//           "items-start": direction === "top",
//           "items-center": direction === "middle",
//           "items-end": direction === "bottom",
//         })}
//       >
//         {renderChildren()}
//       </motion.div>
//     );
//   },
// );

// Dock.displayName = "Dock";



// const DockIcon = ({
//   size,
//   magnification = DEFAULT_MAGNIFICATION,
//   distance = DEFAULT_DISTANCE,
//   mouseX,
//   className,
//   children,
//   ...props
// }: DockIconProps) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const distanceCalc = useTransform(mouseX, (val: number) => {
//     const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

//     return val - bounds.x - bounds.width / 2;
//   });

//   let widthSync = useTransform(
//     distanceCalc,
//     [-distance, 0, distance],
//     [40, magnification, 40],
//   );

//   let width = useSpring(widthSync, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width }}
//       className={cn(
//         "flex aspect-square cursor-pointer items-center justify-center rounded-full",
//         className,
//       )}
//       {...props}
//     >
//       {children}
//     </motion.div>
//   );
// };

// DockIcon.displayName = "DockIcon";


export default function Authentication03() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  return (
    <>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* <Card className="mx-auto max-w-[400px] space-x-1 p-0">
        <CardHeader>
          <Image
            className="mx-auto rounded-full border"
            src="/manfromexistence.png"
            alt="Auth"
            width={75}
            height={75}
          />
          <CardTitle className="w-full text-center text-4xl">Login</CardTitle>
          <CardDescription className="w-full text-center ">
            Select your web2 provider to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Command className="max-w-full rounded-lg border shadow-md">
            <CommandInput placeholder="Type a provider or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem disabled>
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CardContent>
        <CardFooter className="m-0 flex flex-col gap-2">
          <div className="relative flex h-16 w-full items-center justify-center">
            <Dock magnification={60} distance={100}>
              <DockIcon className="rounded-full bg-primary-foreground hover:bg-secondary hover:text-secondary-foreground">
                <Contact className="h-4 w-4" />
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
            </Dock>
          </div>
        </CardFooter>
      </Card> */}
      {/*
      <Card className="mx-auto max-w-[400px] space-x-1 p-0">
        <CardHeader>
          <Image
            className="mx-auto rounded-full border"
            src="/manfromexistence.png"
            alt="Auth"
            width={75}
            height={75}
          />
          <CardTitle className="w-full text-center text-4xl">Login</CardTitle>
          <CardDescription className="w-full text-center ">
            Enter your email below to login to your account.
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
            <Label htmlFor="current_password">Password</Label>
            <PasswordInput
              placeholder="password"
              id="current_password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
        </CardContent>
        <CardFooter className="m-0 flex flex-col gap-2">
          <Button className="w-full">Sign in</Button>
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
      </Dock>
    </div>
        </CardFooter>
      </Card> */}
      <div className="mt-4 text-center text-sm">
        Dont&apos;t have an account?{" "}
        <Link href="#" className="underline">
          Sign up
        </Link>
      </div>
    </>
  )
}



{/* <CardDescription className="grid grid-cols-3 gap-2">
            <Languages />
            <Narrators />
            <Accents />
          </CardDescription> */}


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
