'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [ordered, setOrdered] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const customer = {
      name: (event.currentTarget.elements.namedItem('name') as HTMLInputElement)?.value || 'Cliente',
      email: (event.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value || 'cliente@exemplo.com',
      payment: (event.currentTarget.elements.namedItem('payment') as HTMLSelectElement)?.value || 'pix'
    };

    const orders = JSON.parse(localStorage.getItem('shozzy-orders') || '[]');

    const newOrder = {
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'aguardando pagamento',
      total: subtotal,
      customer,
      items
    };

    localStorage.setItem('shozzy-orders', JSON.stringify([...orders, newOrder]));
    clearCart();
    setOrdered(true);
  };

  if (ordered) {
    return (
      <div className="section-shell page-hero">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-sky-400/20 bg-[#0d1529] p-8 text-center">
          <p className="pill">Pedido confirmado</p>
          <h1 className="mt-4 text-4xl font-black">Seu pedido foi registrado com sucesso.</h1>
          <p className="mt-3 text-slate-300">Acompanhe o status na área de rastreio e aguarde a confirmação do pagamento.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/acompanhar-pedido" className="btn-primary">ACOMPANHAR PEDIDO</Link>
            <Link href="/produtos" className="btn-secondary">CONTINUAR COMPRANDO</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-shell page-hero">
      <div className="mb-10 text-center">
        <p className="pill">Checkout</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">Finalizar pedido</h1>
      </div>

      {items.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-lg text-slate-300">Seu carrinho está vazio. Adicione produtos antes de finalizar.</p>
          <div className="mt-5">
            <Link href="/produtos" className="btn-primary">VER PRODUTOS</Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-2xl font-black">Identificação do cliente</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Nome</label>
                  <input name="name" className="input" placeholder="Seu nome" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">E-mail</label>
                  <input name="email" type="email" className="input" placeholder="seu@email.com" required />
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-black">Forma de pagamento</h2>
              <div className="mt-5">
                <select name="payment" className="input" required>
                  <option value="pix">PIX</option>
                  <option value="cartao">Cartão via gateway seguro</option>
                  <option value="boleto">Boleto</option>
                </select>
              </div>
            </div>
          </div>

          <div className="card h-fit p-6">
            <h2 className="text-2xl font-black">Resumo do pedido</h2>
            <div className="mt-5 space-y-3">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between border-b border-sky-500/10 pb-3 text-sm text-slate-300">
                  <span>{item.product.name} x{item.quantity}</span>
                  <span>R$ {(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between text-lg font-black">
              <span>Total</span>
              <span className="text-sky-300">R$ {subtotal.toFixed(2)}</span>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full">CONFIRMAR PEDIDO</button>
          </div>
        </form>
      )}
    </div>
  );
}
