export default function Featured() {
  const items = [
    {
      tag: "Целевой этап",
      title: "Обоснование и актуальность",
      body: "Загрязнение воздуха, воды и почвы в городах достигло критического уровня. Ежегодно более 7 млн человек в мире умирают от последствий загрязнённого воздуха. Актуальность проекта обусловлена ухудшением экологической обстановки в российских городах и недостаточной осведомлённостью населения о последствиях.",
    },
    {
      tag: "Для кого проект",
      title: "Кому он нужен",
      body: "Проект предназначен для школьников, учителей, родителей и городских администраций. Он поможет жителям города осознать масштаб экологических проблем и даст инструменты для личного участия в их решении — от раздельного сбора мусора до участия в озеленении.",
    },
    {
      tag: "Потребности",
      title: "Какие задачи решает",
      body: "Проект удовлетворяет потребность в доступной, структурированной информации об экологии города. Формирует экологическую грамотность, мотивирует к осознанному поведению и предлагает конкретные шаги: снижение выбросов CO₂, сортировка отходов, посадка деревьев.",
    },
  ];

  return (
    <div id="problem" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-400 mb-4">Обоснование проекта</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 max-w-3xl leading-tight">
          Почему важно исследовать экологию города прямо сейчас
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {items.map((item) => (
            <div key={item.tag} className="flex flex-col gap-3 border-t border-neutral-200 pt-6">
              <span className="uppercase text-xs tracking-widest text-green-700 font-medium">{item.tag}</span>
              <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
