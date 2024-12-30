import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from '@/components/ui/dialog'
import { ContactForm } from '../form/ContactForm'

export const ContactDialog = ({open, setOpen}) => {
    const handleCloseDialog = (event) => {
        event?.preventDefault();
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:mx-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Send me a message</DialogTitle>
                    <DialogDescription>
                        I'll contact you as soon as I can.
                    </DialogDescription>
                </DialogHeader>
                <ContactForm onSave={handleCloseDialog} />
            </DialogContent>
        </Dialog>
    )
}