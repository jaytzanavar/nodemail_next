import { useTranslations } from "next-intl";

export default function NotFoundPage() {
    const t = useTranslations('NotFound');
    return (
        <div className="bg-black/90 text-white/90 flex justify-center items-center ">
            <h1 className='font-extrabold text-6xl md:text-left text-center md:px-[30%] text-white/90'>
                {t('title')}</h1>
            <h4 className="font-extrabold text-xl text-center text-white/70 px-[20%]"> {t('text')}</h4>
        </div>
    )
}