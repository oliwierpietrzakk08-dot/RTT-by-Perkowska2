export default function OfferCard({ 
  title, 
  items 
}: { 
  title: string; 
  items: string[] 
}) {
  return (
    <div className="border border-border p-8 md:p-10 transition-all hover:border-primary group bg-white">
      <h3 className="text-xl font-bold tracking-tight text-foreground mb-6 transition-colors group-hover:text-primary">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="w-1.5 h-1.5 bg-destructive mt-[7px]" />
            <span className="text-sm text-foreground/70 leading-loose">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
