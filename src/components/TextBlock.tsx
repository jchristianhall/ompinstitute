export const TextBlock = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={`text-lg w-full max-w-3xl mb-8 ${className}`}>{children}</p>
  );
};
