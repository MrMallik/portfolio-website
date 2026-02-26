const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-center gap-3 px-4 sm:px-6 py-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pritabrata Mallik
        </p>
      </div>
    </footer>
  );
};

export default Footer;
