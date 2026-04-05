import { useState } from "react";
import Icon from "@/components/ui/icon";

const BLUEPRINT_IMG = "https://cdn.poehali.dev/projects/efcc44e0-22a7-45c5-8572-1efd74d55a92/files/aab8d947-6853-4563-908b-da57d83c2059.jpg";

const specs = [
  { label: "Материал корпуса", value: "Сталь 12Х18Н10Т", unit: "ГОСТ 5632-2014" },
  { label: "Толщина стенки", value: "4.0 / 6.0 / 8.0", unit: "мм" },
  { label: "Рабочая температура", value: "-60 … +450", unit: "°C" },
  { label: "Рабочее давление", value: "до 25", unit: "МПа" },
  { label: "Точность изготовления", value: "±0.05", unit: "мм" },
  { label: "Шероховатость поверхности", value: "Ra 0.8", unit: "мкм" },
  { label: "Масса", value: "2.4 – 18.6", unit: "кг" },
  { label: "Срок службы", value: "не менее 25", unit: "лет" },
];

const materials = [
  { name: "Нержавеющая сталь", grade: "12Х18Н10Т", hardness: "HB 170–220", tensile: "520 МПа", temp: "+450°C", tag: "СТАНДАРТ" },
  { name: "Легированная сталь", grade: "40Х ГОСТ 4543", hardness: "HB 220–280", tensile: "780 МПа", temp: "+300°C", tag: "УСИЛЕННЫЙ" },
  { name: "Титановый сплав", grade: "ВТ6 (Grade 5)", hardness: "HB 300–340", tensile: "1000 МПа", temp: "+350°C", tag: "ПРЕМИУМ" },
];

const workflowSteps = [
  { num: "01", title: "Подача заявки", desc: "Заполняете форму с техническими требованиями и объёмом партии", icon: "FileText" },
  { num: "02", title: "Технический аудит", desc: "Инженеры изучают чертежи и согласовывают допуски производства", icon: "Search" },
  { num: "03", title: "Расчёт и согласование", desc: "Формируем КП с расчётом материала, сроков и стоимости", icon: "Calculator" },
  { num: "04", title: "Производство", desc: "Токарная и фрезерная обработка на станках ЧПУ FANUC Series", icon: "Settings" },
  { num: "05", title: "ОТК и отгрузка", desc: "Контроль на КИМ Renishaw, сертификат качества, упаковка", icon: "CheckCircle" },
];

const advantages = [
  { icon: "Layers", title: "Многослойная защита", value: "3-контурный контроль", desc: "Входной контроль → операционный → финальный КИМ" },
  { icon: "Zap", title: "Сроки изготовления", value: "от 5 рабочих дней", desc: "Типовые серии — со склада, сложные — по согласованию" },
  { icon: "Award", title: "Сертификация", value: "ISO 9001:2015", desc: "Система менеджмента качества подтверждена аудитом TÜV" },
  { icon: "BarChart2", title: "Серийность", value: "1 – 10 000 шт.", desc: "Штучные и опытные партии, средняя и крупная серия" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", qty: "", comment: "" });
  const [sent, setSent] = useState(false);

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
            <span>SYS: ONLINE</span>
            <span className="text-[var(--eng-border)]">|</span>
            <span>REV: 2.4.1</span>
            <span className="text-[var(--eng-border)]">|</span>
            <span className="text-[var(--eng-cyan)]">● ПРОИЗВОДСТВО АКТИВНО</span>
          </div>
          <div className="font-mono text-xs text-[var(--eng-text-dim)]">
            +7 (812) 000-00-00
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="flex items-start gap-6 mb-12 animate-fade-in-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="tech-badge">СЕРИЯ ТШ-400</span>
              <span className="tech-badge" style={{ borderColor: 'var(--eng-orange)', color: 'var(--eng-orange)' }}>НОВИНКА 2026</span>
            </div>
            <h1 className="font-display text-6xl font-bold leading-none tracking-tight mb-3" style={{ color: '#fff' }}>
              ТЕХНИЧЕСКИЙ<br />
              <span style={{ color: 'var(--eng-cyan)' }}>ШАБЛОН</span>
            </h1>
            <p className="font-mono text-sm text-[var(--eng-text-dim)] uppercase tracking-widest">
              Высокоточные изделия промышленного класса
            </p>
          </div>
        </div>

        {/* Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Blueprint image */}
          <div className="eng-panel relative overflow-hidden" style={{ minHeight: 380 }}>
            <div className="absolute top-3 left-14 font-mono text-xs text-[var(--eng-text-dim)] z-10">
              ТШ-400 / ОБЩИЙ ВИД / М 1:2
            </div>
            <div className="absolute top-3 right-3 font-mono text-xs text-[var(--eng-cyan)] z-10">
              ЧЕР. №001-2026
            </div>
            <img
              src={BLUEPRINT_IMG}
              alt="Технический чертёж"
              className="w-full h-full object-cover opacity-90"
              style={{ minHeight: 380 }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[var(--eng-panel)] to-transparent" />
            <div className="absolute bottom-3 left-14 font-mono text-xs text-[var(--eng-text-dim)]">
              L=240мм × W=120мм × H=80мм
            </div>
          </div>

          {/* Key specs panel */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-3 animate-fade-in-up-delay-1">
              {[
                { val: "±0.05", label: "мм точность" },
                { val: "25 лет", label: "ресурс" },
                { val: "Ra 0.8", label: "шероховатость" },
              ].map((s) => (
                <div key={s.label} className="eng-panel p-4 text-center">
                  <div className="font-display text-2xl font-bold" style={{ color: 'var(--eng-cyan)' }}>{s.val}</div>
                  <div className="font-mono text-xs text-[var(--eng-text-dim)] mt-1 uppercase">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="eng-panel p-5 flex-1 animate-fade-in-up-delay-2">
              <div className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest mb-4 pb-2 border-b border-[var(--eng-border)]">
                // ТЕХНИЧЕСКИЕ ПАРАМЕТРЫ
              </div>
              <div className="space-y-2">
                {specs.slice(0, 6).map((s, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-[var(--eng-border)] border-opacity-50">
                    <span className="font-mono text-xs text-[var(--eng-text-dim)]">{s.label}</span>
                    <div className="text-right">
                      <span className="font-mono text-sm font-medium" style={{ color: '#fff' }}>{s.value}</span>
                      <span className="font-mono text-xs text-[var(--eng-text-dim)] ml-1">{s.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="border-t border-[var(--eng-border)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
            <span className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest">// ПРЕИМУЩЕСТВА</span>
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((a, i) => (
              <div key={i} className="eng-panel p-5 group hover:border-[var(--eng-cyan)] transition-colors duration-300" style={{ borderColor: 'var(--eng-border)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-[var(--eng-border)] group-hover:border-[var(--eng-cyan)] transition-colors">
                    <Icon name={a.icon} size={16} style={{ color: 'var(--eng-cyan)' }} />
                  </div>
                  <span className="font-mono text-xs text-[var(--eng-text-dim)] uppercase">{a.title}</span>
                </div>
                <div className="font-display text-xl font-semibold mb-2" style={{ color: '#fff' }}>{a.value}</div>
                <div className="font-mono text-xs leading-relaxed text-[var(--eng-text-dim)]">{a.desc}</div>
                <div className="eng-progress mt-4">
                  <div className="eng-progress-fill" style={{ width: `${70 + i * 8}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SPECS TABLE */}
      <section className="border-t border-[var(--eng-border)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
            <span className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest">// ПОЛНЫЕ ХАРАКТЕРИСТИКИ</span>
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="eng-panel overflow-hidden">
              <div className="px-5 py-3 border-b border-[var(--eng-border)] bg-[rgba(0,229,255,0.03)]">
                <span className="font-mono text-xs text-[var(--eng-cyan)] uppercase tracking-widest">ПАРАМЕТРЫ ИЗДЕЛИЯ ТШ-400</span>
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
                    <tr key={i} className="border-b border-[var(--eng-border)] hover:bg-[rgba(0,229,255,0.03)] transition-colors">
                      <td className="px-5 py-3 font-mono text-xs text-[var(--eng-text-dim)]">{s.label}</td>
                      <td className="px-5 py-3 font-mono text-sm text-right font-medium" style={{ color: '#fff' }}>{s.value}</td>
                      <td className="px-5 py-3 font-mono text-xs text-right" style={{ color: 'var(--eng-cyan)' }}>{s.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest mb-4">ДОСТУПНЫЕ МАТЕРИАЛЫ</div>
              {materials.map((m, i) => (
                <div key={i} className="eng-panel p-4 hover:border-[var(--eng-cyan)] transition-colors duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-display text-base font-semibold" style={{ color: '#fff' }}>{m.name}</div>
                      <div className="font-mono text-xs text-[var(--eng-text-dim)] mt-0.5">{m.grade}</div>
                    </div>
                    <span className="tech-badge text-xs" style={{
                      borderColor: i === 2 ? 'var(--eng-orange)' : 'var(--eng-cyan)',
                      color: i === 2 ? 'var(--eng-orange)' : 'var(--eng-cyan)',
                    }}>{m.tag}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { l: "Твёрдость", v: m.hardness },
                      { l: "Прочность", v: m.tensile },
                      { l: "Макс. темп.", v: m.temp },
                    ].map((p) => (
                      <div key={p.l} className="text-center">
                        <div className="font-mono text-sm font-medium" style={{ color: 'var(--eng-cyan)' }}>{p.v}</div>
                        <div className="font-mono text-xs text-[var(--eng-text-dim)] mt-0.5">{p.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-t border-[var(--eng-border)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
            <span className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest">// СХЕМА РАБОТЫ</span>
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
          </div>
          <div className="relative">
            <div className="absolute top-8 left-8 right-8 h-px bg-[var(--eng-border)] hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {workflowSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="eng-panel p-5 h-full hover:border-[var(--eng-cyan)] transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-8 h-8 flex items-center justify-center font-mono text-xs font-bold"
                        style={{
                          background: 'rgba(0, 229, 255, 0.1)',
                          border: '1px solid var(--eng-cyan)',
                          color: 'var(--eng-cyan)',
                        }}
                      >
                        {step.num}
                      </div>
                      <Icon name={step.icon} size={14} style={{ color: 'var(--eng-text-dim)' }} />
                    </div>
                    <div className="font-display text-sm font-semibold mb-2 uppercase tracking-wide" style={{ color: '#fff' }}>{step.title}</div>
                    <div className="font-mono text-xs leading-relaxed text-[var(--eng-text-dim)]">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="border-t border-[var(--eng-border)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
            <span className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest">// ОФОРМИТЬ ЗАЯВКУ</span>
            <div className="h-px flex-1 bg-[var(--eng-border)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Info block */}
            <div className="lg:col-span-2 space-y-4">
              <div className="eng-panel p-5">
                <div className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest mb-4 pb-2 border-b border-[var(--eng-border)]">
                  КОНТАКТЫ
                </div>
                <div className="space-y-3">
                  {[
                    { icon: "Phone", label: "Телефон", val: "+7 (812) 000-00-00" },
                    { icon: "Mail", label: "Email", val: "info@techno-shablon.ru" },
                    { icon: "MapPin", label: "Адрес", val: "Санкт-Петербург, ул. Промышленная, 1" },
                    { icon: "Clock", label: "Режим работы", val: "Пн–Пт 09:00–18:00" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name={c.icon} size={14} style={{ color: 'var(--eng-cyan)' }} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-[var(--eng-text-dim)]">{c.label}</div>
                        <div className="font-mono text-sm" style={{ color: '#fff' }}>{c.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="eng-panel p-5">
                <div className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest mb-3 pb-2 border-b border-[var(--eng-border)]">
                  ДОКУМЕНТАЦИЯ
                </div>
                {["Паспорт изделия ТШ-400.pdf", "Сертификат ISO 9001.pdf", "Чертёж 3D-модель.stp"].map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 py-2 border-b border-[var(--eng-border)] last:border-0 cursor-pointer group">
                    <Icon name="FileDown" size={13} style={{ color: 'var(--eng-cyan)' }} />
                    <span className="font-mono text-xs group-hover:text-white transition-colors" style={{ color: 'var(--eng-text-dim)' }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {!sent ? (
                <div className="eng-panel p-6">
                  <div className="font-mono text-xs text-[var(--eng-text-dim)] uppercase tracking-widest mb-6 pb-2 border-b border-[var(--eng-border)]">
                    ФОРМА ЗАПРОСА КП // ОБРАБОТКА: 1 РАБОЧИЙ ДЕНЬ
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-xs text-[var(--eng-text-dim)] uppercase block mb-2">Имя *</label>
                        <input
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Иванов Иван"
                          className="w-full bg-[var(--eng-dark)] border border-[var(--eng-border)] px-4 py-2.5 font-mono text-sm focus:outline-none focus:border-[var(--eng-cyan)] transition-colors"
                          style={{ color: '#fff' }}
                        />
                      </div>
                      <div>
                        <label className="font-mono text-xs text-[var(--eng-text-dim)] uppercase block mb-2">Компания</label>
                        <input
                          value={form.company}
                          onChange={e => setForm({ ...form, company: e.target.value })}
                          placeholder="ООО «Производство»"
                          className="w-full bg-[var(--eng-dark)] border border-[var(--eng-border)] px-4 py-2.5 font-mono text-sm focus:outline-none focus:border-[var(--eng-cyan)] transition-colors"
                          style={{ color: '#fff' }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <div>
                        <label className="font-mono text-xs text-[var(--eng-text-dim)] uppercase block mb-2">Количество, шт.</label>
                        <input
                          value={form.qty}
                          onChange={e => setForm({ ...form, qty: e.target.value })}
                          placeholder="100"
                          type="number"
                          min="1"
                          className="w-full bg-[var(--eng-dark)] border border-[var(--eng-border)] px-4 py-2.5 font-mono text-sm focus:outline-none focus:border-[var(--eng-cyan)] transition-colors"
                          style={{ color: '#fff' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-mono text-xs text-[var(--eng-text-dim)] uppercase block mb-2">Технические требования / комментарий</label>
                      <textarea
                        rows={4}
                        value={form.comment}
                        onChange={e => setForm({ ...form, comment: e.target.value })}
                        placeholder="Укажите марку материала, допуски, покрытие или прикрепите чертёж..."
                        className="w-full bg-[var(--eng-dark)] border border-[var(--eng-border)] px-4 py-2.5 font-mono text-sm focus:outline-none focus:border-[var(--eng-cyan)] transition-colors resize-none"
                        style={{ color: '#fff' }}
                      />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-mono text-xs text-[var(--eng-text-dim)]">* поля обязательны</span>
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-8 py-3 font-mono text-sm uppercase tracking-widest font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                        style={{
                          background: 'var(--eng-cyan)',
                          color: 'var(--eng-dark)',
                        }}
                      >
                        <Icon name="Send" size={14} />
                        Отправить запрос
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="eng-panel p-10 flex flex-col items-center justify-center text-center" style={{ minHeight: 400 }}>
                  <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ border: '2px solid var(--eng-cyan)' }}>
                    <Icon name="CheckCircle" size={32} style={{ color: 'var(--eng-cyan)' }} />
                  </div>
                  <div className="font-display text-2xl font-bold mb-3 uppercase" style={{ color: '#fff' }}>Заявка принята</div>
                  <div className="font-mono text-sm text-[var(--eng-text-dim)] mb-2">Наш инженер свяжется с вами в течение 1 рабочего дня.</div>
                  <div className="tech-badge mt-4">СТАТУС: ОБРАБАТЫВАЕТСЯ</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--eng-border)] bg-[var(--eng-panel)] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[var(--eng-text-dim)]">
            © 2026 ТЕХНОШАБЛОН — Все права защищены
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-[var(--eng-text-dim)]">
            <span>ИНН: 000000000000</span>
            <span className="text-[var(--eng-border)]">|</span>
            <span>ОГРН: 0000000000000</span>
            <span className="text-[var(--eng-border)]">|</span>
            <span style={{ color: 'var(--eng-cyan)' }}>ISO 9001:2015</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
