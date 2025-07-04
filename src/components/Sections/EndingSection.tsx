import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const EndingSection = () => {
  return (
    <section className="flex justify-center px-4 md:px-2 mb-7">
      <div className="py-1 px-4 md:px-2 border border-transparent dark:border-border dark:bg-[#1E293B4C] rounded-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center p-2 mb-3">
          Need Help Choosing the Right Plan?
        </h1>
        <p className="text-center text-xl text-muted-foreground max-w-full lg:max-w-[90%] mx-auto">
          Learn more about our tools and how they can help your business grow.
          Our team is here to help you make the right choice for your business.
        </p>
        <div className="flex justify-center p-2">
          <Button
            variant="outline"
            className="cursor-pointer flex items-center justify-center gap-2 px-6 py-5 mt-3"
            onClick={() => toast("Learn More clicked!")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
