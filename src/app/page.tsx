import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Button>Click</Button>
            <Button variant="destructive">destructive</Button>
            <Button variant="warning">warning</Button>
            <Button variant="info">info</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="link">link</Button>
            <Button variant="ghost">ghost</Button>
            <Button variant="outline">outline</Button>
        </div>
    );
}
