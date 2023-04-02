import { Form, Label, Input, Button, Messege } from './ContactForm.styled';
import { useForm } from 'react-hook-form';
import 'yup-phone';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/seletors';
import { addContact } from 'redux/contactSlice';

const checkContscts = (arr, obj) => {
    return arr.every(e => e.name.toLowerCase() !== obj.name.toLowerCase());
};

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({});

    const onSubmit = data => {
        const { name } = data;

        if (checkContscts(contacts, data)) {
            dispatch(addContact(data));
            reset();
        } else {
            alert(`${name} is already in contacts`);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>
                Name
                <Input defaultValue="" {...register('name')} />
                <Messege>{errors.name?.message}</Messege>
            </Label>
            <Label>
                Number
                <Input defaultValue="" {...register('number')} />
                <Messege>{errors.number?.message}</Messege>
            </Label>
            <Button type="submit">Add contact</Button>
        </Form>
    );
};

export default ContactForm;
