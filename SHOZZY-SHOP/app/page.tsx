import Link from 'next/link';
import { products, categories, testimonials, faqs } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  return (
    <>
      <section className="section-shell grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
        <div className="space-y-7">
          <span className="pill">performance premium</span>
          <div className="space-y-4">
            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.08em] md:text-6xl">
              SUA PERFORMANCE
              <span className="block bg-gradient-to-r from-sky-300 via-sky-400 to-blue-600 bg-clip-text text-transparent">
                COMEÇA AQUI.
              </span>
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Otimize sua experiência e encontre as configurações ideais para jogar Free Fire com mais conforto, precisão e confiança.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/produtos" className="btn-primary">VER PRODUTOS</Link>
            <Link href="/suporte" className="btn-secondary">FALAR COM SUPORTE</Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ Atendimento profissional</span>
            <span>✓ Configurações personalizadas</span>
            <span>✓ Suporte rápido</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-sky-400/20 bg-[#0d1529] p-6 shadow-[0_30px_80px_rgba(14,165,233,0.15)]">
          <div className="rounded-[1.5rem] border border-sky-400/20 bg-[#0b1323] p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="pill">SHOZZY SHOP</span>
              <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-sky-200">
                premium
              </span>
            </div>

            <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
              <p className="text-sm text-slate-300">Configuração principal</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Sensi + HUD + FPS</h2>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-sky-400/20 bg-[#111d31] p-4">
                <p className="text-xs text-slate-400">Precisão</p>
                <p className="mt-2 text-2xl font-black text-sky-300">Alta</p>
              </div>
              <div className="rounded-2xl border border-sky-400/20 bg-[#111d31] p-4">
                <p className="text-xs text-slate-400">Ajuste</p>
                <p className="mt-2 text-2xl font-black text-sky-300">3x</p>
              </div>
              <div className="rounded-2xl border border-sky-400/20 bg-[#111d31] p-4">
                <p className="text-xs text-slate-400">Suporte</p>
                <p className="mt-2 text-2xl font-black text-sky-300">24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="section-shell py-16">
        <div className="mb-10 text-center">
          <p className="pill">Produtos em destaque</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">Escolha a melhor solução para seu setup</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="categorias" className="section-shell py-16">
        <div className="mb-10 text-center">
          <p className="pill">Categorias</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">Tudo para seu gameplay</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <div key={category.name} className="card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-xl font-black text-sky-300">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-10 text-center">
          <p className="pill">Benefícios</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">Vantagens da SHOZZY SHOP</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Configuração profissional', 'Estratégias pensadas para conforto visual e maior controle no jogo.'],
            ['Atendimento humano', 'Suporte claro, direto e focado em ajudar sua experiência.'],
            ['Entrega digital segura', 'Produtos digitais prontos para uso, com organização e acompanhamento.']
          ].map(([title, text]) => (
            <div key={title} className="card p-6">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-sky-500/10 text-2xl flex items-center justify-center text-sky-300">✦</div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-10 text-center">
          <p className="pill">Avaliações</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">Clientes satisfeitos</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="card p-6">
              <div className="mb-4 text-sky-300">★★★★★</div>
              <p className="text-sm leading-7 text-slate-300">“{item.text}”</p>
              <div className="mt-5 border-t border-sky-500/10 pt-4">
                <p className="font-bold">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="section-shell py-16">
        <div className="mb-10 text-center">
          <p className="pill">FAQ</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">Perguntas frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="card p-5">
              <h3 className="text-lg font-bold">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="rounded-[2rem] border border-sky-400/20 bg-gradient-to-r from-sky-500/10 to-blue-600/10 p-8 text-center">
          <p className="pill">Suporte</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">Precisando de ajuda?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">Nossa equipe está pronta para orientar sua compra, configuração e dúvidas sobre Free Fire.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/suporte" className="btn-primary">ABRIR SUPORTE</Link>
            <Link href="/contato" className="btn-secondary">ENTRAR EM CONTATO</Link>
          </div>
        </div>
      </section>
    </>
  );
}
