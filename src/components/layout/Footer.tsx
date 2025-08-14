import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/products" },
      { label: "New Arrivals", href: "/products?condition=New" },
      { label: "Second-hand Deals", href: "/products?condition=Second-hand" },
      { label: "Laptops", href: "/products?category=Laptops" },
      { label: "Smartphones", href: "/products?category=Smartphones" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/contact" },
      { label: "Shipping & Returns", href: "#" },
      { label: "Track Your Order", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Your one-stop shop for the latest gadgets, both new and used.
            </p>
            <div className="mt-4">
              <h4 className="font-headline font-semibold">Stay in the loop</h4>
              <p className="text-muted-foreground text-sm mt-1">Get updates on new arrivals and special offers.</p>
              <div className="flex w-full max-w-sm items-center space-x-2 mt-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit" className="bg-primary hover:bg-primary/90">Subscribe</Button>
              </div>
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-headline font-semibold">{section.title}</h4>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GadgetSpot. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
