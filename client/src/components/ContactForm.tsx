import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl border border-github-border text-center">
        <div className="text-github-green text-6xl mb-4">✓</div>
        <h3 className="font-sf-pro text-xl font-semibold text-github-dark mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600">
          Thank you for reaching out. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-xl border border-github-border space-y-6"
    >
      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-github-dark mb-2">
          Name
        </Label>
        <Input
          id="name"
          {...register("name")}
          className="w-full px-4 py-3 border-github-border focus:ring-github-blue focus:border-transparent"
          placeholder="Your Name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-github-dark mb-2">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          {...register("email")}
          className="w-full px-4 py-3 border-github-border focus:ring-github-blue focus:border-transparent"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="subject" className="block text-sm font-medium text-github-dark mb-2">
          Subject
        </Label>
        <Input
          id="subject"
          {...register("subject")}
          className="w-full px-4 py-3 border-github-border focus:ring-github-blue focus:border-transparent"
          placeholder="Project Discussion"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-github-dark mb-2">
          Message
        </Label>
        <Textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full px-4 py-3 border-github-border focus:ring-github-blue focus:border-transparent resize-none"
          placeholder="Tell me about your project or opportunity..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={contactMutation.isPending}
        className="w-full bg-github-blue text-white py-3 hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {contactMutation.isPending ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
