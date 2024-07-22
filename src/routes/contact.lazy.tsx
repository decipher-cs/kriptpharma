import { createLazyFileRoute } from '@tanstack/react-router'
import mailLogo from '../assets/glyphs/email.png'
import dialerLogo from '../assets/glyphs/dialer.png'
import instaLogo from '../assets/glyphs/insta.png'
import linkedinLogo from '../assets/glyphs/linkedin.png'
import facebookLogo from '../assets/glyphs/facebook.png'
import { FieldErrors, Resolver, SubmitHandler, useForm } from 'react-hook-form'
import { PiEnvelope, PiFlag, PiPhone, PiTextAa, PiUser } from 'react-icons/pi'
import { PropsWithChildren, ReactNode, memo, useEffect } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import countryCodeList from 'country-codes-list'
import InputWrapper from '../components/FormInputWrapper'

const countryCodes = countryCodeList.all()

export const Route = createLazyFileRoute('/contact')({
    component: memo(() => <Contact />),
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
    {
        logoUrl: dialerLogo,
        title: 'phone no.',
        href: 'tel:+918571913753',
        value: '(+91) 857-191-3753',
    },
] satisfies {
    logoUrl: string
    title: string
    href: string
    value: string
}[]

type ContactForm = {
    name: string
    email: string
    phone: string
    message: string
    countryCode: string
}

const validateForm: Resolver<ContactForm> = async (values) => {
    const { name, email, phone, message, countryCode } = values

    const errors: FieldErrors<ContactForm> = {}

    if (!name) errors.name = { type: 'required', message: 'This is a required field' }
    else if (name.length > 100)
        errors.name = {
            type: 'maxLength',
            message: 'Name cannot be bigger then 100 characters',
        }
    else if (name.length < 1)
        errors.name = {
            type: 'minLength',
            message: 'Name has to be at least 1 character long',
        }

    if (message.length > 300)
        errors.message = {
            type: 'maxLength',
            message: 'Cannot be longer then 300 characters',
        }

    if (!email && !phone) {
        errors.email = {
            type: 'required',
            message: 'Please provide at least one method of contact',
        }
        errors.phone = {
            type: 'required',
            message: 'Please provide at least one method of contact',
        }
    }

    if (phone && !countryCode) {
        errors.countryCode = {
            type: 'required',
            message: 'Please provide country code',
        }
    }

    return { values, errors }
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isLoading, isValidating, isSubmitting, isSubmitSuccessful },
    } = useForm<ContactForm>({
        reValidateMode: 'onBlur',
        resolver: validateForm,
        defaultValues: {
            phone: '',
            name: '',
            message: '',
            email: '',
            countryCode: 'India (+91)',
        },
    })

    const onSubmit: SubmitHandler<ContactForm> = async (data) => {
        try {
            const formData = new URLSearchParams(Object.entries(data))

            // TODO: check if key doesn't exist and maybe fire sentry if in prod
            const apiKey = import.meta.env.VITE_PAGECLIP_API_KEY

            if (!apiKey) {
                alert('Form temporarily offline. Contact support.')
                return
            }

            const res = await fetch('https://send.pageclip.co/' + apiKey, {
                method: 'POST',
                body: formData,
            })

            console.log('response is:', res)

            if (res.ok) {
                // TODO: send daisyUI toast
                reset(undefined)
                alert('Successfully submitted your details')
            } else {
                console.log(res)
                throw Error('response set to not ok' + res)
            }
        } catch (err) {
            // TODO: send to sentry for detailed report on error
            console.log('error', err)
            alert(
                'We regret to inform you that an error occurred. Please resubmit the form or contact us via one of our social media channels for further assistance.'
            )
        }
    }

    useEffect(() => {
        reset(undefined, { keepValues: true })
    }, [isSubmitSuccessful, reset])

    return (
        <section className="mx-auto max-w-screen-xl space-y-8">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
                {contact.map((data, i) => (
                    <a
                        key={i}
                        className="flex items-center gap-5 rounded-lg border border-neutral-300 p-4 shadow-sm transition-all hover:scale-105 hover:bg-primary hover:text-primary-content"
                        href={data.href}
                        target="_blank"
                    >
                        <img
                            loading="lazy"
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
                className="mx-auto grid w-full gap-3 rounded-lg border border-neutral-300 p-6 focus-within:border-primary md:grid-cols-2 [&_*]:placeholder:italic"
                // onSubmit={handleSubmit(onSubmit)}
                action={'https://send.pageclip.co/' + import.meta.env.VITE_PAGECLIP_API_KEY}
                method="post"
            >
                <InputWrapper
                    errorMessage={errors.name?.message}
                    label={
                        <>
                            <PiUser /> Name
                        </>
                    }
                >
                    <input
                        type="text"
                        placeholder="Jone Doe"
                        className={clsx(
                            'input input-bordered w-full',
                            errors.name && ' input-error'
                        )}
                        {...register('name', {
                            required: true,
                            maxLength: 100,
                            minLength: 1,
                        })}
                    />
                </InputWrapper>

                <InputWrapper
                    errorMessage={errors.email?.message}
                    label={
                        <>
                            <PiEnvelope /> Email
                        </>
                    }
                    className=""
                >
                    <input
                        type="email"
                        placeholder="example@mail.com"
                        className={clsx(
                            'input input-bordered w-full',
                            errors.email && 'input-error'
                        )}
                        {...register('email')}
                    />
                </InputWrapper>

                <InputWrapper
                    label={
                        <>
                            <PiFlag />
                            Country
                        </>
                    }
                    errorMessage={errors.countryCode?.message}
                >
                    <select className="select select-bordered w-full" {...register('countryCode')}>
                        <option disabled value="">
                            Pick country code
                        </option>
                        {countryCodes.map(({ flag, countryCallingCode, countryNameEn }, i) => (
                            <option
                                key={i}
                                value={`${countryNameEn} (+${countryCallingCode})`}
                                aria-label={`${countryNameEn} (+${countryCallingCode})`}
                            >
                                {`${flag} ${countryNameEn}  (+${countryCallingCode}) `}
                            </option>
                        ))}
                    </select>
                </InputWrapper>

                <InputWrapper
                    errorMessage={errors.phone?.message}
                    label={
                        <>
                            <PiPhone /> Phone
                        </>
                    }
                >
                    <input
                        type="tel"
                        placeholder="000-000-000"
                        className={clsx(
                            'input input-bordered w-full',
                            errors.phone && ' input-error'
                        )}
                        {...register('phone')}
                    />
                </InputWrapper>

                <InputWrapper
                    errorMessage={errors.message?.message}
                    label={
                        <>
                            <PiTextAa /> Message
                        </>
                    }
                    className="col-span-full"
                >
                    <textarea
                        rows={6}
                        className={clsx(
                            'textarea textarea-bordered w-full',
                            errors.message && 'input-error'
                        )}
                        {...register('message', { maxLength: 300 })}
                    />
                </InputWrapper>

                <div className="join col-span-full justify-self-end">
                    <button
                        className={clsx(
                            'btn btn-secondary join-item ',
                            (isLoading || isSubmitting || isValidating) && 'btn-disabled'
                        )}
                        onClick={() => reset(undefined)}
                    >
                        {'reset'.toUpperCase()}
                    </button>

                    <button
                        className={clsx(
                            'btn btn-primary join-item',
                            (isLoading || isSubmitting || isValidating) && 'btn-disabled'
                        )}
                        type="submit"
                    >
                        {(isLoading || isSubmitting || isValidating) && (
                            <span className="loading loading-spinner"></span>
                        )}
                        {'Submit'.toUpperCase()}
                    </button>
                </div>
                <p className="italic text-error">{errors.root?.message}</p>
            </form>
        </section>
    )
}
