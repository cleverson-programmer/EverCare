import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", 
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-sm flex flex-col rounded-xl border border-neutral-200 dark:border-white/[0.1] bg-white dark:bg-background p-4 transition duration-200 hover:shadow-xl w-full",
        className
      )}
    >
      {/* O aspect-video mantém a altura baseada na largura da imagem (16:9) */}
      <div className="w-full aspect-video flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900 mb-4">
        {header}
      </div>
      
      <div className="flex flex-col transition duration-200 group-hover/bento:translate-x-1">
        <div className="text-primary mb-1">
          {icon}
        </div>
        <div className="font-sans font-bold text-neutral-700 dark:text-neutral-200 text-base leading-tight">
          {title}
        </div>
        <div className="mt-1 font-sans text-xs font-normal text-neutral-500 dark:text-neutral-400">
          {description}
        </div>
      </div>
    </div>
  );
};
