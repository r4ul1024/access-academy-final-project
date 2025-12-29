import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Форма отправлена:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Свяжитесь с нами</h1>
          <p>Мы всегда готовы помочь вам найти идеальное жилье</p>
        </div>
      </section>

      <section className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Информация для связи</h2>
            
            <div className="info-block">
              <h3>📍 Адрес</h3>
              <p>
                улица Примерная, дом 123<br/>
                Москва, 101000<br/>
                Россия
              </p>
            </div>

            <div className="info-block">
              <h3>📞 Телефон</h3>
              <p>
                <a href="tel:+79991234567">+7 (999) 123-45-67</a><br/>
                <a href="tel:+79998765432">+7 (999) 876-54-32</a>
              </p>
            </div>

            <div className="info-block">
              <h3>✉️ Email</h3>
              <p>
                <a href="mailto:info@homeq.ru">info@homeq.ru</a><br/>
                <a href="mailto:support@homeq.ru">support@homeq.ru</a>
              </p>
            </div>

            <div className="info-block">
              <h3>⏰ Часы работы</h3>
              <p>
                Пн-Пт: 09:00 - 18:00<br/>
                Сб: 10:00 - 16:00<br/>
                Вс: Закрыто
              </p>
            </div>

            <div className="info-block">
              <h3>Социальные сети</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Отправить сообщение</h2>
            {submitted && (
              <div className="success-message">
                ✓ Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше имя"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Сообщение *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Ваше сообщение"
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Отправить</button>
            </form>
          </div>
        </div>
      </section> 
    </div>
  )
}
