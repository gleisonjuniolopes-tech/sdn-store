import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="section-shell page-hero">
      <div className="mb-6">
        <Link href="/produtos" className="text-sm text-sky-300">← Voltar ao catálogo</Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card overflow-hidden p-0">
          <div className="relative h-[420px] w-full">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <span className="pill">{product.category}</span>
            <h1 className="mt-4 text-4xl font-black tracking-tight">{product.name}</h1>
          </div>

          <p className="text-lg text-slate-300">{product.description}</p>

          <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-5">
            <p className="text-sm text-slate-400">Preço</p>
            <p className="mt-2 text-4xl font-black text-sky-300">R$ {product.price.toFixed(2)}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/checkout" className="btn-primary">COMPRAR</Link>
            <Link href="/carrinho" className="btn-secondary">ADD AO CARRINHO</Link>
          </div>

          <div className="space-y-2 text-sm text-slate-300">
            <p>✓ Compatível com Android</p>
            <p>✓ Configuração pensada para Free Fire</p>
            <p>✓ Entrega digital após confirmação</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-black">Detalhes do produto</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-xl font-bold">Benefícios</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              {product.benefits.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold">Compatibilidade</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              {product.compatibility.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
