"use client";

import { useState } from "react";

import SignInForm from "@/app/(auth)/_components/sign-in-form";
import SignUpForm from "@/app/(auth)/_components/sign-up-form";

export default function LoginPage() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="flex bg-muted/20 min-h-[calc(100svh-64px)] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {showSignIn ? (
          <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
        ) : (
          <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
        )}
      </div>
    </div>
  );
}
