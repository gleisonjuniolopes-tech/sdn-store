# SHOZZY SHOP

Projeto de storefront profissional para loja especializada em Free Fire.

## Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- React Context para carrinho
- Persistência local com localStorage
- Proteção básica do painel administrativo

## Instalação

```bash
cd SHOZZY-SHOP
npm install
npm run dev
```

## Variáveis de ambiente

Crie um arquivo `.env.local` com:

```bash
NEXT_PUBLIC_SITE_URL=https://shozzyshop.com
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_DISCORD_INVITE=https://discord.com/invite/
NEXT_PUBLIC_ADMIN_EMAIL=admin@shozzyshop.com
```

## Publicação e domínio

- Configure o DNS do domínio para apontar para a plataforma de hospedagem.
- Habilite HTTPS na hospedagem.
- Ajuste `NEXT_PUBLIC_SITE_URL` para o domínio final.
- Não afirmamos que o domínio está comprado ou ativo; o projeto foi preparado para ser publicado em `shozzyshop.com` e `shozzyshop.org`.

## Estrutura

- `app/` — rotas e páginas
- `components/` — componentes reutilizáveis
- `lib/` — dados, utilitários e autenticação

## Observações de segurança

- Senhas do painel não são salvas em texto puro.
- Dados de cartão não são armazenados no projeto.
- O fluxo de pagamentos está preparado para integrações seguras, como PIX, cartão via gateway ou boleto, sem guardar dados na aplicação.
