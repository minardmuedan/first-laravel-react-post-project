import { Link, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

type Props = {
    posts: {
        id: number;
        title: string;
        content: string;
        created_at: string;
    }[];
};

export default function Posts({ posts }: Props) {
    const { flash } = usePage().props as { flash?: { message?: string } };

    useEffect(() => {
        if (flash?.message) toast.success(flash?.message);
    }, [flash]);

    return (
        <ul className="max-w-2xl space-y-2">
            {posts.map((post) => (
                <li key={post.id}>
                    <Link
                        href={`/posts/${post.id}`}
                        className="p-5 border-b flex items-center gap-8 hover:bg-secondary/50"
                    >
                        <p className="text-2xl font-medium opacity-25">
                            {post.id}
                        </p>

                        <div className="flex-1">
                            <p className="font-medium mb-1">{post.title}</p>
                            <p className="text-sm text-muted-foreground">
                                {post.content}
                            </p>
                        </div>

                        <p className="self-start text-xs opacity-50">
                            {new Date(post.created_at).toLocaleTimeString()}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
