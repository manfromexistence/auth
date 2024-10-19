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

export default function Authentication() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  return (
    <>
      <Tabs defaultValue="www" className="w-[375px]">
        <TabsContent value="www">
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
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="web3">
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
                Select your web3 provider.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 py-0">
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
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsList className="supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-2 flex h-[58px] w-full grid-cols-2 items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md">
          <TabsTrigger value="www">
            <NotebookTabs className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="web2">
            <Earth className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="web3">
            <EarthLock className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="qr-code">
            <QrCode className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="auth-code">
            <Key className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="biometric">
            <Fingerprint className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="pattern">
            <Shapes className="h-4 w-4" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="mt-4 text-center text-sm">
        Dont&apos;t have an account?{" "}
        <Link href="#" className="underline">
          Sign up
        </Link>
      </div>
    </>
  )
}
