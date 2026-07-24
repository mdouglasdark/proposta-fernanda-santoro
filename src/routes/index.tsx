import { createFileRoute } from "@tanstack/react-router";
import {
  Plane,
  MapPin,
  CalendarDays,
  Clock,
  CreditCard,
  Wallet,
  Download,
  Globe,
} from "lucide-react";
import flightImg from "@/assets/flight.jpg";
import drkLogo from "@/assets/drk-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Itália · Nepal · Butão · Índia · Proposta DRK Viagens" },
      {
        name: "description",
        content:
          "Prévia de roteiro aéreo — Itália, Nepal, Butão e Índia. Proposta exclusiva para Fernanda Santoro · DRK Viagens.",
      },
    ],
  }),
  component: Proposal,
});

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] ${className}`}>
      {children}
    </div>
  );
}

function Pill({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-2 text-sm font-medium">
      <Icon className="h-4 w-4 text-primary" />
      {text}
    </span>
  );
}

type Leg = {
  date: string;
  from: { time: string; code: string; name: string };
  to: { time: string; code: string; name: string };
  duration: string;
  airline: string;
  flight: string;
  aircraft: string;
  stop?: string;
};

type Trecho = {
  label: string;
  origin: string;
  destination: string;
  legs: Leg[];
};

const trechos: Trecho[] = [
  {
    label: "Trecho 1",
    origin: "Brasil",
    destination: "Itália",
    legs: [
      {
        date: "Qui., 22 de outubro",
        from: { time: "17:10", code: "BSB", name: "Brasília · Presidente Juscelino" },
        to: { time: "06:20 +1", code: "LIS", name: "Lisboa · Humberto Delgado" },
        duration: "9h10",
        airline: "TAP Air Portugal",
        flight: "TP 58",
        aircraft: "Airbus A330-900neo",
        stop: "Escala 2h15 em Lisboa (LIS)",
      },
      {
        date: "Sex., 23 de outubro",
        from: { time: "08:35", code: "LIS", name: "Lisboa · Humberto Delgado" },
        to: { time: "12:35", code: "FCO", name: "Roma · Internacional" },
        duration: "3h",
        airline: "TAP Air Portugal",
        flight: "TP 832",
        aircraft: "Airbus A320neo",
      },
    ],
  },
  {
    label: "Trecho 2",
    origin: "Itália",
    destination: "Nepal",
    legs: [
      {
        date: "Ter., 3 de novembro",
        from: { time: "12:00", code: "FCO", name: "Roma · Internacional" },
        to: { time: "05:30 +1", code: "TFU", name: "Chengdu · Tianfu International" },
        duration: "10h30",
        airline: "Sichuan Airlines",
        flight: "3U 3896",
        aircraft: "Airbus A330",
        stop: "Escala 3h35 em Chengdu (TFU)",
      },
      {
        date: "Qua., 4 de novembro",
        from: { time: "09:05", code: "TFU", name: "Chengdu · Tianfu International" },
        to: { time: "11:20", code: "KTM", name: "Katmandu · Tribhuvan International" },
        duration: "4h30",
        airline: "Sichuan Airlines",
        flight: "3U 3901",
        aircraft: "Airbus A320",
      },
    ],
  },
  {
    label: "Trecho 3",
    origin: "Nepal",
    destination: "Butão",
    legs: [
      {
        date: "Sex., 6 de novembro",
        from: { time: "09:10", code: "KTM", name: "Katmandu · Tribhuvan International" },
        to: { time: "10:30", code: "PBH", name: "Paro · Internacional" },
        duration: "1h05",
        airline: "Druk Air",
        flight: "KB 401",
        aircraft: "Airbus A319 sharklets",
      },
    ],
  },
  {
    label: "Trecho 4",
    origin: "Butão",
    destination: "Índia",
    legs: [
      {
        date: "Seg., 9 de novembro",
        from: { time: "09:40", code: "PBH", name: "Paro · Internacional" },
        to: { time: "11:30", code: "DEL", name: "Nova Delhi · Indira Gandhi" },
        duration: "2h20",
        airline: "Druk Air",
        flight: "KB 200",
        aircraft: "Airbus A319",
      },
    ],
  },
  {
    label: "Trecho 5",
    origin: "Índia",
    destination: "Brasil",
    legs: [
      {
        date: "Sex., 13 de novembro",
        from: { time: "01:55", code: "DEL", name: "Nova Delhi · Indira Gandhi" },
        to: { time: "06:00", code: "MUC", name: "Munique · Franz Josef Strauss" },
        duration: "8h35",
        airline: "Lufthansa",
        flight: "LH 763",
        aircraft: "Airbus A380",
        stop: "Escala 5h55 em Munique (MUC)",
      },
      {
        date: "Sex., 13 de novembro",
        from: { time: "11:55", code: "MUC", name: "Munique · Franz Josef Strauss" },
        to: { time: "20:25", code: "GRU", name: "São Paulo · Guarulhos" },
        duration: "12h30",
        airline: "Lufthansa",
        flight: "LH 504",
        aircraft: "Airbus A350",
        stop: "Escala 2h40 em São Paulo (GRU)",
      },
      {
        date: "Sáb., 14 de novembro",
        from: { time: "23:05", code: "GRU", name: "São Paulo · Guarulhos" },
        to: { time: "00:50 +1", code: "BSB", name: "Brasília · Presidente Juscelino" },
        duration: "1h45",
        airline: "LATAM Airlines Brasil",
        flight: "LA 4535",
        aircraft: "Airbus A319",
      },
    ],
  },
];

const destinationColors: Record<string, string> = {
  "Trecho 1": "Itália 🇮🇹",
  "Trecho 2": "Nepal 🇳🇵",
  "Trecho 3": "Butão 🇧🇹",
  "Trecho 4": "Índia 🇮🇳",
  "Trecho 5": "Retorno ao Brasil 🇧🇷",
};

function LegCard({ leg, isLast }: { leg: Leg; isLast: boolean }) {
  return (
    <div>
      <div className="rounded-xl border border-border bg-secondary/30 p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{leg.date}</span>
          <span className="text-xs text-muted-foreground">{leg.airline} · {leg.flight} · {leg.aircraft}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-3xl font-bold">{leg.from.time}</p>
            <p className="text-sm font-semibold">{leg.from.code}</p>
            <p className="text-xs text-muted-foreground">{leg.from.name}</p>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1 text-muted-foreground">
            <Plane className="h-4 w-4 text-primary" />
            <span className="h-px w-full bg-border" />
            <span className="text-xs">{leg.duration}</span>
          </div>
          <div className="flex-1 text-right">
            <p className="text-3xl font-bold">{leg.to.time}</p>
            <p className="text-sm font-semibold">{leg.to.code}</p>
            <p className="text-xs text-muted-foreground">{leg.to.name}</p>
          </div>
        </div>
      </div>
      {leg.stop && !isLast && (
        <div className="my-2 flex items-center gap-3 px-2">
          <span className="h-px flex-1 border-t border-dashed border-border" />
          <span className="text-xs text-muted-foreground">{leg.stop}</span>
          <span className="h-px flex-1 border-t border-dashed border-border" />
        </div>
      )}
    </div>
  );
}

function Proposal() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* HERO */}
      <header className="relative flex min-h-screen flex-col justify-end overflow-hidden">
        <img
          src={flightImg}
          alt="Viagem ao redor do mundo"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32">
          <div className="animate-fade-up">
            <div className="mb-6 flex items-center gap-4">
              <img src={drkLogo.url} alt="DRK Viagens" width={120} height={108} className="h-16 w-auto" />
              <span className="h-px flex-1 max-w-24 bg-border" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Prévia de roteiro · Aéreo
              </span>
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] md:text-7xl">
              Uma volta
              <span className="block text-gradient">ao mundo</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Itália · Nepal · Butão · Índia — uma jornada de 23 dias pelos destinos mais exclusivos do planeta.
              Prévia dos voos para validação de datas.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Pill icon={MapPin} text="Cliente: Fernanda Santoro" />
              <Pill icon={CalendarDays} text="22 de outubro a 14 de novembro de 2025" />
              <Pill icon={Globe} text="4 países · 5 trechos" />
              <Pill icon={Clock} text="23 dias de viagem" />
            </div>
          </div>
        </div>
      </header>

      {/* ROTEIRO AÉREO */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <span className="text-gradient text-sm font-semibold uppercase tracking-[0.25em]">
            Roteiro aéreo
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            Voos e <span className="text-gradient">conexões</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Prévia para validação de datas — sujeita a ajustes conforme preferência da cliente.
          </p>
        </div>

        <div className="space-y-8">
          {trechos.map((trecho) => (
            <Card key={trecho.label} className="overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                    {trecho.label}
                  </span>
                  <span className="text-sm font-semibold">
                    {trecho.origin} <span className="text-muted-foreground">→</span> {trecho.destination}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{destinationColors[trecho.label]}</span>
              </div>
              <div className="space-y-0 p-6">
                {trecho.legs.map((leg, i) => (
                  <LegCard key={i} leg={leg} isLast={i === trecho.legs.length - 1} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 max-w-2xl">
            <span className="text-gradient text-sm font-semibold uppercase tracking-[0.25em]">
              Investimento
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Valor do aéreo</h2>
            <p className="mt-4 text-muted-foreground">
              Somente passagens aéreas · todos os 5 trechos incluídos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="relative overflow-hidden border-primary/40">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-accent)" }} />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <Wallet className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">À vista no Pix</p>
              <p className="mt-3 text-5xl font-bold text-gradient">R$ 19.428,34</p>
              <p className="mt-2 text-muted-foreground">Melhor condição para pagamento à vista.</p>
            </Card>

            <Card>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <CreditCard className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">No cartão de crédito</p>
              <p className="mt-3 text-5xl font-bold">
                12x <span className="text-gradient">R$ 1.836,79</span>
              </p>
              <p className="mt-2 text-muted-foreground">Parcelamento em até 12 vezes sem juros.</p>
            </Card>
          </div>

          <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
            Valores sujeitos a disponibilidade e variação tarifária até a confirmação e emissão dos bilhetes.
            Esta é uma prévia para validação de datas — o roteiro completo será apresentado após aprovação dos voos.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
          <div>
            <img src={drkLogo.url} alt="DRK Viagens" width={120} height={108} className="h-14 w-auto" />
            <p className="mt-2 text-sm text-muted-foreground">
              Viajar está nos detalhes · Proposta para Fernanda Santoro
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="text-sm text-muted-foreground md:text-right">
              <p>drkviagens@gmail.com</p>
              <p>+55 61 99506-1391</p>
            </div>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              Baixar proposta em PDF
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
