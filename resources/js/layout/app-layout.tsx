import { Link } from "@inertiajs/react";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Toaster position="top-center" theme="light" richColors />

            <header className="z-50 sticky top-0 bg-white/20 backdrop-blur-xs h-14 flex items-center justify-between px-3 md:px-5 border-b">
                <Link href="/">Home</Link>

                <nav>
                    <Button asChild>
                        <Link href="/posts/create">create post</Link>
                    </Button>
                </nav>
            </header>

            <main className="min-h-[calc(100dvh-3.5rem)] flex items-center justify-center py-5 px-3 md:px-5">
                {children}
            </main>
        </>
    );
}
