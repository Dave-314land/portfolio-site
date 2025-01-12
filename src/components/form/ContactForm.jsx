
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react"
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from 'lucide-react';

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

    const {reset, handleSubmit} = useForm();

    const [isSuccess, setIsSuccess] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const [result, setResult] = useState(null);

    const accessKey = "4533aa7e-0053-4b65-948b-5515cf9fa536";

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: "Powered By Piland",
            subject: "New Contact Message from your portfolio site",
        },
        onSuccess: async (msg, data) => {
            setShowSuccessMessage(true); // Hide the message initially
            
            // Simulate an API call as a delay to show the sent button
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setIsSuccess(true);
            setResult(msg);
            onSave();
            reset();
        },
        onError: (msg, data) => {
            setIsSuccess(false);
            setResult(msg);
        },
    });

    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)} >
                
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
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                { !showSuccessMessage && <Button type="submit">Send Message</Button> }
                { showSuccessMessage && <Button>Message Sent <Check /></Button> }
            </form>
        </Form>
    );
}
