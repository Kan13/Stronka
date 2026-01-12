export default function Gap({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const map = { sm: "h-4", md: "h-6", lg: "h-8", xl: "h-12" };
  return <div className={map[size]} aria-hidden="true" />;
}