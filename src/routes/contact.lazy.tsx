import { createLazyFileRoute } from '@tanstack/react-router'
import mailLogo from '../assets/glyphs/email.png'
import dialerLogo from '../assets/glyphs/dialer.png'
import instaLogo from '../assets/glyphs/insta.png'
import linkedinLogo from '../assets/glyphs/linkedin.png'
import facebookLogo from '../assets/glyphs/facebook.png'
import qrCode from '../assets/WhatsApp-QR-code.jpeg'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PiEnvelope, PiPhone, PiTextAa, PiUser } from 'react-icons/pi'
import { PropsWithChildren, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const Route = createLazyFileRoute('/contact')({
    component: () => <Contact />,
})

const contact = [
    {
        logoUrl: linkedinLogo,
        title: 'linkedin',
        href: 'https://www.linkedin.com/in/komal-singla-45a516239/',
        value: 'linkedin.com/in/komal-singla-45a516239/',
    },
    {
        logoUrl: linkedinLogo,
        title: 'linkedin',
        href: 'https://in.linkedin.com/in/parth-bansal-05b908256',
        value: 'linkedin.com/in/parth-bansal-05b908256',
    },
    {
        logoUrl: mailLogo,
        title: 'email',
        href: 'mailto:kriptpharma@gmail.com',
        value: 'kriptpharma@gmail.com',
    },
    {
        logoUrl: dialerLogo,
        title: 'phone no.',
        href: 'tel:+917988522311',
        value: '(+91) 798-852-2311',
    },
    {
        logoUrl: instaLogo,
        title: 'Instagram',
        href: 'https://www.instagram.com/kriptpharmaceuticals/',
        value: '@kriptpharmaceuticals',
    },
    {
        logoUrl: facebookLogo,
        title: 'Facebook',
        href: 'https://www.facebook.com/share/vLSvjtQ5igwYRuP1/?mibextid=LQQJ4d',
        value: 'Kript Pharmaceuticals ',
    },
] satisfies {
    logoUrl: string
    title: string
    href: string
    value: string
}[]

const InputWrapper = (
    props: PropsWithChildren & { label: ReactNode; className?: string }
) => {
    return (
        <label className={twMerge('form-control w-full', props.className)}>
            <div className="label">
                <span className="label-text flex items-center gap-2">
                    {props.label}
                </span>
            </div>
            {props.children}
        </label>
    )
}

type ContactForm = {
    name: string
    email: string
    phone: string
    message: string
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<ContactForm>({ reValidateMode: 'onBlur' })

    const onSubmit: SubmitHandler<ContactForm> = (data, e) => {
        const { name, email, phone, message } = data
        if (!email && !phone) {
            setError('email', {
                type: 'required',
                message: 'Please provide at least one method of contact',
            })
            setError('phone', {
                type: 'required',
                message: 'Please provide at least one method of contact',
            })
        }
        const formData = new FormData(e?.target)
        console.log(data)
        formData.forEach((val, key) => console.log(key, val))
        if (formData !== undefined)
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                /* TODO: fix this error instead of supressing it */
                /* eslint-disable @typescript-eslint/no-explicit-any */
                body: new URLSearchParams(formData as any).toString(),
            })
                .then(() => console.log('Form successfully submitted'))
                .catch((error) => alert(error))
    }

    return (
        <section className="mx-auto max-w-screen-xl space-y-8">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {contact.map((data, i) => (
                    <a
                        key={i}
                        className="flex items-center gap-5 rounded-lg border border-neutral-700 p-4 shadow-xl transition-all hover:scale-105 hover:bg-primary hover:text-primary-content"
                        href={data.href}
                        target="_blank"
                    >
                        <img
                            className={'size-10'}
                            src={data.logoUrl}
                            alt={data.title + ' logo'}
                        />

                        <div>
                            <h2 className="text-nowrap text-xl font-bold">
                                {data.title.toUpperCase()}
                            </h2>

                            <p className="text-sm">{data.value}</p>
                        </div>
                    </a>
                ))}
            </div>

            <form
                className="mx-auto grid w-full gap-3 rounded-lg border border-neutral-700 p-6 focus-within:border-primary md:grid-cols-2 [&_*]:placeholder:italic"
                // onSubmit={handleSubmit(onSubmit)}
                data-netlify="true"
            >
                <InputWrapper
                    label={
                        <>
                            <PiUser /> Name
                        </>
                    }
                >
                    <input
                        type="text"
                        placeholder="Path Bansal"
                        className={
                            'input input-bordered w-full' +
                            (errors.name ? ' input-error' : '')
                        }
                        {...register('name', {
                            required: true,
                            maxLength: 100,
                            minLength: 1,
                        })}
                    />
                </InputWrapper>

                <InputWrapper
                    label={
                        <>
                            <PiPhone /> Phone
                        </>
                    }
                >
                    <input
                        type="tel"
                        placeholder="000-000-000"
                        className={
                            'input input-bordered w-full' +
                            (errors.phone ? ' input-error' : '')
                        }
                        {...register('phone')}
                    />
                </InputWrapper>

                <InputWrapper
                    label={
                        <>
                            <PiEnvelope /> Email
                        </>
                    }
                    className="col-span-full"
                >
                    <input
                        type="email"
                        placeholder="example@mail.com"
                        className={
                            'input input-bordered w-full' +
                            (errors.email ? ' input-error' : '')
                        }
                        {...register('email')}
                    />
                </InputWrapper>
                <InputWrapper
                    label={
                        <>
                            <PiTextAa /> Message
                        </>
                    }
                    className="col-span-full"
                >
                    <textarea
                        rows={6}
                        className={
                            'textarea textarea-bordered w-full ' +
                            (errors.message ? ' input-error' : '')
                        }
                        {...register('message', { maxLength: 400 })}
                    />
                </InputWrapper>

                <button
                    className="btn btn-primary col-span-full justify-self-end"
                    type="submit"
                >
                    Submit
                </button>
            </form>

            <article className="flex w-full flex-wrap items-center justify-center gap-16">
                <a
                    className="inline-block basis-1/4 rounded-2xl bg-white p-5"
                    href="https://wa.me/message/ZLJXQKQPM75IL1"
                    id="whatsapp"
                    aria-label="Whatsapp"
                >
                    <img
                        src={qrCode}
                        className="inline-block size-full object-contain"
                        alt="whatsapp QR code"
                    />
                </a>
                <p className="text-xl">
                    Scan or click the QR code to
                    <br /> connect with us on WhatsApp.
                </p>
            </article>
        </section>
    )
}
