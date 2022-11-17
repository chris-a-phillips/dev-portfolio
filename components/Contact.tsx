import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

const Contact = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:phillipsachris@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
    }

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="sectionTitle">Contact</h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-5xl font-semibold text-center underline decoration-[#97D8C4]">
            Let's Talk
            </h4>
            <p className="text-2xl text-center">
            I'm always looking for new opportunities and ways to collaborate.
            Whether it's just a casual hello, a question, or anything else, I'll
            make sure to get back to you.
            </p>
            <div className="space-y-5">
            <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-[#F4B942] h-7 w-7 animate-pulse" />
                <p className="text-2xl">phillipsachris@gmail.com</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
                <MapPinIcon className="text-[#F4B942] h-7 w-7 animate-bounce" />
                <p className="text-2xl">San Diego, CA</p>
            </div>
            </div>
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
            >
            <div className="flex space-x-2">
                <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
                />
                <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
                />
            </div>
            <input
                {...register("subject")}
                placeholder="Subject"
                className="contactInput"
                type="text"
            />
            <textarea
                {...register("message")}
                placeholder="Message"
                className="contactInput"
            />
            <button
                type="submit"
                className="bg-[#F4B942] py-5 px-10 rounded-sm text-black font-bold text-lg"
            >
                Submit
            </button>
            </form>
        </div>
        </div>
    );
};

export default Contact;
