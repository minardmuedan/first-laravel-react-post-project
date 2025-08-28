import { Button } from "@/components/ui/button";
import { Form, Link, router } from "@inertiajs/react";

export default function PostDetails({
    post,
}: {
    post: { id: number; title: string; content: string; created_at: string };
}) {
    return (
        <section>
            <Link
                href="/"
                className="font-medium text-muted-foreground underline underline-offset-5"
            >
                {"<"} back
            </Link>
            <p className="text-2xl font-medium opacity-25 mb-5 mt-8">
                {post.id}
            </p>

            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="opacity-75 max-w-2xl">{post.content}</p>

            <p className=" text-sm opacity-50 mt-5">
                {new Date(post.created_at).toLocaleTimeString()}
            </p>

            <div className="flex gap-2 mt-5">
                <Button type="submit" asChild>
                    <Link href={`/posts/${post.id}/edit`}>EDIT THIS POST</Link>
                </Button>

                <Form action={`/posts/${post.id}`} method="delete">
                    {({ processing }) => (
                        <Button
                            type="submit"
                            variant="destructive"
                            disabled={processing}
                        >
                            {processing ? "DELETING..." : "DELETE THIS POST"}
                        </Button>
                    )}
                </Form>
            </div>
        </section>
    );
}
