"use client"

interface MarqueeScrollProps {
  items?: string[]
}

export default function MarqueeScroll({ items }: MarqueeScrollProps) {
  const content = "limited seats only--- admissions available "
  const duplicatedContent = content.repeat(20)

  return (
    <div className="overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-4">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        <span className="text-lg font-semibold text-foreground/70">
          {duplicatedContent}
        </span>
      </div>
    </div>
  )
}