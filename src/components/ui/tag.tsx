import { cn } from "@/lib/utils";

export interface TagProps {
    children: React.ReactNode;
    className?: string;
}

export default function Tag({ children, className }: Readonly<{ children: React.ReactNode, className: string }>) {
    return (
        <div className={cn(
            'border px-4 py-1 rounded-full w-min flex items-center gap-2 font-semibold',
            className
        )}>
            {children}
        </div>
    );
}