import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    faculty: '',
    subject: '',
    goals: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Заявка отправлена!', {
        description: 'Мы свяжемся с вами в ближайшее время',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        university: '',
        faculty: '',
        subject: '',
        goals: '',
      });
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 font-inter">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 h-[70px] flex items-center justify-between">
          <div className="font-montserrat font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Найди репетитора
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О платформе
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium hover:text-primary transition-colors">
              Как это работает
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </button>
            <Button onClick={() => scrollToSection('registration')} size="lg" className="h-10">
              Начать
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-montserrat font-extrabold text-5xl md:text-6xl leading-tight">
                Репетиторы из <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">топовых вузов</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Подготовься к ЕГЭ и экзаменам со студентами МГУ, ВШЭ, МФТИ. Первый урок бесплатно!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={() => scrollToSection('registration')} size="lg" className="text-lg h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  Найти репетитора
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button onClick={() => scrollToSection('how-it-works')} size="lg" variant="outline" className="text-lg h-14 px-8">
                  Попробовать бесплатно
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-6">
                <div className="text-center">
                  <div className="font-montserrat font-bold text-3xl text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Репетиторов</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-3xl text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">Предметов</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-3xl text-accent">4.9</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/aad406a4-59da-49f6-95ec-fe146f46c01d/files/d3048dd2-6633-431b-bee4-6a04ec3e2f29.jpg" 
                alt="Студенты занимаются" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
              Почему выбирают <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">нас?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы соединяем студентов с лучшими репетиторами из ведущих вузов страны
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'GraduationCap',
                title: 'Проверенные репетиторы',
                description: 'Все наши репетиторы — студенты топовых вузов с подтвержденными оценками',
                gradient: 'from-primary to-secondary',
              },
              {
                icon: 'Wallet',
                title: 'Доступные цены',
                description: 'Занятия в 2-3 раза дешевле обычных репетиторов. От 500₽ за час',
                gradient: 'from-secondary to-primary',
              },
              {
                icon: 'Star',
                title: 'Гарантия качества',
                description: 'Не понравился урок? Вернем деньги без лишних вопросов',
                gradient: 'from-accent to-primary',
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                    <Icon name={item.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
              Как это <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">работает?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Всего 3 простых шага до первого урока
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Заполни форму',
                  description: 'Расскажи о своих целях и предмете, который хочешь изучать',
                  icon: 'FileText',
                },
                {
                  step: '02',
                  title: 'Подберем репетитора',
                  description: 'Мы найдем идеального репетитора из твоего вуза за 24 часа',
                  icon: 'Search',
                },
                {
                  step: '03',
                  title: 'Начни учиться',
                  description: 'Договоритесь о времени и начните занятия онлайн или офлайн',
                  icon: 'Rocket',
                },
              ].map((item, index) => (
                <div key={index} className="relative animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
                      <Icon name={item.icon} className="text-white" size={36} />
                    </div>
                    <div className="font-montserrat font-bold text-5xl text-primary/20 mb-2">{item.step}</div>
                    <h3 className="font-montserrat font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="registration" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
                Начни <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">бесплатно</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Заполни форму и получи первый урок в подарок
              </p>
            </div>
            <Card className="border-0 shadow-2xl animate-scale-in">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Иван Петров" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="ivan@example.com" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон (опционально)</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">Вуз/Школа *</Label>
                    <Select value={formData.university} onValueChange={(value) => setFormData({ ...formData, university: value })} required>
                      <SelectTrigger id="university" className="h-12">
                        <SelectValue placeholder="Выберите учебное заведение" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mgu">МГУ им. Ломоносова</SelectItem>
                        <SelectItem value="hse">НИУ ВШЭ</SelectItem>
                        <SelectItem value="mipt">МФТИ</SelectItem>
                        <SelectItem value="spbu">СПбГУ</SelectItem>
                        <SelectItem value="mgimo">МГИМО</SelectItem>
                        <SelectItem value="school">Школа</SelectItem>
                        <SelectItem value="other">Моего вуза нет в списке</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="faculty">Факультет/Класс *</Label>
                    <Input 
                      id="faculty" 
                      placeholder="Физический факультет / 11 класс" 
                      required 
                      value={formData.faculty}
                      onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Предмет *</Label>
                    <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })} required>
                      <SelectTrigger id="subject" className="h-12">
                        <SelectValue placeholder="Выберите предмет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="math">Математика</SelectItem>
                        <SelectItem value="physics">Физика</SelectItem>
                        <SelectItem value="english">Английский язык</SelectItem>
                        <SelectItem value="russian">Русский язык</SelectItem>
                        <SelectItem value="chemistry">Химия</SelectItem>
                        <SelectItem value="biology">Биология</SelectItem>
                        <SelectItem value="history">История</SelectItem>
                        <SelectItem value="social">Обществознание</SelectItem>
                        <SelectItem value="informatics">Информатика</SelectItem>
                        <SelectItem value="literature">Литература</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goals">Цели обучения *</Label>
                    <Textarea 
                      id="goals" 
                      placeholder="Например: Подготовка к ЕГЭ по математике, нужно подтянуть знания за 10-11 класс..."
                      required 
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      className="min-h-[120px] resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Найти репетитора'}
                    {!isSubmitting && <Icon name="Send" className="ml-2" size={20} />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
                Часто задаваемые <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">вопросы</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'Как проверяются репетиторы?',
                  answer: 'Все репетиторы проходят проверку документов об образовании, тестирование по предмету и собеседование. Мы проверяем их студенческие билеты и оценки.',
                },
                {
                  question: 'Сколько стоят занятия?',
                  answer: 'Стоимость занятий начинается от 500₽ за час и зависит от предмета, уровня подготовки репетитора и формата занятий. Первый урок всегда бесплатный.',
                },
                {
                  question: 'Можно ли заниматься онлайн?',
                  answer: 'Да, большинство репетиторов проводят занятия как онлайн, так и офлайн. Вы можете выбрать удобный формат при регистрации.',
                },
                {
                  question: 'Что если репетитор не подойдет?',
                  answer: 'Если после первого бесплатного урока репетитор вам не подошел, мы подберем другого абсолютно бесплатно. Ваш комфорт — наш приоритет.',
                },
                {
                  question: 'Как быстро найдется репетитор?',
                  answer: 'Обычно мы подбираем подходящего репетитора в течение 24 часов после заполнения формы. В редких случаях это может занять до 48 часов.',
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl shadow-md border-0 px-6">
                  <AccordionTrigger className="font-montserrat font-semibold text-lg hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-montserrat font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Найди репетитора
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Правила
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Найди репетитора. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
