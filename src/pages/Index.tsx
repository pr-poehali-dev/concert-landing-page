import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 fade-in">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://cdn.poehali.dev/projects/26a8aaad-89b9-4f7f-9ec4-fc8010367fdc/bucket/5150a847-fb6a-4650-8e63-43d004f1cd13.png" 
                alt="Bushido Zho 2026"
                className="w-full h-auto rounded-sm shadow-2xl"
              />
            </div>
            
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="text-[#f4a584] text-sm font-medium tracking-widest">SWEET & TEARZ TOUR 2026</div>
                <h1 className="text-6xl sm:text-7xl font-black tracking-tighter">
                  BUSHIDO ZHO
                </h1>
              </div>

              <div className="space-y-6 border-l-4 border-[#f4a584] pl-6">
                <div>
                  <div className="text-white/60 text-sm mb-1">Дата и время</div>
                  <div className="text-2xl font-bold">Пятница, 20 марта, 20:00</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">Место проведения</div>
                  <div className="text-2xl font-bold">Korston, Казань</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">Стоимость билетов</div>
                  <div className="text-xl font-medium">от 1 499 ₽ • VIP от 2 499 ₽</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#f4a584] hover:bg-[#f4a584]/90 text-black font-bold text-base px-12 py-6 rounded-none tracking-wider transition-all hover:scale-105"
                  onClick={() => window.open('https://kazan.qtickets.events/169263-bushido-zho', '_blank')}
                >
                  КУПИТЬ БИЛЕТ →
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/5 text-white font-medium text-base px-8 py-6 rounded-none tracking-wider transition-all hover:scale-105"
                  onClick={() => window.open('https://t.me/bushidozhokazan', '_blank')}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  TELEGRAM
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center">О КОНЦЕРТЕ</h2>
          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              Bushido Zho приезжает в Казань с большим сольным концертом в рамках тура «SWEET AND TEARZ». 
              Это будет не просто выступление, а мощное шоу с живым звуком, визуалом и атмосферой, которую ты не забудешь.
            </p>
            <p>
              В программе — самые громкие хиты, новые треки и уникальное исполнение.
            </p>
            <div className="bg-[#f4a584]/10 border border-[#f4a584]/20 p-6 rounded-sm mt-8">
              <p className="text-[#f4a584] font-medium">
                ⚠️ Ранее купленные билеты на перенесённый концерт в июле действительны!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center">БИЛЕТЫ</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 hover:border-[#f4a584]/50 transition-all">
                <div className="space-y-4">
                  <div className="text-sm tracking-wider text-[#f4a584]">СТАНДАРТ</div>
                  <div className="text-3xl font-bold">от 1 499 ₽</div>
                  <p className="text-sm text-white/60">Танцпол, стандартное место</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 hover:border-[#f4a584]/50 transition-all">
                <div className="space-y-4">
                  <div className="text-sm tracking-wider text-[#f4a584]">VIP</div>
                  <div className="text-3xl font-bold">от 2 499 ₽</div>
                  <p className="text-sm text-white/60">VIP-зона, лучший вид</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[#f4a584] hover:bg-[#f4a584]/90 text-black font-bold text-base px-16 py-6 rounded-none tracking-wider transition-all hover:scale-105"
                onClick={() => window.open('https://kazan.qtickets.events/169263-bushido-zho', '_blank')}
              >
                КУПИТЬ БИЛЕТ →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center">ВОПРОСЫ И ОТВЕТЫ</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 px-6 bg-white/5">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-[#f4a584] transition-colors">
                Когда состоится концерт?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-base">
                Концерт состоится в пятницу, 20 марта 2026 года в Korston, Казань.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-white/10 px-6 bg-white/5">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-[#f4a584] transition-colors">
                Во сколько начало?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-base">
                Начало концерта в 20:00. Рекомендуем прийти заранее для прохода на площадку.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-white/10 px-6 bg-white/5">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-[#f4a584] transition-colors">
                Сколько длится концерт?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-base">
                Продолжительность концерта составляет примерно 2-2.5 часа с учетом основной программы и возможных анкоров.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-white/10 px-6 bg-white/5">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-[#f4a584] transition-colors">
                Действуют ли старые билеты?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-base">
                Да, ранее купленные билеты на перенесённый концерт в июле остаются действительными.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">СЛЕДИ ЗА НОВОСТЯМИ</h3>
              <p className="text-white/60">Официальный канал концерта в Telegram</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-white font-medium px-8 py-6 rounded-none tracking-wider transition-all hover:scale-105"
                onClick={() => window.open('https://t.me/bushidozhokazan', '_blank')}
              >
                <Icon name="Send" size={20} className="mr-2" />
                TELEGRAM
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-white font-medium px-8 py-6 rounded-none tracking-wider transition-all hover:scale-105"
                onClick={() => window.open('https://bushidozho.com', '_blank')}
              >
                <Icon name="Globe" size={20} className="mr-2" />
                BUSHIDOZHO.COM
              </Button>
            </div>
            <div className="text-white/40 text-sm pt-8">
              © 2026 BUSHIDO ZHO KAZAN. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
