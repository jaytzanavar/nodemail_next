import React from 'react'
import Forms from '@/components/Forms/Forms'
import Hero from '@/components/Hero/Hero'
import { getTranslations } from 'next-intl/server'
import { PropsInterface } from '@/app/common/PropsInterface'
import { FIRM_EMAIL, FIRM_PHONE, FIRM_PHONE_HREF } from '@/lib/firm'

const CommunicationPage = async (props: PropsInterface) => {
    const { locale } = props.params
    const com = await getTranslations({ locale, namespace: 'Communication' });

    return (
        <div className='bg-white'>
            {/* Hero Section */}
            <section id='contact' className='w-full scroll-mt-24'>
                <Hero
                    locale={locale}
                    return_btn={com('hero.return_btn')}
                    heroTitle={com('hero.title')}
                    heroSub={com('hero.title_b')}
                    heroText={com('hero.text')}
                    linkEnabled={true}
                />
            </section>

            {/* Divider */}
            <div className='w-full h-0.5 bg-gray-200'></div>

            {/* Info Section */}
            <section id='why-contact' className='w-full bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24'>
                <div className='max-w-5xl mx-auto'>
                    <div className='mb-12'>
                        <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 text-center'>
                            {com('why_choose')}
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {/* Quick Response */}
                        <div className='flex flex-col gap-4'>
                            <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-50 to-teal-50 text-cyan-700 ring-1 ring-cyan-600/20 flex items-center justify-center flex-shrink-0'>
                                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                    {com('info.response_title')}
                                </h3>
                                <p className='text-gray-600 text-sm leading-relaxed'>
                                    {com('info.response_text')}
                                </p>
                            </div>
                        </div>

                        {/* Expert Team */}
                        <div className='flex flex-col gap-4'>
                            <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-50 to-teal-50 text-cyan-700 ring-1 ring-cyan-600/20 flex items-center justify-center flex-shrink-0'>
                                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' />
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                    {com('info.team_title')}
                                </h3>
                                <p className='text-gray-600 text-sm leading-relaxed'>
                                    {com('info.team_text')}
                                </p>
                            </div>
                        </div>

                        {/* Confidentiality */}
                        <div className='flex flex-col gap-4'>
                            <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-50 to-teal-50 text-cyan-700 ring-1 ring-cyan-600/20 flex items-center justify-center flex-shrink-0'>
                                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                    {com('info.confidential_title')}
                                </h3>
                                <p className='text-gray-600 text-sm leading-relaxed'>
                                    {com('info.confidential_text')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className='w-full h-0.5 bg-gray-200'></div>

            {/* Contact Form Section */}
            <section id='contact-form' className='w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24'>
                <div className='max-w-3xl mx-auto'>
                    <div className='mb-14 text-center'>
                        <div className='h-1.5 w-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto mb-6'></div>
                        <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4'>
                            {com('form_section.title')}
                        </h2>
                        <p className='text-gray-600 text-base leading-relaxed max-w-xl mx-auto'>
                            {com('form_section.subtitle')}
                        </p>
                    </div>

                    <Forms
                        title={com('title')}
                        name={com('name')}
                        email={com('email')}
                        phone={com('phone')}
                        subject={com('subject')}
                        message={com('message')}
                        btn={com('btn')}
                        success={com('success')}
                        error={com('error')}
                        required={com('required')}
                        invalidEmail={com('invalid_email')}
                    />
                </div>
            </section>

            {/* Divider */}
            <div className='w-full h-0.5 bg-gray-200'></div>

            {/* CTA Section */}
            <section id='urgent-help' className='w-full bg-gradient-to-r from-cyan-600 to-teal-600 py-14 sm:py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24'>
                <div className='max-w-3xl mx-auto text-center text-white'>
                    <h2 className='text-2xl sm:text-3xl font-extrabold mb-4'>
                        {com('cta_section.title')}
                    </h2>
                    <p className='text-white/95 text-sm sm:text-base mb-8 leading-relaxed'>
                        {com('cta_section.text')}
                    </p>

                    {/* Direct contact — phone & email of the business */}
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-6'>
                        <a href={FIRM_PHONE_HREF}
                            className='inline-flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-full bg-white px-7 py-3.5 text-base font-bold text-cyan-700 shadow-md transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                            <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' />
                            </svg>
                            {FIRM_PHONE}
                        </a>
                        <a href={`mailto:${FIRM_EMAIL}`}
                            className='inline-flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-full border border-white/70 px-7 py-3.5 text-base font-bold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                            <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.8}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
                            </svg>
                            {FIRM_EMAIL}
                        </a>
                    </div>

                    <p className='text-white/80 text-xs sm:text-sm font-medium'>
                        {com('cta_section.availability')}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default CommunicationPage
