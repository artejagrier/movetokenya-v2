import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & Family Life in Kenya | MoveToKenya.org",
  description:
    "A premium family relocation guide for education, community life, schools, and moving your family to Kenya.",
};

const schoolCards = [
  {
    name: "International School of Kenya",
    details: ["British Curriculum", "IB Programs", "Strong expat community"],
  },
  {
    name: "Braeburn School",
    details: ["British Curriculum", "Modern campuses", "Junior and senior schools"],
  },
  {
    name: "Rosslyn Academy",
    details: ["American Curriculum", "IB Programs", "Church-based community"],
  },
  {
    name: "Brookhouse International School",
    details: ["British Curriculum", "IB Programs", "Expansive campus life"],
  },
  {
    name: "Aga Khan Academy",
    details: ["International Baccalaureate", "Global leadership", "Modern campus"],
  },
  {
    name: "West Nairobi School",
    details: ["American Curriculum", "Rich extracurriculars", "Friendly community"],
  },
];

const familyPlaces = [
  { name: "Karen", description: "Green estates, international schools, family-friendly living." },
  { name: "Lavington", description: "Safe communities with easy access to schools and amenities." },
  { name: "Kilimani", description: "Central city living near international schools and shopping." },
  { name: "Westlands", description: "Modern neighborhoods with family services and international restaurants." },
  { name: "Diani Beach", description: "Coastal lifestyle with relaxed living and holiday vibes." },
  { name: "Nyali", description: "Oceanfront living and family-friendly beaches near Mombasa." },
];

const kidsActivities = [
  "Safaris",
  "Giraffe Centre",
  "Elephant Orphanage",
  "Marine Parks",
  "Beaches",
  "National Parks",
  "Museums",
  "Wildlife Experiences",
];

export default function EducationFamilyLifePage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#111111]">
      <Navbar />

      <section className="px-4 py-24 sm:px-6 md:px-12 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-semibold leading-tight text-[#111111] sm:text-6xl">
                Education & Family Life in Kenya
              </h1>
              <div className="mt-4 h-1 w-20 rounded-full bg-[#C8102E]" />
              <p className="mt-8 text-xl leading-9 text-[#4f4f4f] sm:text-2xl">
                A complete relocation handbook for families choosing schools, neighborhoods, activities, and community life in Kenya.
              </p>
            </div>

            <div className="rounded-[3rem] border border-[#ece8e4] bg-[#ffffff] p-10 shadow-[0_30px_90px_rgba(17,17,17,0.08)]">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-base leading-8 text-[#4f4f4f]">
                    Kenya is becoming a top choice for global families because it blends safe neighborhoods, strong community values, and exceptional educational opportunities. This page is designed as a practical relocation guide with clear comparisons, helpful decision points, and realistic family planning advice.
                  </p>
                </div>
                <div className="space-y-4 rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Family relocation snapshot</p>
                  <div className="space-y-3 text-[#111111]">
                    <p className="text-lg font-semibold">Strong community focus</p>
                    <p>Children often grow up with deep local and international friendships.</p>
                    <p className="text-lg font-semibold">Outdoor lifestyle</p>
                    <p>More time outdoors, fewer hours spent indoors, and a culture of family weekends.</p>
                    <p className="text-lg font-semibold">Education choice</p>
                    <p>Multiple curricula, international schools, and growing homeschooling networks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Why Families Are Choosing Kenya</p>
                <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                  Strong communities, outdoor living, and global school options
                </h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-[#4f4f4f]">
                <p>
                  Kenya appeals to families because it balances a strong sense of community with a slower pace of life than many Western cities. Parents often find more family time, fewer long commutes, and neighborhood routines that keep children active.
                </p>
                <p>
                  The culture is built around family, shared meals, and community events. Expats quickly discover that many Kenyan neighborhoods feel like extended family networks, where friends look after children, exchange support, and share local knowledge.
                </p>
                <p>
                  Access to nature is a key draw. Living near parks, beaches, and outdoor attractions means weekends are often spent exploring wildlife, forest trails, and coastal beaches rather than being confined to indoor activities.
                </p>
                <p>
                  Kenya’s growing international communities make the transition easier. Families arriving from the U.S., Europe, and other regions can connect with established expat circles, international schools, and services designed for relocation.
                </p>
                <p>
                  Children benefit from a multicultural environment where they may attend local and international schools, learn new languages, and participate in both Kenyan and global cultural experiences.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Community</p>
                <p className="mt-4 text-lg font-semibold text-[#111111]">Strong family networks</p>
                <p className="mt-3 text-[#4f4f4f]">Children and parents often form relationships through schools, churches, and neighborhood gatherings.</p>
              </div>
              <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Work-life balance</p>
                <p className="mt-4 text-lg font-semibold text-[#111111]">More family time</p>
                <p className="mt-3 text-[#4f4f4f]">Families report more relaxed weekends and a better balance between work and family routines.</p>
              </div>
              <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Outdoor living</p>
                <p className="mt-4 text-lg font-semibold text-[#111111]">Nature at the doorstep</p>
                <p className="mt-3 text-[#4f4f4f]">Access to beaches, parks, and wildlife experiences is part of everyday family life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">International School Experience</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Full-service international schooling for expat children
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="space-y-6 text-base leading-8 text-[#4f4f4f]">
                <p>
                  International schools in Kenya often offer smaller class sizes and stronger teacher-to-student ratios than the average local classroom. These schools prioritize individualized support and frequently include dedicated learning support staff.
                </p>
                <p>
                  Many schools host international student populations, creating a cosmopolitan environment where children learn alongside peers from different countries. This supports language development, global awareness, and multicultural friendships.
                </p>
                <p>
                  University preparation is a key benefit of the international school model. Schools often follow British, American, or IB pathways and help students prepare for universities in the UK, U.S., Europe, and beyond.
                </p>
                <p>
                  Sports, music, and arts programs are built into school life. Students can participate in football, athletics, swimming, music ensembles, theater productions, and visual arts exhibitions.
                </p>
                <p>
                  Language opportunities range from English and French to Swahili and other second languages. A strong international school will also offer structured support services for students with learning needs.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">School comparison</p>
                  <p className="mt-4 text-lg font-semibold text-[#111111]">Curriculum, community, and academic focus</p>
                  <ul className="mt-4 space-y-3 text-[#4f4f4f]">
                    <li>British schools often focus on IGCSE and A-Levels.</li>
                    <li>American schools emphasize AP-style programs and credits.</li>
                    <li>IB schools concentrate on inquiry-based learning and global citizenship.</li>
                  </ul>
                </div>
                <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">International support</p>
                  <p className="mt-4 text-lg font-semibold text-[#111111]">Strong student services</p>
                  <p className="mt-3 text-[#4f4f4f]">
                    Dedicated guidance counselors, university advisors, and international student coordinators help families settle in quickly.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#ffffff] p-10 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Class sizes</p>
                  <p className="mt-4 text-[#4f4f4f]">Small classes often range from 15 to 22 students, allowing teachers to give attention to each child.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Student services</p>
                  <p className="mt-4 text-[#4f4f4f]">Learning support, language coaching, and social-emotional care create a supportive environment.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Arts, music & sports</p>
                  <p className="mt-4 text-[#4f4f4f]">Schools offer music, arts, theater, athletics, and weekend tournaments for active children.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Raising Children in Kenya</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Daily life, outdoor routines, and social opportunities for families
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#4f4f4f]">
                Daily life in Kenya often includes morning school runs, afternoons outdoors, and a strong focus on family activities. Children commonly spend more time outside than in many Western cities, and weekend family adventures are a core part of the lifestyle.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div className="space-y-6 text-base leading-8 text-[#4f4f4f]">
                <p>
                  Children’s social opportunities expand quickly through both local and expat communities. School clubs, sports teams, and weekend classes are common ways for children to meet friends and build confidence.
                </p>
                <p>
                  Community activities often include church groups, playgroups, international family events, and weekend outings to nearby national parks. This creates a broad social network for both children and parents.
                </p>
                <p>
                  Safety is always a priority. Many families select gated neighborhoods with controlled access, live near international school campuses, and choose communities with a supportive expat presence.
                </p>
              </div>
              <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Childhood outdoors</p>
                <p className="mt-4 text-[#4f4f4f]">
                  Outdoor recreation is built into family routines. From beach days to nature walks and animal encounters, Kenyan children often enjoy more unstructured outdoor time than in many Western cities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">International School Experience</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                British, American, and IB options for every stage
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="space-y-6 text-base leading-8 text-[#4f4f4f]">
                <p>
                  International schools in Kenya often provide smaller classes and personalized support. Families choose these schools for their structured academic pathways, familiar teaching methods, and strong extracurricular programs.
                </p>
                <p>
                  British Curriculum schools typically emphasize IGCSE and A-Level preparation. They are well suited to families planning university applications in the U.K. and other Commonwealth countries.
                </p>
                <p>
                  American Curriculum schools follow a U.S.-style program with flexible credit systems. They often offer AP-style courses and high school diplomas that are widely recognized by U.S. colleges.
                </p>
                <p>
                  IB schools focus on inquiry-based learning, international-mindedness, and global citizenship. This curriculum is a strong fit for families who expect multiple relocations or who want a globally transferable education.
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Student support</p>
                  <p className="mt-4 text-[#4f4f4f]">Most international schools offer guidance counseling, learning support, language tutoring, and wellbeing services.</p>
                </div>
                <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Arts & athletics</p>
                  <p className="mt-4 text-[#4f4f4f]">Music, theater, visual arts, and sports are core parts of the curriculum and after-school schedule.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#ffffff] p-10 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Class sizes</p>
                  <p className="mt-4 text-[#4f4f4f]">Typical international class sizes range from 15–22 students, which helps teachers tailor lessons to individual needs.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Curriculum strength</p>
                  <p className="mt-4 text-[#4f4f4f]">British, American, and IB programs each have strengths that help prepare students for global universities.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Language choice</p>
                  <p className="mt-4 text-[#4f4f4f]">English is the primary language, with additional classes in Swahili, French, and other languages depending on the school.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Family-Friendly Neighborhoods</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Where families settle, learn, and grow together
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {familyPlaces.map((place) => (
                <div key={place.name} className="rounded-[2rem] border border-[#f2e7e4] bg-[#ffffff] p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#111111]">{place.name}</h3>
                  <p className="mt-4 text-[#4f4f4f]">{place.description}</p>
                  <p className="mt-4 text-sm text-[#6f6f6f]">A compelling choice for families searching for safety, quality schools, and neighborhood lifestyle.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Top School Options</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Compare international schools across Kenya
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {schoolCards.map((school) => (
                <div key={school.name} className="rounded-[2rem] border border-[#f2e7e4] bg-[#ffffff] p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#111111]">{school.name}</h3>
                  <ul className="mt-5 space-y-3 text-[#4f4f4f]">
                    {school.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-1 text-[#006B3F]">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Weekend Family Activities</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                How families spend weekends in Kenya
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {kidsActivities.map((item) => (
                <div key={item} className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-6 text-base leading-8 text-[#4f4f4f] shadow-sm">
                  <p className="text-lg font-semibold text-[#111111]">{item}</p>
                  <p className="mt-3 text-[#4f4f4f]">A memorable family outing that blends nature, culture, and adventure.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Food, Culture & Community</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Kenyan cuisine, culture, and community life
              </h2>
              <p className="mt-4 text-base leading-8 text-[#4f4f4f]">
                Food and community are central to family life in Kenya. Families often gather around shared meals, participate in festivals, and explore local markets together.
              </p>
            </div>
            <div className="space-y-4 text-base leading-8 text-[#4f4f4f]">
              <p>Kenyan cuisine features fresh ingredients, grilled meats, stews, and coastal Swahili flavors that are both approachable and exciting.</p>
              <p>International restaurants are available in major neighborhoods, giving families comfortable options when they want familiar dishes.</p>
              <p>Church communities, local markets, and community events play an important role in building friendships and routines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] border border-[#f2e7e4] bg-[#ffffff] p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Childcare & Domestic Support</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Nannies, housekeepers, drivers, and tutors for family life
            </h2>
            <div className="mt-6 space-y-6 text-base leading-8 text-[#4f4f4f]">
              <p>
                Many expat families in Kenya value the affordability of domestic support. Nannies, housekeepers, drivers, and tutors are often more accessible than in Western markets, making daily life easier.
              </p>
              <p>
                Nannies and childcare providers typically support school runs, homework, and after-school activities. Housekeepers help with cleaning, laundry, and meal preparation.
              </p>
              <p>
                Drivers are commonly employed by families who want reliable transportation for school, errands, and weekend trips. Tutors can support academic subjects, language learning, or exam preparation.
              </p>
              <p>
                The most successful domestic partnerships are built on clear expectations, respectful communication, and local recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">What Expat Families Wish They Knew Before Moving</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Practical advice for new families relocating to Kenya
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                <p className="text-lg font-semibold text-[#111111]">Patience is important</p>
                <p className="mt-3 text-[#4f4f4f]">Administrative tasks can take longer than expected, so plan with flexibility.</p>
              </div>
              <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                <p className="text-lg font-semibold text-[#111111]">Relationships matter</p>
                <p className="mt-3 text-[#4f4f4f]">Local connections open doors to services, schools, and trusted recommendations.</p>
              </div>
              <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                <p className="text-lg font-semibold text-[#111111]">Traffic can be challenging</p>
                <p className="mt-3 text-[#4f4f4f]">Allow extra time for school runs and city travel, especially during rush hours.</p>
              </div>
              <div className="rounded-[2rem] border border-[#f2e7e4] bg-[#fffdfa] p-8 shadow-sm">
                <p className="text-lg font-semibold text-[#111111]">International schools fill quickly</p>
                <p className="mt-3 text-[#4f4f4f]">Apply early and secure spots as soon as your relocation timeline becomes clear.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-32 sm:px-6 md:px-12 lg:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Why Kenya Is a Great Place to Raise a Family</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Education, community, nature, and long-term opportunity
              </h2>
            </div>
            <div className="space-y-8 text-base leading-8 text-[#4f4f4f]">
              <p>
                Kenya combines strong education options with an outdoor lifestyle that encourages children to spend time outside and engage with the world around them. Families often discover a richer daily rhythm here.
              </p>
              <p>
                The country’s cultural diversity provides children with exposure to new perspectives, languages, and values. This kind of cultural immersion can broaden worldviews and develop adaptability.
              </p>
              <p>
                Family values are supported through community gatherings, school events, and local traditions. Many families say Kenya’s lifestyle feels more connected and less hurried than life in large Western cities.
              </p>
              <p>
                Affordability is also a strength. Many families find that quality childcare, domestic support, and educational opportunities can be managed more easily within a reasonable budget.
              </p>
              <p>
                Whether you are relocating for work, retirement, or lifestyle change, Kenya offers long-term opportunities for families who want a strong community, engaging education, and a meaningful life abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#006B3F]">Transportation & Schools</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
                Getting your family around Kenya
              </h2>
              <p className="mt-4 text-base leading-8 text-[#4f4f4f]">
                Families rely on school transport, ride services, private vehicles, and regional travel options to keep daily life flowing.
              </p>
            </div>
            <div className="space-y-4 text-base leading-8 text-[#4f4f4f]">
              <p>School transport is widely available for international and private schools, making daily commutes convenient for children.</p>
              <p>Uber and Bolt are common in Nairobi and major towns, offering reliable ride services for family outings and errands.</p>
              <p>Many families use private vehicles for weekend trips, but taxis and booking apps are also easy to access.</p>
              <p>The SGR train connects Nairobi to Mombasa, offering a comfortable option for longer coastal travel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 pb-24 sm:px-6 md:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[3rem] bg-[#fdf6f6] p-10 text-center shadow-[0_24px_90px_rgba(17,17,17,0.08)] sm:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#C8102E]">Need Help Planning Your Family’s Move To Kenya?</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl">
              Start your family relocation with expert support.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4f4f4f] sm:text-xl">
              From schools to housing, transport to lifestyle, we can help guide your next chapter in Kenya.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-[#C8102E] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#a00b1b]"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
