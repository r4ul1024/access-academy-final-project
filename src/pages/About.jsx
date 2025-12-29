import './About.css'

export default function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>О компании HomeQ</h1>
          <p>Мы помогаем людям найти свой идеальный дом</p>
        </div>
      </section>

      <section className="about-main">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Кто мы?</h2>
              <p>
                HomeQ — это современная платформа недвижимости, которая облегчает поиск и покупку жилья. 
                С более чем 15 годами опыта, мы помогли тысячам людей найти свой идеальный дом.
              </p>
              <p>
                Наша команда профессионалов готова помочь вам на каждом этапе: от поиска подходящего объекта 
                до оформления всех документов. Мы верим в честность, качество и инновации.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat">
                <h3>15+</h3>
                <p>Лет опыта</p>
              </div>
              <div className="stat">
                <h3>5000+</h3>
                <p>Довольных клиентов</p>
              </div>
              <div className="stat">
                <h3>1500+</h3>
                <p>Объектов продано</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-container">
          <h2>Наши ценности</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Честность</h3>
              <p>Честная информация и отсутствие скрытых комиссий</p>
            </div>
            <div className="value-card">
              <h3>Качество</h3>
              <p>Тщательная проверка каждого объекта</p>
            </div>
            <div className="value-card">
              <h3>Помощь</h3>
              <p>Профессиональная поддержка на всех этапах</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
