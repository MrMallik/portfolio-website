import * as React from "react";
import { cn } from "@/lib/utils";


type TimelineSize = "sm" | "md" | "lg";
type TimelineColor = "primary" | "secondary" | "muted" | "accent";


const dotSizeClasses: Record<TimelineSize, string> = {
    sm: "size-3",
    md: "size-4",
    lg: "size-5",
};

const iconSizeClasses: Record<TimelineSize, string> = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12",
};

const colorClasses: Record<TimelineColor, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    muted: "bg-muted",
    accent: "bg-accent",
};

const connectorColorClasses: Record<TimelineColor, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    muted: "bg-muted",
    accent: "bg-accent",
};


interface TimelineContextValue {
    size: TimelineSize;
}

const TimelineContext = React.createContext<TimelineContextValue>({
    size: "md",
});

const useTimelineContext = () => React.useContext(TimelineContext);


interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
    size?: TimelineSize;
}

const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(
    ({ className, size = "md", children, ...props }, ref) => (
        <TimelineContext.Provider value={{ size }}>
            <ol
                ref={ref}
                className={cn("flex flex-col", className)}
                {...props}
            >
                {children || (
                    <li className="text-muted-foreground text-sm">
                        No timeline items to display
                    </li>
                )}
            </ol>
        </TimelineContext.Provider>
    )
);
Timeline.displayName = "Timeline";


interface TimelineItemProps extends React.HTMLAttributes<HTMLLIElement> {
    date?: string;
    title: string;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    iconColor?: TimelineColor;
    connectorColor?: TimelineColor;
    showConnector?: boolean;
}

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
    (
        {
            className,
            date,
            title,
            description,
            icon,
            iconColor = "primary",
            connectorColor = "muted",
            showConnector = true,
            children,
            ...props
        },
        ref
    ) => {
        const { size } = useTimelineContext();

        return (
            <li
                ref={ref}
                className={cn("relative flex gap-4 pb-8 last:pb-0", className)}
                {...props}
            >
                <div className="flex flex-col items-center">
                    {icon ? (
                        <div
                            className={cn(
                                "flex items-center justify-center rounded-full border border-border bg-background text-foreground shrink-0",
                                iconSizeClasses[size]
                            )}
                        >
                            {icon}
                        </div>
                    ) : (
                        <div
                            className={cn(
                                "rounded-full shrink-0 mt-1.5",
                                dotSizeClasses[size],
                                colorClasses[iconColor]
                            )}
                        />
                    )}
                    {showConnector && (
                        <div
                            className={cn(
                                "w-px flex-1 min-h-[24px]",
                                connectorColorClasses[connectorColor]
                            )}
                        />
                    )}
                </div>

                <div className="flex-1 min-w-0 pb-2">
                    {date && (
                        <time className="text-xs text-muted-foreground mb-1 block">
                            {date}
                        </time>
                    )}
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                        {title}
                    </h3>
                    {description && (
                        <div className="mt-1 text-sm text-muted-foreground">
                            {description}
                        </div>
                    )}
                    {children}
                </div>
            </li>
        );
    }
);
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
export type { TimelineProps, TimelineItemProps, TimelineSize, TimelineColor };
