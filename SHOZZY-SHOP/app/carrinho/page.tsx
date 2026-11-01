'use client';

import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

export default function CarrinhoPage() {
  const { items, subtotal, removeItem, updateQuantity, clearCart } = useCart();

  return (
    <div className="section-shell page-hero">
      <div className="mb-10 text-center">
        <p className="pill">Carrinho</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">Seu pedido</h1>
      </div>

      {items.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-lg text-slate-300">Seu carrinho está vazio.</p>
          <div className="mt-5">
            <Link href="/produtos" className="btn-primary">VER PRODUTOS</Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="card flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold">{item.product.name}</h2>
                  <p className="text-sm text-slate-300">{item.product.category}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="h-10 w-10 rounded-lg border border-sky-400/30 bg-sky-500/10 text-lg"
                  >
                    −
                  </button>
                  <span className="min-w-10 text-center font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="h-10 w-10 rounded-lg border border-sky-400/30 bg-sky-500/10 text-lg"
                  >
                    +
                  </button>
                  <button onClick={() => removeItem(item.product.id)} className="btn-secondary">
                    Remover
                  </button>
                </div>

                <p className="font-black text-sky-300">R$ {(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="card h-fit p-6">
            <h3 className="text-2xl font-black">Resumo</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete</span>
                <span>R$ 0,00</span>
              </div>
              <div className="flex justify-between border-t border-sky-500/10 pt-3 text-base font-bold text-white">
                <span>Total</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <Link href="/checkout" className="btn-primary w-full">Continuar para o checkout</Link>
              <button onClick={clearCart} className="btn-secondary w-full">Limpar carrinho</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
