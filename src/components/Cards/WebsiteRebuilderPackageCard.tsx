import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Check, ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const WebsiteRebuilderPackageCard = () => {
  return (
    <Card className="w-full max-w-4xl relative">
      <Badge className="hidden sm:block absolute top-6 right-4 bg-green-100 text-[#15803D] text-sm font-semibold px-3 py-1 rounded z-10 border-transparent">
        Includes FREE Summit Plan for 1 Year
      </Badge>

      <CardHeader>
        <CardTitle className="text-xl font-semibold leading-none tracking-tight">
          Website Rebuilder Package
        </CardTitle>

        <Badge className="block sm:hidden bg-green-100 text-[#15803D] text-sm font-semibold px-3 py-1 rounded border-transparent w-fit">
          Includes FREE Summit Plan for 1 Year
        </Badge>

        <span className="text-4xl font-bold text-[#64748B] mb-6">
          $6,450{" "}
          <span className="text-base font-normal text-[#64748B] ml-1">
            one-off
          </span>
        </span>
        <CardDescription>
          <p className="text-base text-muted-foreground">
            Introducing Roamlii&apos;s Website Rebuilder Package, the ultimate
            solution for businesses looking to refresh their digital presence
            and elevate their marketing strategy.
          </p>
          <div>
            <p className="text-foreground text-lg font-semibold mt-7 px-4 md:px-10">
              Includes a FREE one year subscription of our Summit Digital Growth
              plan!
            </p>
            <p className="text-base font-semibold px-4 md:px-10">
              This package is designed to not only give your website a modern,
              professional makeover but also to enhance your lead management
              efforts with a fresh, results-driven approach.{" "}
            </p>
            <p className="text-base font-semibold text-green-600 px-4 md:px-10 mt-2">
              Savings of over $3,900
            </p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-3 text-foreground">
            What&apos;s Included:
          </h4>
          <ul className="space-y-2 text-sm font-medium">
            <li className="flex items-start gap-2 text-foreground">
              <Check className="w-5 h-5 text-[#4682B4] mt-0.5 flex-shrink-0" />
              <span>
                FREE 1 year subscription of the full Summit Digital Growth Plan
              </span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <Check className="w-5 h-5 text-[#4682B4] mt-0.5 flex-shrink-0" />
              <span>
                Website rebuilt in Roamlii&apos;s Lead Management System
              </span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <Check className="w-5 h-5 text-[#4682B4] mt-0.5 flex-shrink-0" />
              <span>
                6 standard website pages (Home, Product/Services, About Us,
                FAQs, Blog, Contact Us)
              </span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <Check className="w-5 h-5 text-[#4682B4] mt-0.5 flex-shrink-0" />
              <span>3 blogs (750-1000 words each) of topic of choice</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <Check className="w-5 h-5 text-[#4682B4] mt-0.5 flex-shrink-0" />
              <span>2 rounds of minor content and design edits to website</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <Check className="w-5 h-5 text-[#4682B4] mt-0.5 flex-shrink-0" />
              <span>Keywords optimization</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <Check className="w-5 h-5 text-[#4682B4] mt-0.5 flex-shrink-0" />
              <span>Domain connection</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <Check className="w-5 h-5 text-[#4682B4] mt-0.5 flex-shrink-0" />
              <span>FREE tech and onboarding support for 1 week</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-foreground">
            Add-on Services:
          </h4>
          <ul className="space-y-2 text-base font-medium text-foreground">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-base text-muted-foreground mt-0.5 flex-shrink-0" />
              <span>Additional website page - $450</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <span>Package of 12 blogs - $850</span>
                <ul className="ml-4 mt-1 space-y-1 text-base text-foreground">
                  <li>Topics of choice</li>
                  <li>750 - 1000 words per blog</li>
                  <li>1 round of revisions per blog</li>
                  <li>Automatic scheduling</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <hr className="border-t border-border" />
        <Button
          className="cursor-pointer w-full bg-[#4682B4] text-white hover:bg-[#5673a3] flex items-center justify-center gap-2"
          onClick={() => toast("Add to Cart clicked!")}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
