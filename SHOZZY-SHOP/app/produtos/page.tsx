import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';

export default function ProdutosPage() {
  return (
    <div className="section-shell page-hero">
      <div className="mb-10 text-center">
        <p className="pill">Catalogo</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Produtos SHOZZY SHOP</h1>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-secondary">Início</Link>
        <Link href="/carrinho" className="btn-primary">Carrinho</Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="card overflow-hidden">
            <div className="relative h-56 w-full">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="pill">{product.category}</span>
                <span className="font-black text-sky-300">R$ {product.price.toFixed(2)}</span>
              </div>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{product.description}</p>
              <div className="mt-5 flex gap-3">
                <Link href={`/produtos/${product.slug}`} className="btn-secondary flex-1">Ver detalhes</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
