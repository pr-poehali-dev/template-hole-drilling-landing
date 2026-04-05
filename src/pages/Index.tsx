import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_PRODUCT = "https://cdn.poehali.dev/projects/efcc44e0-22a7-45c5-8572-1efd74d55a92/files/edfe8efc-fa36-48bd-8e5b-58ee9b2e7dae.jpg";
const IMG_BLUEPRINT = "https://cdn.poehali.dev/projects/efcc44e0-22a7-45c5-8572-1efd74d55a92/files/e8f9b71e-9b55-47e4-bd3f-3da8c3011a72.jpg";

const specs = [
  { label: "Диаметр направляющего отверстия", value: "68", unit: "мм" },
  { label: "Межосевое расстояние (ряд)", value: "71", unit: "мм" },
  { label: "Количество отверстий", value: "1 / 2 / 3 / 4", unit: "шт." },
  { label: "Толщина пластины", value: "8", unit: "мм" },
  { label: "Материал", value: "Сталь 45 (закалённая)", unit: "HRC 42–46" },
  { label: "Точность позиционирования", value: "±0.2", unit: "мм" },
  { label: "Габариты (4 отв.)", value: "340 × 90 × 8", unit: "мм" },
  { label: "Масса (4 отв.)", value: "1.95", unit: "кг" },
  { label: "Покрытие", value: "Оксидирование", unit: "чёрное" },
  { label: "Совместимость", value: "Алмазные коронки Ø68", unit: "SDS / SDS+" },
];

const variants = [
  {
    name: "ШП-1",
    holes: 1,
    price: "890",
    size: "120 × 90 × 8 мм",
    weight: "0.55 кг",
    tag: "БАЗОВЫЙ",
    desc: "Для точечных работ и исправлений",
    color: "var(--eng-cyan)",
  },
  {
    name: "ШП-2",
    holes: 2,
    price: "1 390",
    size: "195 × 90 × 8 мм",
    weight: "0.95 кг",
    tag: "ПОПУЛЯРНЫЙ",
    desc: "Двойные розетки и выключатели",
    color: "var(--eng-orange)",
  },
  {
    name: "ШП-3",
    holes: 3,
    price: "1 790",
    size: "265 × 90 × 8 мм",
    weight: "1.35 кг",
    tag: "СЕРИЯ",
    desc: "Тройные блоки в ряд",
    color: "var(--eng-cyan)",
  },
  {
    name: "ШП-4",
    holes: 4,
    price: "2 190",
    size: "340 × 90 × 8 мм",
    weight: "1.95 кг",
    tag: "ПРОФ.",
    desc: "Четырёхместные блоки, ремонтные бригады",
    color: "var(--eng-cyan)",
  },
];

const advantages = [
  { icon: "Target", title: "Точность", value: "±0.2 мм", desc: "Лазерная разметка центров, закалённая сталь не деформируется при ударных нагрузках" },
  { icon: "Zap", title: "Скорость", value: "в 3× быстрее", desc: "Разметка и сверление без рулетки — просто приложил, зафиксировал, сверлишь" },
  { icon: "Shield", title: "Ресурс", value: "10 000+ циклов", desc: "HRC 42–46, оксидирование от коррозии. Прослужит всю карьеру" },
  { icon: "Layers", title: "Совместимость", value: "Любая коронка Ø68", desc: "SDS, SDS+, биметалл — подходит ко всем стандартным коронкам для подрозетников" },
];

const useCases = [
  { title: "Бетон и кирпич", desc: "В паре с алмазной коронкой даёт идеальный вход без скола краёв", icon: "Hammer" },
  { title: "Гипсокартон и пеноблок", desc: "Шаблон удерживает коронку от смещения на мягком материале", icon: "Square" },
  { title: "Серийный монтаж", desc: "Бригады экономят до 40% времени на объектах со 100+ розетками", icon: "TrendingUp" },
  { title: "Точные исправления", desc: "Рассверловка смещённых отверстий без повреждения соседних зон", icon: "Crosshair" },
];

const howItWorks = [
  { num: "01", title: "Приложите шаблон", desc: "Совместите центр с разметкой на стене, плотно прижмите" },
  { num: "02", title: "Зафиксируйте", desc: "Два магнитных фиксатора или струбцина удерживают без рук" },
  { num: "03", title: "Сверлите", desc: "Вставьте коронку Ø68 в направляющее кольцо, начинайте сверление" },
  { num: "04", title: "Готово", desc: "Идеально позиционированное отверстие с первого прохода" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", variant: "ШП-2", qty: "1", comment: "" });
  const [sent, setSent] = useState(false);
  const [activeTab, setActiveTab] = useState<"product" | "blueprint">("product");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="eng-grid-bg min-h-screen font-sans text-[var(--eng-text)]">

      {/* TOP BAR */}
      <div className="border-b border-[var(--eng-border)] bg-[var(--eng-panel)]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4 font-mono text-xs text-[var(--eng-text-dim)]">
            <span className="text-[var(--eng-cyan)]">● В НАЛИЧИИ</span>
            <span className="text-[var(--eng-border)]">|</span>
            <span>ДОСТАВКА ПО РФ</span>
            <span className="text-[var(--eng-border)]">|</span>
            <span>ОПЛАТА ПРИ ПОЛУЧЕНИИ</span>
          </div>
          <div className="font-mono text-xs" style={{ color: '#fff' }}>
            +7 (800) 000-00-00
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — image */}
          <div>
            {/* Image tabs */}
            <div className="flex gap-0 mb-0">
              {(["product", "blueprint"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className="font-mono text-xs uppercase px-4 py-2 border border-[var(--eng-border)] transition-colors"
                  style={{
                    background: activeTab === t ? 'rgba(0,229,255,0.1)' : 'transparent',
                    color: activeTab === t ? 'var(--eng-cyan)' : 'var(--eng-text-dim)',
                    borderColor: activeTab === t ? 'var(--eng-cyan)' : 'var(--eng-border)',
                  }}
                >
                  {t === "product" ? "Фото" : "Чертёж"}
                </button>
              ))}
            </div>
            <div className="eng-panel relative overflow-hidden" style={{ minHeight: 400 }}>
              <div className="absolute top-3 right-3 font-mono text-xs z-10" style={{ color: 'var(--eng-cyan)' }}>
                {activeTab === "product" ? "ИЗДЕЛИЕ ШП / СЕРИЯ 2026" : "ЧЕР. №ШП-002 / М 1:1"}
              </div>
              <img
                src={activeTab === "product" ? IMG_PRODUCT : IMG_BLUEPRINT}
                alt={activeTab === "product" ? "Шаблон для подрозетников" : "Технический чертёж"}
                className="w-full object-cover transition-all duration-500"
                style={{ minHeight: 400, objectPosition: "center" }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--eng-panel)] to-transparent" />
              <div className="absolute bottom-3 left-14 font-mono text-xs text-[var(--eng-text-dim)]">
                Ø68мм × ряд 71мм × толщина 8мм
              </div>
            </div>
          </div>

          {/* Right — info */}
          <div className="animate-fade-in-up-delay-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="tech-badge">СЕРИЯ ШП</span>
              <span className="tech-badge" style={{ borderColor: 'var(--eng-orange)', color: 'var(--eng-orange)' }}>В НАЛИЧИИ</span>
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight mb-2" style={{ color: '#fff' }}>
              ШАБЛОН ДЛЯ<br />
              <span style={{ color: 'var(--eng-cyan)' }}>ПОДРОЗЕТНИКОВ</span>
            </h1>
            <p className="font-mono text-sm text-[var(--eng-text-dim)] uppercase tracking-wider mb-8">
              Точное сверление Ø68 мм с первого прохода
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { val: "±0.2 мм", label: "точность" },
                { val: "×3", label: "быстрее" },
                { val: "10 000+", label: "циклов" },
              ].map((s) => (
                <div key={s.label} className="eng-panel p-3 text-center">
                  <div className="font-display text-xl font-bold" style={{ color: 'var(--eng-cyan)' }}>{s.val}</div>
                  <div className="font-mono text-xs text-[var(--eng-text-dim)] mt-1 uppercase">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Variant selector */}
            <div className="mb-6">
              <div className="font-mono text-xs text-[var(--eng-text-dim)] uppercase mb-3">ВЫБЕРИТЕ ИСПОЛНЕНИЕ</div>
              <div className="grid grid-cols-2 gap-2">
                {variants.map((v) => (
                  <button
                    key={v.name}
                    onClick={() => setForm({ ...form, variant: v.name })}
                    className="eng-panel p-3 text-left transition-all duration-200 hover:border-[var(--eng-cyan)]"
                    style={{
                      borderColor: form.variant === v.name ? 'var(--eng-cyan)' : 'var(--eng-border)',
                      background: form.variant === v.name ? 'rgba(0,229,255,0.05)' : undefined,
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display font-bold text-base" style={{ color: '#fff' }}>{v.name}</span>
                      <span className="font-mono text-xs" style={{ color: v.color }}>{v.holes} отв.</span>
                    </div>
                    <div className="font-display text-lg font-semibold" style={{ color: 'var(--eng-cyan)' }}>
                      {v.price} ₽
                    </div>
                    <div className="font-mono text-xs text-[var(--eng-text-dim)] mt-1">{v.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#order"
              className="flex items-center justify-center gap-3 w-full py-4 font-mono text-sm uppercase tracking-widest font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{ background: 'var(--eng-cyan)', color: 'var(--eng-dark)' }}
            >
              <Icon name="ShoppingCart" size={16} />
              Заказать — {variants.find(v => v.name === form.variant)?.price} ₽
            </a>
            <div className="font-mono text-xs text-[var(--eng-text-dim)] text-center mt-2">
              Доставка СДЭК / Почта России · Оплата при получении
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="border-t border-[var(--eng-border)] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
            <span className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest">// ПРЕИМУЩЕСТВА</span>
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((a, i) => (
              <div key={i} className="eng-panel p-5 group hover:border-[var(--eng-cyan)] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-[var(--eng-border)] group-hover:border-[var(--eng-cyan)] transition-colors">
                    <Icon name={a.icon} size={16} style={{ color: 'var(--eng-cyan)' }} />
                  </div>
                  <span className="font-mono text-xs text-[var(--eng-text-dim)] uppercase">{a.title}</span>
                </div>
                <div className="font-display text-xl font-bold mb-2" style={{ color: '#fff' }}>{a.value}</div>
                <div className="font-mono text-xs leading-relaxed text-[var(--eng-text-dim)]">{a.desc}</div>
                <div className="eng-progress mt-4">
                  <div className="eng-progress-fill" style={{ width: `${75 + i * 6}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-[var(--eng-border)] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
            <span className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest">// КАК ИСПОЛЬЗОВАТЬ</span>
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            <div className="absolute top-8 left-8 right-8 h-px bg-[var(--eng-border)] hidden lg:block" />
            {howItWorks.map((step, i) => (
              <div key={i} className="eng-panel p-5 hover:border-[var(--eng-cyan)] transition-colors duration-300">
                <div
                  className="w-10 h-10 flex items-center justify-center font-mono text-sm font-bold mb-4"
                  style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid var(--eng-cyan)', color: 'var(--eng-cyan)' }}
                >
                  {step.num}
                </div>
                <div className="font-display text-base font-bold mb-2 uppercase" style={{ color: '#fff' }}>{step.title}</div>
                <div className="font-mono text-xs leading-relaxed text-[var(--eng-text-dim)]">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS + USE CASES */}
      <section className="border-t border-[var(--eng-border)] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
            <span className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest">// ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</span>
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Specs table */}
            <div className="eng-panel overflow-hidden">
              <div className="px-5 py-3 border-b border-[var(--eng-border)] bg-[rgba(0,229,255,0.03)]">
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--eng-cyan)' }}>ПАРАМЕТРЫ / СЕРИЯ ШП</span>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--eng-border)]">
                    <th className="text-left px-5 py-2 font-mono text-xs text-[var(--eng-text-dim)] uppercase">Параметр</th>
                    <th className="text-right px-5 py-2 font-mono text-xs text-[var(--eng-text-dim)] uppercase">Значение</th>
                    <th className="text-right px-5 py-2 font-mono text-xs text-[var(--eng-text-dim)] uppercase">Ед.</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((s, i) => (
                    <tr key={i} className="border-b border-[var(--eng-border)] hover:bg-[rgba(0,229,255,0.03)] transition-colors last:border-0">
                      <td className="px-5 py-2.5 font-mono text-xs text-[var(--eng-text-dim)]">{s.label}</td>
                      <td className="px-5 py-2.5 font-mono text-sm text-right font-medium" style={{ color: '#fff' }}>{s.value}</td>
                      <td className="px-5 py-2.5 font-mono text-xs text-right" style={{ color: 'var(--eng-cyan)' }}>{s.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Variants table + use cases */}
            <div className="space-y-4">
              {/* Variants comparison */}
              <div className="eng-panel overflow-hidden">
                <div className="px-5 py-3 border-b border-[var(--eng-border)] bg-[rgba(0,229,255,0.03)]">
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--eng-cyan)' }}>ИСПОЛНЕНИЯ И ЦЕНЫ</span>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--eng-border)]">
                      <th className="text-left px-4 py-2 font-mono text-xs text-[var(--eng-text-dim)] uppercase">Модель</th>
                      <th className="text-center px-4 py-2 font-mono text-xs text-[var(--eng-text-dim)] uppercase">Отв.</th>
                      <th className="text-left px-4 py-2 font-mono text-xs text-[var(--eng-text-dim)] uppercase">Размер</th>
                      <th className="text-right px-4 py-2 font-mono text-xs text-[var(--eng-text-dim)] uppercase">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((v, i) => (
                      <tr
                        key={i}
                        className="border-b border-[var(--eng-border)] last:border-0 cursor-pointer hover:bg-[rgba(0,229,255,0.03)] transition-colors"
                        onClick={() => setForm({ ...form, variant: v.name })}
                      >
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-semibold" style={{ color: '#fff' }}>{v.name}</span>
                            {v.tag === "ПОПУЛЯРНЫЙ" && (
                              <span className="tech-badge" style={{ borderColor: 'var(--eng-orange)', color: 'var(--eng-orange)', fontSize: '0.55rem' }}>{v.tag}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-2.5 text-center font-mono text-sm" style={{ color: 'var(--eng-cyan)' }}>{v.holes}</td>
                        <td className="px-4 py-2.5 font-mono text-xs text-[var(--eng-text-dim)]">{v.size}</td>
                        <td className="px-4 py-2.5 font-mono text-sm text-right font-semibold" style={{ color: '#fff' }}>{v.price} ₽</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Use cases */}
              <div className="grid grid-cols-2 gap-3">
                {useCases.map((u, i) => (
                  <div key={i} className="eng-panel p-4 hover:border-[var(--eng-cyan)] transition-colors duration-300">
                    <Icon name={u.icon} size={16} style={{ color: 'var(--eng-cyan)' }} className="mb-2" />
                    <div className="font-display text-sm font-semibold mb-1 uppercase" style={{ color: '#fff' }}>{u.title}</div>
                    <div className="font-mono text-xs leading-relaxed text-[var(--eng-text-dim)]">{u.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="border-t border-[var(--eng-border)] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
            <span className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest">// ОФОРМИТЬ ЗАКАЗ</span>
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="eng-panel p-5">
                <div className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest mb-4 pb-2 border-b border-[var(--eng-border)]">
                  ДОСТАВКА И ОПЛАТА
                </div>
                <div className="space-y-3">
                  {[
                    { icon: "Truck", label: "Доставка", val: "СДЭК, Почта России, самовывоз" },
                    { icon: "CreditCard", label: "Оплата", val: "При получении или онлайн" },
                    { icon: "Clock", label: "Отправка", val: "1–2 рабочих дня после заказа" },
                    { icon: "RotateCcw", label: "Возврат", val: "14 дней по закону о защите прав потребителей" },
                    { icon: "Phone", label: "Телефон", val: "+7 (800) 000-00-00" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name={c.icon} size={13} style={{ color: 'var(--eng-cyan)' }} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-[var(--eng-text-dim)]">{c.label}</div>
                        <div className="font-mono text-xs" style={{ color: '#fff' }}>{c.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="eng-panel p-5">
                <div className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest mb-3 pb-2 border-b border-[var(--eng-border)]">
                  ГАРАНТИЯ
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Award" size={24} style={{ color: 'var(--eng-cyan)' }} />
                  <div className="font-display text-2xl font-bold" style={{ color: '#fff' }}>12 месяцев</div>
                </div>
                <div className="font-mono text-xs text-[var(--eng-text-dim)] leading-relaxed">
                  На все изделия серии ШП. При производственном дефекте — замена за наш счёт.
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {!sent ? (
                <div className="eng-panel p-6">
                  <div className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest mb-6 pb-2 border-b border-[var(--eng-border)]">
                    ФОРМА ЗАКАЗА // ОТВЕТИМ В ТЕЧЕНИЕ 30 МИНУТ
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-xs text-[var(--eng-text-dim)] uppercase block mb-2">Имя *</label>
                        <input
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Иван"
                          className="w-full bg-[var(--eng-dark)] border border-[var(--eng-border)] px-4 py-2.5 font-mono text-sm focus:outline-none focus:border-[var(--eng-cyan)] transition-colors"
                          style={{ color: '#fff' }}
                        />
                      </div>
                      <div>
                        <label className="font-mono text-xs text-[var(--eng-text-dim)] uppercase block mb-2">Телефон *</label>
                        <input
                          required
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="+7 (___) ___-__-__"
                          className="w-full bg-[var(--eng-dark)] border border-[var(--eng-border)] px-4 py-2.5 font-mono text-sm focus:outline-none focus:border-[var(--eng-cyan)] transition-colors"
                          style={{ color: '#fff' }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-xs text-[var(--eng-text-dim)] uppercase block mb-2">Исполнение *</label>
                        <select
                          value={form.variant}
                          onChange={e => setForm({ ...form, variant: e.target.value })}
                          className="w-full bg-[var(--eng-dark)] border border-[var(--eng-border)] px-4 py-2.5 font-mono text-sm focus:outline-none focus:border-[var(--eng-cyan)] transition-colors appearance-none"
                          style={{ color: '#fff' }}
                        >
                          {variants.map(v => (
                            <option key={v.name} value={v.name} style={{ background: '#0d1821' }}>
                              {v.name} — {v.holes} отв. / {v.price} ₽
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="font-mono text-xs text-[var(--eng-text-dim)] uppercase block mb-2">Количество, шт.</label>
                        <input
                          value={form.qty}
                          onChange={e => setForm({ ...form, qty: e.target.value })}
                          placeholder="1"
                          type="number"
                          min="1"
                          className="w-full bg-[var(--eng-dark)] border border-[var(--eng-border)] px-4 py-2.5 font-mono text-sm focus:outline-none focus:border-[var(--eng-cyan)] transition-colors"
                          style={{ color: '#fff' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-xs text-[var(--eng-text-dim)] uppercase block mb-2">Комментарий к заказу</label>
                      <textarea
                        rows={3}
                        value={form.comment}
                        onChange={e => setForm({ ...form, comment: e.target.value })}
                        placeholder="Способ доставки, адрес, пожелания..."
                        className="w-full bg-[var(--eng-dark)] border border-[var(--eng-border)] px-4 py-2.5 font-mono text-sm focus:outline-none focus:border-[var(--eng-cyan)] transition-colors resize-none"
                        style={{ color: '#fff' }}
                      />
                    </div>

                    {/* Total */}
                    <div className="flex items-center justify-between py-3 border-t border-b border-[var(--eng-border)]">
                      <span className="font-mono text-xs text-[var(--eng-text-dim)] uppercase">Итого</span>
                      <span className="font-display text-2xl font-bold" style={{ color: 'var(--eng-cyan)' }}>
                        {(parseInt(variants.find(v => v.name === form.variant)?.price?.replace(/\s/g, '') || "0") * parseInt(form.qty || "1")).toLocaleString("ru-RU")} ₽
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[var(--eng-text-dim)]">* поля обязательны</span>
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-8 py-3 font-mono text-sm uppercase tracking-widest font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                        style={{ background: 'var(--eng-cyan)', color: 'var(--eng-dark)' }}
                      >
                        <Icon name="ShoppingCart" size={14} />
                        Оформить заказ
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="eng-panel p-10 flex flex-col items-center justify-center text-center" style={{ minHeight: 400 }}>
                  <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ border: '2px solid var(--eng-cyan)' }}>
                    <Icon name="CheckCircle" size={32} style={{ color: 'var(--eng-cyan)' }} />
                  </div>
                  <div className="font-display text-2xl font-bold mb-3 uppercase" style={{ color: '#fff' }}>Заказ принят!</div>
                  <div className="font-mono text-sm text-[var(--eng-text-dim)] mb-1">Перезвоним в течение 30 минут для подтверждения.</div>
                  <div className="font-mono text-xs text-[var(--eng-text-dim)]">Отправка — 1–2 рабочих дня.</div>
                  <div className="tech-badge mt-6">СТАТУС: ОБРАБАТЫВАЕТСЯ</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--eng-border)] bg-[var(--eng-panel)] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-mono text-xs text-[var(--eng-text-dim)]">
            © 2026 СЕРИЯ ШП — Шаблоны для подрозетников
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-[var(--eng-text-dim)]">
            <span>Все цены указаны с НДС</span>
            <span className="text-[var(--eng-border)]">|</span>
            <span style={{ color: 'var(--eng-cyan)' }}>Гарантия 12 месяцев</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
