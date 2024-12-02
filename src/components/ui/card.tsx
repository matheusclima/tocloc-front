import { cn } from "@/lib/utils";

export interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className }: Readonly<CardProps>) {
    return (
        <div className={cn(
            'bg-slate-200 shadow-lg rounded-lg p-6',
            className
        )}>
            {children}
        </div>
    );
}