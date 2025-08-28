export default function FormError({ message }: { message?: string }) {
    if (!message) return;
    return <p className="font-medium text-sm text-destructive">{message}</p>;
}
