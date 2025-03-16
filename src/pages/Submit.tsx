
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { categories, industries } from '@/utils/tools';
import { UploadCloud, Check, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Tool name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  longDescription: z.string().min(50, {
    message: "Long description must be at least 50 characters.",
  }),
  category: z.array(z.string()).min(1, {
    message: "Select at least one category.",
  }),
  industries: z.array(z.string()).min(1, {
    message: "Select at least one industry.",
  }),
  website: z.string().url({
    message: "Please enter a valid URL.",
  }),
  price: z.object({
    type: z.enum(["free", "freemium", "paid", "contact"]),
    startingAt: z.string().optional(),
  }),
  integrations: z.array(z.string()).optional(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

const Submit = () => {
  const { toast } = useToast();
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      longDescription: "",
      category: [],
      industries: [],
      website: "",
      price: {
        type: "paid",
        startingAt: "",
      },
      integrations: [],
      termsAccepted: false,
    },
  });
  
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!logoFile) {
      toast({
        title: "Logo required",
        description: "Please upload a logo for your tool",
        variant: "destructive",
      });
      return;
    }
    
    console.log("Form submitted:", values, "Logo:", logoFile);
    
    toast({
      title: "Tool submitted successfully!",
      description: "We'll review your submission and get back to you soon.",
    });
    
    // Reset form
    form.reset();
    setLogoFile(null);
    setLogoPreview(null);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-strato-black">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="strato-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-white mb-4">Submit Your Tool</h1>
              <p className="text-white/70 max-w-2xl mx-auto">
                Share your product with our community of professionals and businesses. 
                Our team will review your submission and get in touch with you.
              </p>
            </div>
            
            <Card className="bg-strato-darkGray border-strato-gray text-white">
              <CardHeader>
                <CardTitle>Tool Information</CardTitle>
                <CardDescription className="text-white/60">
                  Fill out the details about your tool or software
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tool Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Awesome AI Tool" {...field} className="bg-strato-gray text-white border-strato-lightGray" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://example.com" {...field} className="bg-strato-gray text-white border-strato-lightGray" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Short Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Briefly describe your tool (max 160 characters)" 
                              {...field} 
                              className="bg-strato-gray text-white border-strato-lightGray resize-none h-20"
                              maxLength={160}
                            />
                          </FormControl>
                          <FormDescription className="text-white/60">
                            This will appear in tool cards and search results
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="longDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Detailed Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Provide a comprehensive description of your tool, its features, and benefits" 
                              {...field} 
                              className="bg-strato-gray text-white border-strato-lightGray resize-none h-32"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Categories</FormLabel>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {categories.map((category) => (
                                <label
                                  key={category}
                                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                                    field.value.includes(category)
                                      ? 'bg-strato-blue text-white'
                                      : 'bg-strato-gray text-white/70 hover:bg-strato-blue/30'
                                  }`}
                                >
                                  <Checkbox
                                    checked={field.value.includes(category)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        field.onChange([...field.value, category]);
                                      } else {
                                        field.onChange(
                                          field.value.filter((value) => value !== category)
                                        );
                                      }
                                    }}
                                    className="sr-only"
                                  />
                                  {field.value.includes(category) && (
                                    <Check className="w-3 h-3 mr-1" />
                                  )}
                                  {category}
                                </label>
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="industries"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industries</FormLabel>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {industries.map((industry) => (
                                <label
                                  key={industry}
                                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                                    field.value.includes(industry)
                                      ? 'bg-strato-blue text-white'
                                      : 'bg-strato-gray text-white/70 hover:bg-strato-blue/30'
                                  }`}
                                >
                                  <Checkbox
                                    checked={field.value.includes(industry)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        field.onChange([...field.value, industry]);
                                      } else {
                                        field.onChange(
                                          field.value.filter((value) => value !== industry)
                                        );
                                      }
                                    }}
                                    className="sr-only"
                                  />
                                  {field.value.includes(industry) && (
                                    <Check className="w-3 h-3 mr-1" />
                                  )}
                                  {industry}
                                </label>
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="price.type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pricing Model</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-strato-gray text-white border-strato-lightGray">
                                  <SelectValue placeholder="Select pricing model" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-strato-darkGray text-white border-strato-lightGray">
                                <SelectItem value="free">Free</SelectItem>
                                <SelectItem value="freemium">Freemium</SelectItem>
                                <SelectItem value="paid">Paid</SelectItem>
                                <SelectItem value="contact">Contact for Pricing</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {form.watch("price.type") === "paid" && (
                        <FormField
                          control={form.control}
                          name="price.startingAt"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Starting Price</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="e.g., $9/month" 
                                  {...field} 
                                  className="bg-strato-gray text-white border-strato-lightGray" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <FormLabel>Logo Upload</FormLabel>
                      <div className="border-2 border-dashed border-strato-lightGray rounded-lg p-6 flex flex-col items-center justify-center bg-strato-gray text-white/70 transition-colors hover:border-strato-blue">
                        {logoPreview ? (
                          <div className="text-center">
                            <img 
                              src={logoPreview} 
                              alt="Logo preview" 
                              className="h-24 w-24 object-contain mb-4 mx-auto"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setLogoFile(null);
                                setLogoPreview(null);
                              }}
                              className="bg-transparent border-strato-blue text-white hover:bg-strato-blue/20"
                            >
                              Remove and upload another
                            </Button>
                          </div>
                        ) : (
                          <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                            <UploadCloud className="h-10 w-10 text-strato-blue mb-2" />
                            <div className="text-center">
                              <p className="font-medium">Click to upload your logo</p>
                              <p className="text-sm text-white/60 mt-1">
                                SVG, PNG, or JPG (max. 2MB)
                              </p>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              accept="image/png,image/jpeg,image/svg+xml"
                              onChange={handleLogoChange}
                            />
                          </label>
                        )}
                      </div>
                      
                      {!logoFile && (
                        <p className="text-destructive text-sm">
                          A logo is required for your tool submission
                        </p>
                      )}
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-strato-blue data-[state=checked]:border-strato-blue"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the terms and conditions
                            </FormLabel>
                            <FormDescription className="text-white/60">
                              By submitting, you agree to our review process and affiliate program terms
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-strato-blue text-white hover:bg-strato-darkBlue"
                    >
                      Submit Tool <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Submit;
