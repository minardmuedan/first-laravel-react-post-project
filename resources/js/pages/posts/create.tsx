import FormError from "@/components/form-error";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@inertiajs/react";

export default function CreatePostPage() {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Create a Post</CardTitle>
                <CardDescription>Fill up required values</CardDescription>
            </CardHeader>

            <CardContent>
                <Form action="/posts" method="post" className="space-y-6">
                    {({ processing, errors }) => (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="Input some title..."
                                />
                                <FormError message={errors.title} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    name="content"
                                    placeholder="Lorem ipsum dolor sit amet."
                                ></Textarea>
                                <FormError message={errors.content} />
                            </div>

                            <Button
                                type="submit"
                                disabled={processing}
                                className="w-full"
                            >
                                {processing ? "Creating ..." : "Create"}
                            </Button>
                        </>
                    )}
                </Form>
            </CardContent>
        </Card>
    );
}
