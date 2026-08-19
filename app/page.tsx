"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Sparkles, Award, Heart, Utensils, Crown, Gem } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <section className="relative py-12 lg:py-16 overflow-hidden animate-in fade-in duration-1500 ease-out">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-emerald-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse duration-4000"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-2000 duration-6000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-100/20 to-emerald-100/20 rounded-full blur-2xl animate-spin duration-20000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 relative animate-in slide-in-from-top duration-1200 delay-300 ease-out">
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-600/10 to-emerald-600/10 rounded-full blur-2xl animate-pulse duration-3000"></div>
              <img
                src="/h3-epicura-logo.jpg"
                alt="H3 Epicura Logo"
                className="w-32 h-32 mx-auto object-contain drop-shadow-2xl relative z-10 hover:scale-110 hover:rotate-3 transition-all duration-700 ease-out animate-bounce-subtle"
              />
            </div>

            <Badge className="mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-2 text-sm font-semibold shadow-lg animate-in slide-in-from-bottom duration-1200 delay-500 ease-out hover:scale-105 hover:shadow-xl transition-all duration-300 hover:from-emerald-500 hover:to-cyan-500">
              <Crown className="w-4 h-4 mr-2 animate-pulse" />
              Where Elegance Meets Experience
            </Badge>

            <h1 className="font-serif text-5xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight animate-in slide-in-from-left duration-1400 delay-700 ease-out">
              <span className="bg-gradient-to-r from-slate-800 via-cyan-800 to-emerald-800 bg-clip-text text-transparent hover:from-cyan-600 hover:to-emerald-600 transition-all duration-700 hover:scale-105 inline-block animate-text-shimmer bg-size-200 bg-pos-0 hover:bg-pos-100">
                H3Epicura
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-700 mb-8 leading-relaxed max-w-4xl mx-auto font-light animate-in slide-in-from-right duration-1400 delay-1000 ease-out hover:text-slate-600 transition-colors duration-300">
              Raipur's most refined name in luxury wellness and hospitality. We specialize in crafting high-touch
              experiences for private affairs, corporate events, and exclusive lifestyle moments.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-6 animate-in slide-in-from-bottom duration-1400 delay-1200 ease-out">
              {[
                { icon: Gem, text: "Pan-India Presence", color: "cyan" },
                { icon: Heart, text: "Personalized Service", color: "emerald" },
                { icon: Sparkles, text: "Passion-Driven Perfection", color: "slate" },
              ].map((badge, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`px-4 py-2 text-sm border-${badge.color}-200 text-${badge.color}-800 bg-white/50 backdrop-blur-sm hover:bg-${badge.color}-50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out animate-in fade-in delay-${1400 + index * 100} hover:shadow-lg`}
                  style={{ animationDelay: `${1400 + index * 100}ms` }}
                >
                  <badge.icon className="w-4 h-4 mr-2 animate-pulse" />
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 bg-white relative animate-in fade-in duration-1500 delay-500 ease-out">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-50/30 to-transparent animate-pulse duration-8000"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 animate-in slide-in-from-left duration-1400 delay-300 ease-out">
              <Badge className="mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-4 py-2 text-sm font-semibold hover:scale-105 hover:rotate-1 transition-all duration-300 ease-out animate-bounce-subtle">
                Founder & Director
              </Badge>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 animate-in slide-in-from-bottom duration-1200 delay-500">
                <span className="bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent hover:from-emerald-600 hover:to-cyan-600 transition-all duration-700 hover:scale-105 inline-block">
                  Meet Sonia Bafna
                </span>
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed font-light animate-in fade-in duration-1200 delay-700 hover:text-slate-700 transition-colors duration-300">
                A connoisseur of elegance and hospitality, Sonia brings a deep understanding of aesthetics, emotion, and
                elite service. Her legacy is built on trust, creativity, and an unshakeable commitment to excellence —
                making her a name synonymous with class in Central India's luxury space.
              </p>
              <blockquote className="border-l-4 border-gradient-to-b from-cyan-600 to-emerald-600 pl-6 italic text-xl text-slate-800 mb-6 font-serif leading-relaxed hover:pl-8 hover:text-slate-900 transition-all duration-500 ease-out animate-in slide-in-from-left duration-1200 delay-900">
                "We don't just host events. We orchestrate unforgettable memories."
              </blockquote>
              <div className="flex flex-wrap gap-3 animate-in slide-in-from-bottom duration-1200 delay-1100">
                {[
                  { text: "Pan-India Presence", color: "cyan" },
                  { text: "Personalized Service", color: "emerald" },
                  { text: "Passion-Driven Perfection", color: "slate" },
                ].map((badge, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`px-4 py-2 text-sm border-${badge.color}-200 text-${badge.color}-800 bg-${badge.color}-50/50 hover:bg-${badge.color}-100 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-md`}
                    style={{ animationDelay: `${1200 + index * 100}ms` }}
                  >
                    {badge.text}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative animate-in slide-in-from-right duration-1400 delay-500 ease-out">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-200/30 to-emerald-200/30 rounded-3xl transform rotate-3 blur-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-700 ease-out animate-pulse duration-4000"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-cyan-300/20 to-emerald-300/20 rounded-3xl transform -rotate-2 group-hover:-rotate-3 group-hover:scale-105 transition-all duration-500 ease-out"></div>
                <img
                  src="/sonia-bafna-profile.jpg"
                  alt="Sonia Bafna - Founder & Director"
                  className="relative w-full h-auto object-cover rounded-3xl shadow-2xl group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-out hover:shadow-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 bg-white relative animate-in fade-in duration-1500 delay-700 ease-out">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent animate-pulse duration-10000"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10 animate-in slide-in-from-top duration-1200 delay-300">
            <Badge className="mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-4 py-2 text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-subtle">
              Our Signature Services
            </Badge>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 animate-in slide-in-from-bottom duration-1200 delay-500">
              <span className="bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent hover:from-cyan-600 hover:to-emerald-600 transition-all duration-700 hover:scale-105 inline-block">
                Crafted for Joy, Elegance, and Excellence
              </span>
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed font-light animate-in fade-in duration-1200 delay-700">
              Every element, customized. Every moment, elevated. We orchestrate experiences that transcend expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Signature Event Curation",
                description:
                  "Luxe birthday soirées, bespoke weddings & engagements, elegant anniversaries & family milestones",
                gradient: "from-rose-500/20 to-pink-500/20",
              },
              {
                icon: Users,
                title: "Corporate Excellence",
                description: "Seamless corporate offsites & events, experiential lifestyle & brand activations",
                gradient: "from-blue-500/20 to-cyan-500/20",
              },
              {
                icon: Sparkles,
                title: "Wellness Retreats",
                description: "Rejuvenating wellness retreats designed for mind, body, and soul restoration",
                gradient: "from-emerald-500/20 to-green-500/20",
              },
              {
                icon: Utensils,
                title: "H3 Aroma Catering",
                description:
                  "Neuroscientific approach to luxury catering with curated gourmet menus and artful presentation",
                gradient: "from-amber-500/20 to-orange-500/20",
              },
              {
                icon: Award,
                title: "Luxury Styling",
                description: "Tailored catering, decor & ambience with in-house stylists and planners",
                gradient: "from-purple-500/20 to-violet-500/20",
              },
              {
                icon: Star,
                title: "End-to-End Magic",
                description: "From the first call to the final toast – we choreograph it all with soul",
                gradient: "from-yellow-500/20 to-amber-500/20",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 transition-all duration-700 ease-out border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden animate-in slide-in-from-bottom duration-1200 hover:scale-105`}
                style={{ animationDelay: `${index * 150 + 900}ms` }}
              >
                <CardHeader className="pb-4 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out`}
                  ></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out hover:shadow-lg">
                      <service.icon className="h-8 w-8 text-cyan-700 group-hover:text-cyan-800 transition-colors duration-300" />
                    </div>
                    <CardTitle className="font-serif text-xl mb-3 text-slate-800 group-hover:text-slate-900 transition-all duration-300 group-hover:scale-105">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="py-12 bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden animate-in fade-in duration-1500 delay-1000 ease-out"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-emerald-200/20 to-transparent rounded-full blur-3xl animate-pulse duration-6000"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-cyan-200/15 to-transparent rounded-full blur-2xl animate-pulse delay-3000 duration-8000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10 animate-in slide-in-from-top duration-1200 delay-300">
            <Badge className="mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-4 py-2 text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-subtle">
              Our Portfolio
            </Badge>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 animate-in slide-in-from-bottom duration-1200 delay-500">
              <span className="bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent hover:from-emerald-600 hover:to-cyan-600 transition-all duration-700 hover:scale-105 inline-block">
                Unforgettable Moments
              </span>
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed font-light animate-in fade-in duration-1200 delay-700">
              Turning celebrations into legacy through artful styling, elegant decor, and meticulous attention to detail
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-semibold text-center mb-8 text-slate-800 animate-in slide-in-from-left duration-1200 delay-900">
              Featured Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  src: "/floral-wedding-aisle.jpg",
                  title: "Wedding Ceremony Design",
                  description: "Breathtaking floral arches creating magical wedding moments",
                },
                {
                  src: "/gucci-garden-event.jpg",
                  title: "Brand Activations",
                  description: "High-end corporate events and luxury brand experiences",
                },
                {
                  src: "/h3-aroma-dhokla-setup.jpg",
                  title: "H3 Aroma Catering",
                  description: "Artisanal food presentation with natural styling elements",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-3xl hover:-translate-y-4 hover:rotate-1 transition-all duration-700 ease-out animate-in slide-in-from-bottom duration-1200 hover:scale-105`}
                  style={{ animationDelay: `${index * 200 + 1200}ms` }}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={item.description}
                      className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <h3 className="font-serif font-bold text-xl mb-2 animate-in slide-in-from-bottom duration-300 delay-200">
                      {item.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm animate-in fade-in duration-300 delay-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-7xl mx-auto mb-10">
            {[
              { src: "/luxury-candle-hla.jpg", title: "Luxury Candle Branding" },
              { src: "/blue-hurricane-candles.jpg", title: "Ambient Lighting Design" },
              { src: "/garden-party-dining.jpg", title: "Garden Party Elegance" },
              { src: "/alfresco-dining-setup.jpg", title: "Al Fresco Luxury" },
              { src: "/luxury-bar-cabinet.jpg", title: "Premium Bar Setup" },
              { src: "/ornate-luxury-candle.jpg", title: "Royal Luxury Candles" },
              { src: "/orchid-centerpiece-romantic.jpg", title: "Romantic Centerpieces" },
              { src: "/navy-table-intimate-dining.jpg", title: "Intimate Dining" },
              { src: "/rustic-corn-display.jpg", title: "Farm-to-Table Artistry" },
              { src: "/mint-lounge-florals.jpg", title: "Garden Lounge Elegance" },
              { src: "/bohemian-orchid-setup.jpg", title: "Bohemian Luxury" },
              { src: "/artisanal-food-station.jpg", title: "Artisanal Food Stations" },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 hover:rotate-1 transition-all duration-500 ease-out animate-in fade-in duration-1000 hover:scale-110`}
                style={{ animationDelay: `${index * 75 + 1500}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-end justify-center pb-3">
                    <p className="text-white text-xs font-semibold text-center px-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-in slide-in-from-bottom duration-1200 delay-2000">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-out px-8 py-3 text-base rounded-full hover:scale-110 hover:-translate-y-1 hover:rotate-1 animate-pulse-subtle"
            >
              <Sparkles className="mr-2 h-5 w-5 animate-spin-slow" />
              View Complete Portfolio
            </Button>
          </div>
        </div>
      </section>

      <section
        id="clients"
        className="py-12 bg-gradient-to-br from-slate-50 to-cyan-50 relative animate-in fade-in duration-1500 delay-300"
      >
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-transparent rounded-full blur-3xl animate-pulse duration-8000"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10 animate-in slide-in-from-top duration-1200 delay-300">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white px-4 py-2 text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-subtle">
              Our Prestigious Clients
            </Badge>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 animate-in slide-in-from-bottom duration-1200 delay-500">
              <span className="bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent hover:from-cyan-600 hover:to-emerald-600 transition-all duration-700 hover:scale-105 inline-block">
                Trusted by Excellence
              </span>
            </h2>
          </div>
          <div className="max-w-6xl mx-auto animate-in slide-in-from-bottom duration-1200 delay-700">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-200/20 to-emerald-200/20 rounded-3xl blur-xl group-hover:blur-2xl group-hover:scale-105 transition-all duration-700 ease-out"></div>
              <img
                src="/h3-clients-showcase.jpg"
                alt="H3Epicura Highlight Events - Trusted by elite clients"
                className="relative w-full h-auto rounded-3xl shadow-2xl group-hover:shadow-3xl group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white relative animate-in fade-in duration-1500 delay-500">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cyan-50/30 to-transparent animate-pulse duration-10000"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-in slide-in-from-left duration-1200 delay-300">
              <Badge className="mb-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 text-sm font-semibold hover:scale-105 hover:rotate-1 transition-all duration-300 animate-bounce-subtle">
                H3 Aroma Catering
              </Badge>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 animate-in slide-in-from-bottom duration-1200 delay-500">
                <span className="bg-gradient-to-r from-slate-800 to-amber-800 bg-clip-text text-transparent hover:from-amber-600 hover:to-orange-600 transition-all duration-700 hover:scale-105 inline-block">
                  A Neuroscientific Approach to Luxury Catering
                </span>
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed font-light animate-in fade-in duration-1200 delay-700">
                Our H3 Aroma division leverages insights from neuroscience to create multisensory dining experiences. We
                understand that aroma plays a pivotal role in how we perceive food, triggering memories and emotions
                that enhance the overall dining experience.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Curated gourmet menus with wellness and indulgence in perfect harmony",
                  "Artful decor themes styled to reflect your vision",
                  "Scientific precision meets culinary artistry",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 animate-in slide-in-from-left duration-1000 hover:translate-x-2 transition-transform duration-300`}
                    style={{ animationDelay: `${index * 200 + 900}ms` }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <p className="text-slate-700 text-base leading-relaxed hover:text-slate-800 transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-in slide-in-from-right duration-1200 delay-500">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-3xl transform -rotate-2 blur-lg group-hover:rotate-2 group-hover:scale-110 transition-all duration-700 ease-out animate-pulse duration-4000"></div>
              <img
                src="/h3-aroma-catering-setup.jpg"
                alt="H3 Aroma luxury catering setup"
                className="relative w-full h-auto rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-2 hover:rotate-1 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-slate-900 via-cyan-900 to-emerald-900 text-white py-8 animate-in fade-in duration-1500 delay-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-cyan-800/50 to-emerald-800/50 animate-pulse duration-8000"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-4 group animate-in slide-in-from-bottom duration-1200 delay-500">
              <img
                src="/h3-epicura-logo.jpg"
                alt="H3 Epicura Logo"
                className="w-10 h-10 object-contain opacity-90 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out"
              />
              <div>
                <h3 className="font-serif font-bold text-lg text-white group-hover:text-cyan-200 transition-all duration-300 group-hover:scale-105">
                  H3Epicura
                </h3>
                <p className="text-xs text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  Luxury Wellness & Hospitality
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-in fade-in duration-1200 delay-700"></div>

            <div className="text-center animate-in slide-in-from-bottom duration-1200 delay-900">
              <p className="text-white/60 text-sm">
                Powered by{" "}
                <a
                  href="https://www.botivate.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 font-semibold transition-all duration-300 underline decoration-cyan-300/50 hover:decoration-cyan-200 hover:scale-105 hover:-translate-y-0.5 inline-block"
                >
                  Botivate
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-text-shimmer {
          background-size: 200% 200%;
          animation: text-shimmer 3s ease-in-out infinite;
        }
        
        .bg-size-200 { background-size: 200% 200%; }
        .bg-pos-0 { background-position: 0% 50%; }
        .bg-pos-100 { background-position: 100% 50%; }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        @media (max-width: 768px) {
          .animate-in {
            animation-duration: 0.8s;
          }
          
          .hover\\:scale-110:hover {
            transform: scale(1.05);
          }
          
          .hover\\:-translate-y-3:hover {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  )
}
