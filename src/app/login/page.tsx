import LoginForm from "@/components/auth/login-form";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Login - Patient Survey Admin",
    description: "Login to access survey reports",
};

export default function LoginPage() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-50">
            <div className="w-full max-w-sm space-y-6 rounded-lg border bg-white p-6 shadow-lg">
                <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="relative h-12 w-40">
                        <Image
                            src="/logo_enterprise.png"
                            alt="Logo"
                            priority
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-primary">
                        Admin Login
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your credentials to access the dashboard
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
