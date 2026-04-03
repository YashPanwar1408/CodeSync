"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CodeIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  const [role, setRole] = useState<"candidate" | "interviewer">("candidate");

  const signInHref = useMemo(() => `/sign-in?role=${role}`, [role]);
  const signUpHref = useMemo(() => `/sign-up?role=${role}`, [role]);

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-500/15 to-emerald-500/15 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl py-12 sm:py-16">
        <Card className="mx-auto max-w-4xl border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60">
          <CardContent className="p-6 sm:p-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <CodeIcon className="size-7 text-emerald-500" />
                <span className="font-mono text-2xl font-semibold tracking-tight">CodeSync</span>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                <Badge variant="secondary">Interview platform for teams</Badge>
                <Badge variant="outline">Theme-aware UI</Badge>
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                A modern way to run
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  technical interviews
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Create calls, collaborate in real-time, and keep everything organized — built to look great in
                both light and dark themes.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3">
                <p className="text-sm text-muted-foreground">Continue as</p>
                <div className="inline-flex items-center rounded-md border bg-background p-1">
                  <Button
                    type="button"
                    size="sm"
                    aria-pressed={role === "candidate"}
                    variant={role === "candidate" ? "secondary" : "ghost"}
                    className={role === "candidate" ? "ring-1 ring-ring" : "text-muted-foreground"}
                    onClick={() => setRole("candidate")}
                  >
                    Candidate
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    aria-pressed={role === "interviewer"}
                    variant={role === "interviewer" ? "secondary" : "ghost"}
                    className={role === "interviewer" ? "ring-1 ring-ring" : "text-muted-foreground"}
                    onClick={() => setRole("interviewer")}
                  >
                    Interviewer
                  </Button>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href={signUpHref}>Create account</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href={signInHref}>Log in</Link>
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                By continuing, you agree to use CodeSync for legitimate interviewing purposes.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Card className="border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Schedule fast</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Set up interviews in minutes with clear details and time slots.
                </CardContent>
              </Card>

              <Card className="border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Meet + code</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Smooth video calls with a focused, distraction-free experience.
                </CardContent>
              </Card>

              <Card className="border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Review easily</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Track interviews and outcomes in a clean dashboard workflow.
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <div className="mx-auto mt-8 max-w-4xl rounded-xl border bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Ready to start?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Sign up to schedule your first interview, or log in to continue.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild className="w-full sm:w-auto">
                <Link href={signUpHref}>Sign up</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href={signInHref}>Log in</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}