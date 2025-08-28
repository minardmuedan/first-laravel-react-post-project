import FormError from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@inertiajs/react";

type Props = {
    post: {
        id: number;
        title: string;
        content: string;
        created_at: string;
    };
};

export default function EditPostPage({ post }: Props) {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Edit a Post</CardTitle>
            </CardHeader>

            <CardContent>
                <Form
                    action={`/posts/${post.id}`}
                    method="patch"
                    className="space-y-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="Input some title..."
                                    defaultValue={post.title}
                                />
                                <FormError message={errors.title} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    name="content"
                                    placeholder="Lorem ipsum dolor sit amet."
                                    defaultValue={post.content}
                                ></Textarea>
                                <FormError message={errors.content} />
                            </div>

                            <Button
                                type="submit"
                                disabled={processing}
                                className="w-full"
                            >
                                {processing ? "Updating ..." : "Update"}
                            </Button>
                        </>
                    )}
                </Form>
            </CardContent>
        </Card>
    );
}
