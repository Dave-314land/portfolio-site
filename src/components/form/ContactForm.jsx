
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
    name: z.string(),
    email: z
        .string()
        .min(1, {
            message: "Please provide an email address.",
        })
        .email("Please provide a valid email address."),
    message: z.string()
});

export const ContactForm = ({onSave}) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    });

    async function onSubmit(values) {
        console.log(values);
        onSave();
    }

    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-8"
                action="https://api.web3forms.com/submit" 
                method="POST">
                
                {/* web3forms access key */}
                <input type="hidden" name="access_key" value="4533aa7e-0053-4b65-948b-5515cf9fa536"></input>
                 {/* Honeypot Spam Protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}}></input>
                {/* name input */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Dave" {...field} />
                            </FormControl>
                            <FormDescription>
                                Your first name
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* email input */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="myemail@gmail.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Your email address
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Message text input */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    type="text"
                                    placeholder="Type your message here."
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                I'll read your message as soon as possible
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}