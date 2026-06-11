import React from "react";
import Hero from "@/components/Hero/Hero";
import Icon from "@/components/Icon/Icon";
import { IconName } from "@/components/Icon/Icon";
import { getTranslations } from "next-intl/server";
import { PropsInterface } from "@/app/common/PropsInterface";
import { FIRM_EMAIL } from "@/lib/firm";

type Position = {
  title: string;
  type: string;
  location: string;
  summary: string;
};

const PERK_ICONS: IconName[] = ["scale", "users", "building"];

const CareersPage = async (props: PropsInterface) => {
  const { locale } = props.params;
  const car = await getTranslations({ locale, namespace: "Careers" });

  const positions = car.raw("positions") as Position[];
  const perks = car.raw("perks.items") as { title: string; text: string }[];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="w-full">
        <Hero
          locale={locale}
          return_btn={car("hero.return_btn")}
          heroTitle={car("hero.title")}
          heroSub={car("hero.title_b")}
          heroText={car("hero.text")}
          linkEnabled={true}
        />
      </section>

      {/* Divider */}
      <div className="w-full h-0.5 bg-stone-200"></div>

      {/* Open positions */}
      <section
        id="open-positions"
        className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 text-center">
            <div className="h-1.5 w-16 bg-brass-rule rounded-full mx-auto mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
              {car("openings.title")}
            </h2>
            <p className="text-ink-600 text-base leading-relaxed max-w-xl mx-auto">
              {car("openings.subtitle")}
            </p>
          </div>

          {positions.length > 0 ? (
            <ul className="flex flex-col gap-6">
              {positions.map((position, idx) => (
                <li
                  key={idx}
                  className="group rounded-xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-brass-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy-900">
                        {position.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                          <Icon name="briefcase" className="h-3.5 w-3.5" />
                          {position.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-3 py-1 text-xs font-semibold text-ink-600">
                          <Icon name="pin" className="h-3.5 w-3.5" />
                          {position.location}
                        </span>
                      </div>
                      <p className="mt-4 text-ink-600 text-sm leading-relaxed max-w-2xl">
                        {position.summary}
                      </p>
                    </div>

                    <a
                      href={`mailto:${FIRM_EMAIL}?subject=${encodeURIComponent(
                        car("apply_subject") + " — " + position.title,
                      )}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-brass-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brass-600 whitespace-nowrap"
                    >
                      {car("apply_btn")}
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-ink-500 text-base">
              {car("openings.empty")}
            </p>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-0.5 bg-stone-200"></div>

      {/* Why work with us */}
      <section className="w-full bg-paper py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
              {car("perks.title")}
            </h2>
            <p className="mt-4 text-ink-600 text-base leading-relaxed max-w-2xl mx-auto">
              {car("perks.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-brass-50 text-brass-600 ring-1 ring-brass-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={PERK_ICONS[idx % PERK_ICONS.length]}
                    className="h-6 w-6"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-ink-600 text-sm leading-relaxed">
                    {perk.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-0.5 bg-stone-200"></div>

      {/* Spontaneous application CTA */}
      <section className="w-full bg-navy-900 py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            {car("cta.title")}
          </h2>
          <p className="text-white/85 text-sm sm:text-base mb-8 leading-relaxed">
            {car("cta.text")}
          </p>
          <a
            href={`mailto:${FIRM_EMAIL}?subject=${encodeURIComponent(
              car("cta.subject"),
            )}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brass-500 px-7 py-3.5 text-base font-bold text-navy-950 shadow-md transition hover:-translate-y-0.5 hover:bg-brass-600"
          >
            <Icon name="mail" className="h-5 w-5" />
            {car("cta.btn")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
