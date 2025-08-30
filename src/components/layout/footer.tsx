export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="container mx-auto py-8 px-4 md:px-6 text-center text-foreground/60">
        <p className="font-body">&copy; {new Date().getFullYear()} Alioni Macahel. All Rights Reserved.</p>
        <p className="text-xs mt-2 font-body">Experience the golden essence of Macahel.</p>
      </div>
    </footer>
  );
}
