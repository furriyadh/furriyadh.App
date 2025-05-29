import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input'; // استيراد مكون الإدخال للنشرة البريدية

// بيانات الميزات (مقتبسة ومكيفة لمنصة فُريَّاض)
const furriyadhFeatures = [
  {
    title: "إنشاء ملفات تعريف احترافية",
    description: "سواء كنت عيادة بيطرية أو مقدم خدمة، أنشئ ملفاً تعريفياً جذاباً يعرض خبراتك وخدماتك بوضوح.",
    // icon: Placeholder icon component or SVG
  },
  {
    title: "بحث وحجز مواعيد سهل",
    description: "يمكن لأصحاب الحيوانات الأليفة البحث بسهولة عن الخدمات وحجز المواعيد مباشرة عبر المنصة بضغطة زر.",
    // icon: Placeholder icon component or SVG
  },
  {
    title: "إدارة متكاملة للمواعيد والعملاء",
    description: "نظام متكامل لمقدمي الخدمات لإدارة حجوزاتهم، ملفات عملائهم، والتواصل معهم بفعالية.",
    // icon: Placeholder icon component or SVG
  }
];

// بيانات شهادات العملاء (مؤقتة ومحسنة)
const testimonials = [
  {
    name: "د. علياء",
    role: "طبيبة بيطرية",
    image: "/placeholder-vet.jpg", // مسار مؤقت لصورة الطبيبة
    quote: "فُريَّاض ساعدت عيادتي في الوصول لشريحة أكبر من أصحاب الحيوانات الأليفة وتنظيم المواعيد بشكل لم أكن أتخيله. المنصة سهلة الاستخدام وفريق الدعم رائع!"
  },
  {
    name: "أحمد السالم",
    role: "صاحب كلب لابرادور",
    image: "/placeholder-user.jpg", // مسار مؤقت لصورة العميل
    quote: "أخيراً منصة تجمع كل ما أحتاجه لكلبي! من حجز مواعيد التطعيم إلى إيجاد أفضل أماكن العناية. شكراً فُريَّاض على تسهيل حياتنا."
  },
  {
    name: "مركز العناية بالقطط",
    role: "مقدم خدمة عناية",
    image: "/placeholder-service.jpg", // مسار مؤقت لصورة المركز
    quote: "استخدام فُريَّاض زاد من حجوزاتنا بشكل ملحوظ. العملاء يجدوننا بسهولة ويحجزون مباشرة. الملفات التعريفية للحيوانات تساعدنا في تقديم خدمة أفضل."
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      {/* قسم Hero - مقتبس من Shown.io */}
      <section className="text-center py-20 md:py-32 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            دع <span className="text-primary">فُريَّاض</span> يربطك بأفضل رعاية لحيوانك الأليف
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            اعثر على أفضل العيادات البيطرية ومقدمي خدمات رعاية الحيوانات الأليفة في الرياض، واحجز مواعيدك بسهولة وأمان، كل ذلك في مكان واحد.
          </p>
          <Button size="lg" className="px-8 py-3 text-lg">
            أنشئ حساباً مجانياً
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">+50 عيادة ومركز خدمة انضموا الأسبوع الماضي!</p>
          {/* يمكن إضافة شعارات شركاء هنا مثل Shown.io */}
        </div>
      </section>

      {/* قسم "لا تحتاج إلى خبرة" - مقتبس ومكيف */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* يمكن وضع صورة توضيحية هنا */}
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <p className="text-muted-foreground">[صورة توضيحية للمنصة]</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">مصمم للجميع: أصحاب الحيوانات ومقدمي الخدمات</h2>
            <p className="text-lg text-muted-foreground mb-6">
              سواء كنت تبحث عن أفضل رعاية لحيوانك الأليف أو كنت مقدم خدمة تسعى للوصول لعملاء جدد، فُريَّاض هو الحل الأمثل لك.
            </p>
            {/* يمكن إضافة اقتباس صغير هنا */}
          </div>
        </div>
      </section>

      {/* قسم شهادات العملاء الأولي - مقتبس */}
      <section className="py-16 md:py-24 bg-muted/40">
         <div className="container mx-auto px-4">
           {/* يمكن إضافة تقييم Trustpilot هنا */}
           <div className="text-center mb-12">
             <p className="text-muted-foreground">تقييم ممتاز على [منصة تقييم محلية/عالمية]</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="flex flex-col bg-background shadow-lg">
                <CardContent className="pt-6 flex-1 flex flex-col">
                  {/* يمكن إضافة نجوم تقييم هنا */}
                  <blockquote className="italic text-base mb-4 flex-1">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center mt-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3 bg-gray-300" />
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الميزات الرئيسي - مقتبس ومكيف */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">منصة متكاملة لإدارة رعاية حيوانك الأليف</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            من البحث والحجز إلى إدارة الملفات الطبية والتواصل، فُريَّاض يوفر لك كل الأدوات التي تحتاجها.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {furriyadhFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg">
                {/* أيقونة الميزة */}
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {/* Placeholder Icon */}?
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* قسم لوحة التحكم - مقتبس ومكيف */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ابقَ مسيطراً مع لوحة تحكم شاملة</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            تابع مواعيدك، اطلع على سجلات حيوانك الأليف، أو أدر حجوزاتك وتقاريرك كمقدم خدمة، كل ذلك من مكان واحد.
          </p>
          {/* صورة للوحة التحكم */}
          <div className="bg-background rounded-lg shadow-xl aspect-video flex items-center justify-center mb-8 max-w-4xl mx-auto">
            <p className="text-muted-foreground">[صورة توضيحية للوحة التحكم]</p>
          </div>
          <Button size="lg">
            استكشف لوحة التحكم (تجريبي)
          </Button>
        </div>
      </section>

      {/* قسم التكاملات - مقتبس ومكيف */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">تكاملات مستقبلية لخدمة أفضل</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            نخطط للربط مع خدمات الدفع الإلكتروني، أنظمة المختبرات، والمزيد لتوفير تجربة سلسة ومتكاملة.
          </p>
          {/* شعارات التكاملات */}
          <div className="flex justify-center items-center space-x-8 opacity-50">
             <span className="text-muted-foreground">(شعار دفع)</span>
             <span className="text-muted-foreground">(شعار مختبر)</span>
             <span className="text-muted-foreground">(شعار آخر)</span>
          </div>
        </div>
      </section>

      {/* قسم الدعوة للعمل الأخير - مقتبس */}
      <section className="py-20 md:py-32 text-center bg-primary/10">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">انضم إلى مجتمع فُريَّاض اليوم!</h2>
           <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
             سجل الآن مجاناً وابدأ رحلتك نحو رعاية أفضل لحيوانك الأليف أو طور خدماتك كمقدم رعاية.
           </p>
           <Button size="lg" className="px-8 py-3 text-lg">
             ابدأ الآن مجاناً
           </Button>
         </div>
      </section>

      {/* قسم النشرة البريدية - مقتبس */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">اشترك في نشرتنا الإخبارية</h3>
            <p className="text-muted-foreground mb-6 md:mb-0">تعرف على آخر الأخبار والنصائح والعروض الخاصة بمنصة فُريَّاض.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto md:mx-0">
            <Input type="email" placeholder="أدخل بريدك الإلكتروني" className="flex-grow" />
            <Button type="submit">اشترك</Button>
          </form>
        </div>
      </section>

      {/* Footer - سيتم تطويره كمكون منفصل لاحقاً */}
      {/* <Footer /> */}

    </div>
  );
};

export default HomePage;

