"use client";

import { useActionState } from "react";
import { authenticate } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
    const [errorMessage, dispatch, isPending] = useActionState(
        authenticate,
        undefined
    );

    return (
        <form action={dispatch} className="flex flex-col gap-4 w-full">
            <input type="hidden" name="redirectTo" value="/" />
            <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    required
                    autoComplete="username"
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="*******"
                    required
                    minLength={6}
                    autoComplete="current-password"
                />
            </div>
            <div aria-live="polite" aria-atomic="true">
                {errorMessage && (
                    <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
                )}
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                    </>
                ) : (
                    "Sign in"
                )}
            </Button>
        </form>
    );
}
