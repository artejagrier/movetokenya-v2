"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

const slides = [
  {
    image: "/images/nairobi-skyline.jpg",
    title: "Your Journey to Kenya Starts Here",
    subtitle:
      "Guidance and support for individuals and families preparing for a new chapter abroad.",
  },
  {
    image: "/images/diani-beach-sunrise.jpg",
    title: "Discover Peace, Culture, and Opportunity",
    subtitle:
      "Explore a lifestyle rooted in connection, community, and possibility.",
  },
  {
    image: "/images/kenya-safari-drive.jpg",
    title: "Experience The Beauty Of Kenya",
    subtitle:
      "From unforgettable safaris to breathtaking landscapes, Kenya offers adventure and peace together.",
  },
  {
    image: "/images/diani-resort-sunset.jpg",
    title: "Luxury Coastal Living",
    subtitle:
      "Enjoy beautiful resorts, ocean views, and a slower, more connected lifestyle abroad.",
  },
  {
    image: "/images/luxury-coastal-resort.jpg",
    title: "A Fresh Start Awaits",
    subtitle:
      "Start exploring what life in Kenya could look like for you and your family.",
  },
  {
    image: "/images/modern-kenya-market.jpg",
    title: "Modern Convenience Meets Culture",
    subtitle:
      "Enjoy modern shopping, fresh markets, and everyday essentials while embracing Kenyan culture.",
  },
  {
    image: "/images/nairobi-luxury-mall.jpg",
    title: "Modern City Life",
    subtitle:
      "Kenya offers modern infrastructure, luxury shopping, restaurants, and growing business opportunities.",
  },
  {
    image: "/images/nairobi-parliament.jpg",
    title: "A Growing Nation Full Of Opportunity",
    subtitle:
      "Kenya continues to grow with expanding infrastructure, innovation, and international connections.",
  },
  {
    image: "/images/kenya-safari-sunset.jpg",
    title: "Reconnect With Nature",
    subtitle:
      "Experience unforgettable wildlife, open landscapes, and breathtaking sunsets across Kenya.",
  },
  {
    image: "/images/cave-restaurant-kenya.jpg",
    title: "Unique Experiences Await",
    subtitle:
      "From luxury dining to hidden destinations, Kenya offers experiences unlike anywhere else.",
  },
  {
    image: "/images/mountain-peak-kenya.jpg",
    title: "Adventure Beyond The Ordinary",
    subtitle:
      "Explore mountain peaks, hiking adventures, and stunning views throughout Kenya.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  location: "",
  passport_status: "",
  move_timeline: "",
  interest_type: "",
  moving_with: "",
  questions: "",
});

const [loading, setLoading] = useState(false);
const [successMessage, setSuccessMessage] = useState("");

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  const { error } = await supabase
    .from("consultation_requests")
    .insert([formData]);

  if (error) {
    alert("Something went wrong.");
    console.error(error);
  } else {
    setSuccessMessage(
      "Your consultation request has been submitted successfully."
    );

    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      location: "",
      passport_status: "",
      move_timeline: "",
      interest_type: "",
      moving_with: "",
      questions: "",
    });
  }

  setLoading(false);
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-[#111111]">
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/45" />
          </div>
        ))}

        <nav className="absolute top-0 z-20 flex w-full items-center justify-between px-6 py-6 md:px-12">
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-white">
              MoveToKenya.org
            </h1>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
            <a href="#about" className="transition hover:text-green-300">
              About
            </a>
            <a href="#why-kenya" className="transition hover:text-green-300">
              Why Kenya
            </a>
            <a href="#consultation" className="transition hover:text-green-300">
              Consultation
            </a>
            <a href="#contact" className="transition hover:text-green-300">
              Contact
            </a>
          </div>
        </nav>

        <div className="relative z-10 flex h-full items-center px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-300">
              Relocation Guidance & Support
            </p>

            <h2 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              {slides[currentSlide].title}
            </h2>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#consultation"
                className="rounded-full bg-[#0E6B4B] px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#0b573d]"
              >
                Start Your Journey
              </a>

              <a
                href="#why-kenya"
                className="rounded-full border border-white/50 px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full border transition-all duration-500 ${
                currentSlide === index
                  ? index % 3 === 0
                    ? "bg-[#0E6B4B] border-[#0E6B4B] w-10"
                    : index % 3 === 1
                    ? "bg-[#C62828] border-[#C62828] w-10"
                    : "bg-black border-white w-10"
                  : "bg-white/60 border-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#0B0B0B] px-6 py-24 text-white md:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-20 max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Luxury Living Potential
            </p>

            <h3 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
              Your USD Goes Further In Kenya
            </h3>

            <p className="max-w-3xl text-xl leading-10 text-gray-300">
              Many people are shocked when they realize how far remote income,
              retirement income, or U.S. dollars can stretch in Kenya. From luxury
              apartments and oceanfront living to private transportation, dining,
              domestic help, and unforgettable experiences — your lifestyle options
              can expand dramatically.
            </p>
          </div>

          <div className="mb-16 rounded-[2rem] border border-[#1F1F1F] bg-gradient-to-br from-[#111111] to-[#1B1B1B] p-10 shadow-2xl">

            <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Live Currency Estimate
                </p>

                <h4 className="text-4xl font-bold">
                  $1,000 USD
                </h4>
              </div>

              <div className="text-right">
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Estimated Kenyan Value
                </p>

                <h4 className="text-5xl font-bold text-[#D4AF37]">
                  KSh 129,000+
                </h4>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-3xl border border-[#222] bg-black/40 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                  Luxury Apartment
                </p>

                <h5 className="mb-3 text-3xl font-bold">
                  KSh 45K–85K
                </h5>

                <p className="leading-7 text-gray-400">
                  Modern apartments in Nairobi with security, amenities, and upscale finishes.
                </p>
              </div>

              <div className="rounded-3xl border border-[#222] bg-black/40 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                  Private Driver / Uber
                </p>

                <h5 className="mb-3 text-3xl font-bold">
                  Affordable Daily
                </h5>

                <p className="leading-7 text-gray-400">
                  Transportation costs are often dramatically lower compared to major U.S. cities.
                </p>
              </div>

              <div className="rounded-3xl border border-[#222] bg-black/40 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                  Coastal Lifestyle
                </p>

                <h5 className="mb-3 text-3xl font-bold">
                  Diani & Mombasa
                </h5>

                <p className="leading-7 text-gray-400">
                  Oceanfront experiences, resorts, beaches, and luxury escapes become more accessible.
                </p>
              </div>

              <div className="rounded-3xl border border-[#222] bg-black/40 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                  Dining & Experiences
                </p>

                <h5 className="mb-3 text-3xl font-bold">
                  Elevated Living
                </h5>

                <p className="leading-7 text-gray-400">
                  Enjoy restaurants, nightlife, safari experiences, cafés, and entertainment at lower costs.
                </p>
              </div>

            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-[2rem] border border-[#1E1E1E] bg-[#111111] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Remote Workers
              </p>

              <h4 className="mb-6 text-3xl font-bold">
                Keep Your USD Income
              </h4>

              <p className="leading-8 text-gray-400">
                Many digital nomads and remote workers discover they can maintain a
                higher quality lifestyle while working remotely abroad.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#1E1E1E] bg-[#111111] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Families
              </p>

              <h4 className="mb-6 text-3xl font-bold">
                Slower, Connected Living
              </h4>

              <p className="leading-8 text-gray-400">
                Many families are drawn to stronger community culture, family-centered
                lifestyles, and new educational opportunities abroad.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#1E1E1E] bg-[#111111] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Entrepreneurs
              </p>

              <h4 className="mb-6 text-3xl font-bold">
                Expanding Opportunity
              </h4>

              <p className="leading-8 text-gray-400">
                Kenya continues to grow rapidly with expanding infrastructure,
                international business, tourism, and innovation sectors.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section
        id="consultation"
        className="bg-[#F8F6F2] px-6 py-24 md:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="pt-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#0E6B4B]">
              Consultation Request
            </p>

            <h3 className="mb-8 max-w-2xl text-5xl font-bold leading-[1.1] md:text-7xl">
              Let’s Talk About Your Move To Kenya
            </h3>

            <p className="max-w-xl text-xl leading-10 text-gray-600">
              Whether you are exploring a fresh start, planning for your family, or
              simply looking into your options abroad, we are here to guide you
              through the early stages of your relocation journey.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-2xl lg:mt-6">
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-5">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0E6B4B] text-lg font-bold text-white">
                  1
                </div>
                <h4 className="mb-2 text-lg font-semibold">Submit Request</h4>
                <p className="text-sm leading-6 text-gray-500">
                  Tell us about your relocation goals and timeline.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-5">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#C62828] text-lg font-bold text-white">
                  2
                </div>
                <h4 className="mb-2 text-lg font-semibold">Consultation Call</h4>
                <p className="text-sm leading-6 text-gray-500">
                  Our team will contact you within 24 hours or less.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-5">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0E6B4B] text-lg font-bold text-white">
                  3
                </div>
                <h4 className="mb-2 text-lg font-semibold">Begin Planning</h4>
                <p className="text-sm leading-6 text-gray-500">
                  Receive guidance and next steps for your move to Kenya.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="rounded-2xl border border-gray-200 bg-[#FAFAFA] px-5 py-4 outline-none transition focus:border-[#0E6B4B]"
                />

                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="rounded-2xl border border-gray-200 bg-[#FAFAFA] px-5 py-4 outline-none transition focus:border-[#0E6B4B]"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-2xl border border-gray-200 bg-[#FAFAFA] px-5 py-4 outline-none transition focus:border-[#0E6B4B]"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-gray-200 bg-[#FAFAFA] px-5 py-4 outline-none transition focus:border-[#0E6B4B]"
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Current State/Country"
                className="w-full rounded-2xl border border-gray-200 bg-[#FAFAFA] px-5 py-4 outline-none transition focus:border-[#0E6B4B]"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <select
                  name="passport_status"
                  value={formData.passport_status}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 bg-[#FAFAFA] px-5 py-4 outline-none transition focus:border-[#0E6B4B]"
                >
                  <option value="">Do You Have A Passport?</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>In Progress</option>
                </select>

                <select
                  name="move_timeline"
                  value={formData.move_timeline}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 bg-[#FAFAFA] px-5 py-4 outline-none transition focus:border-[#0E6B4B]"
                >
                  <option value="">How Soon Are You Looking To Move?</option>
                  <option>0-3 Months</option>
                  <option>3-6 Months</option>
                  <option>6-12 Months</option>
                  <option>1+ Year</option>
                  <option>Just Researching</option>
                </select>
              </div>

              <select
                name="interest_type"
                value={formData.interest_type}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 bg-[#FAFAFA] px-5 py-4 outline-none transition focus:border-[#0E6B4B]"
              >
                <option value="">What Best Describes Your Interest?</option>
                <option>Relocating Permanently</option>
                <option>Exploring Options</option>
                <option>Remote Work / Digital Nomad</option>
                <option>Business / Investment</option>
                <option>Vacation / Scouting Visit</option>
              </select>

              <select
                name="moving_with"
                value={formData.moving_with}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 bg-[#FAFAFA] px-5 py-4 outline-none transition focus:border-[#0E6B4B]"
              >
                <option value="">Are You Moving Alone Or With Family?</option>
                <option>Moving Alone</option>
                <option>With Spouse</option>
                <option>With Children</option>
                <option>With Extended Family</option>
              </select>

              <textarea
                name="questions"
                value={formData.questions}
                onChange={handleChange}
                placeholder="What Questions Or Concerns Do You Have About Moving To Kenya?"
                rows={5}
                className="w-full rounded-2xl border border-gray-200 bg-[#FAFAFA] px-5 py-4 outline-none transition focus:border-[#0E6B4B]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#C62828] px-8 py-5 text-sm font-semibold tracking-wide text-white transition hover:bg-[#a61f1f]"
              >
                {loading ? "Submitting..." : "Request Consultation"}
              </button>

              {successMessage && (
                <p className="text-center text-sm font-medium text-green-600">
                  {successMessage}
                </p>
              )}

              <p className="text-center text-sm leading-6 text-gray-500">
                A member of our team will contact you within 24 hours or less
                to schedule your Google Meet consultation.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section
        id="why-kenya"
        className="bg-white px-6 py-24 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#0E6B4B]">
              Why Kenya
            </p>

            <h3 className="mb-6 text-4xl font-bold md:text-5xl">
              Explore New Possibilities Abroad
            </h3>

            <p className="text-lg leading-8 text-gray-600">
              Kenya offers a blend of culture, community, opportunity, modern
              city life, and natural beauty that continues to attract people
              seeking a fresh perspective and a slower, more connected way of
              living.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Community & Culture",
              "Remote Work Lifestyle",
              "Beautiful Landscapes",
              "Entrepreneurial Opportunities",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-100 bg-[#F8F6F2] p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 h-2 w-16 rounded-full bg-[#0E6B4B]" />

                <h4 className="text-2xl font-semibold">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-[#111111] px-6 py-12 text-center text-white md:px-12"
      >
        <h4 className="mb-4 text-2xl font-bold">MoveToKenya.org</h4>

        <p className="mb-6 text-gray-400">
          Relocation guidance and consultation support for individuals and
          families preparing to move to Kenya.
        </p>

        <div className="flex justify-center gap-6 text-sm text-gray-400">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </main>
  );
}