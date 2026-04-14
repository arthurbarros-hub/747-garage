# 747 Garage

Portfólio web premium da 747 Garage, focado em Mercedes clássicas dos anos 80 e 90, com catálogo de veículos, peças, serviços especializados e fluxo de reserva.

## Preview

![Hero 747 Garage](public/vehicles/prata-1.png)

<p align="center">
	<img src="public/vehicles/branco1.png" alt="Card de veículo" width="31%" />
	<img src="public/pecas/body-kit-w201-carro-completo.jpeg" alt="Card de peças" width="31%" />
	<img src="public/historia/07-resultado-atual-2024.jpeg" alt="História da garagem" width="31%" />
</p>

## Destaques do projeto

- Landing page com identidade visual premium e animações.
- Catálogo de veículos com galeria de fotos e páginas individuais.
- Catálogo de peças com filtros, ordenação e paginação.
- Catálogo de serviços com foco em restauração e instalação.
- Formulário de reserva com validação e proteção de segurança.
- Páginas de tratamento de erro e 404 customizadas.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Prisma + SQLite
- Zod (validação)

## Segurança aplicada

- Validação de payload no backend.
- Sanitização de campos de entrada.
- Proteção CSRF com cookie + header.
- Rate limit por IP.
- Verificação de origem confiável.
- Honeypot anti-bot no fluxo de reserva.
- Headers de segurança e CSP via middleware.

Mais detalhes em [SECURITY.md](SECURITY.md).

## Estrutura principal

```text
app/
	page.tsx
	vehicles/
	pecas/
	servicos/
	api/
components/
lib/
prisma/
public/
```

## Rodando localmente

### 1) Instalar dependências

```bash
npm install
```

### 2) Configurar variáveis de ambiente

Use o arquivo [.env.example](.env.example) como base.

### 3) (Opcional) Seed do banco

```bash
npm run db:seed
```

### 4) Iniciar em desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de produção
- `npm run start`: servidor de produção
- `npm run lint`: análise de lint
- `npm run db:seed`: popula dados iniciais

## Galeria do repositório

### Veículos

- ![Mercedes prata](public/vehicles/prata-2.png)
- ![Mercedes branco](public/vehicles/branco2.png)
- ![Mercedes vinho](public/vehicles/w201-vinho-externa-frente-lateral.jpeg)

### Peças

- ![Body kit W201](public/pecas/body-kit-w201-kit-completo.jpeg)
- ![Painel W201](public/pecas/painel-instrumentos-w201.jpeg)
- ![Lanterna W201](public/pecas/lanterna-traseira-bosch-w201.jpeg)

### História

- ![Primeiros carros](public/historia/01-primeiros-carros-2019.jpeg)
- ![Construção](public/historia/06-etapas-construcao-2021.jpeg)
- ![Resultado atual](public/historia/07-resultado-atual-2024.jpeg)

## Autor

Projeto desenvolvido para apresentação de portfólio da 747 Garage.


