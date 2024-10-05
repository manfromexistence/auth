import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
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
import MailPage from "@/app/(app)/examples/mail/page"

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export const iframeHeight = "600px"

export const containerClassName =
  "w-full h-screen flex items-center justify-center px-4"

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your authenticaton library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed authenticaton components that you can copy and
          paste into your apps.
        </PageHeaderDescription>
      </PageHeader>
      {/* <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your details below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="m-0 flex flex-col gap-2">
          <Button className="w-full">Sign in</Button>
          <div className="w-full rounded-md border py-2">options</div>
        </CardFooter>
      </Card> */}
      <div className="mx-auto w-full max-w-sm border rounded-md">
        Auth
      </div>
      <div className="mt-4 text-center text-sm">
        Dont&apos;t have an account?{" "}
        <Link href="#" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  )
}
