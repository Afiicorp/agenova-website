import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site section">
      <h1 className="h1">Page not found</h1>
      <p className="mt-4 text-muted">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="btn btn-primary mt-8" data-testid="not-found-home-link">
        Back to home
      </Link>
    </div>
  );
}
