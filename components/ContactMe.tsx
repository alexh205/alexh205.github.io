import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:alexhunt215@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className=" h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-[95px] sm:top-[90px] uppercase tracking-[20px] text-gray-500 text-lg md:text-xl lg:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-9">
        <h4 className="text-2xl sm:text-4xl font-semibold text-center">
          If you have any questions or comments.
          <span className="decoration-[#36994c]/50 underline">
            {' '}
            Let&apos;s Talk.
          </span>
        </h4>
        <div className="space-y-8">
          <div
            className="flex items-center space-x-5 justify-center cursor-pointer"
            onClick={() => {
              window.location.href = 'tel:+12678443867';
            }}>
            <PhoneIcon className="text-[#36994c]  h-5 md:h-7 w-5 md:w-7 animate-pulse" />
            <p className="text-base md:text-lg lg:text-2xl">+1-267-844-3867</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#36994c]  h-5 md:h-7 w-5 md:w-7 animate-pulse" />
            <p className="text-base md:text-lg lg:text-2xl">
              alexhunt215@gmail.com
            </p>
          </div>
          <Link
            href="https://goo.gl/maps/zf4tqLEJbJyWZBY86"
            target="_blank"
            className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#36994c] h-5 md:h-7 w-5 md:w-7 animate-pulse" />
            <p className="text-base md:text-lg lg:text-2xl">
              Pennsylvania, USA
            </p>
          </Link>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
            required
          />

          <button
            type="submit"
            className="bg-[#36994c] py-3 md:py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
