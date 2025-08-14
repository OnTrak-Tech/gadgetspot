import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What are your shipping options?",
        answer: "We offer standard (5-7 business days) and expedited (2-3 business days) shipping. All orders are processed within 24 hours. You can select your preferred option at checkout."
    },
    {
        question: "What is your return policy?",
        answer: "We accept returns on all new items within 30 days of purchase for a full refund. Second-hand items can be returned within 14 days. Please visit our returns page to initiate a return."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order has shipped, you will receive an email with a tracking number. You can use this number on the carrier's website or on the 'Track Your Order' page on our site."
    },
    {
        question: "Do you offer warranties on second-hand products?",
        answer: "Yes, all our second-hand products come with a 90-day warranty that covers any functional defects. We thoroughly test all used items to ensure they meet our quality standards."
    }
]

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Have a question or need support? Fill out the form below or check our FAQ. We're here to help!
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
            <div>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Send us a Message</CardTitle>
                        <CardDescription>We'll get back to you as soon as possible.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="you@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="e.g., Question about an order" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Type your message here." className="min-h-[120px]" />
                        </div>
                        <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">Submit</Button>
                    </CardContent>
                </Card>
            </div>
            <div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="font-semibold text-left">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    </div>
  );
}
