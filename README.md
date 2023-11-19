# cekrause

This website was developed with the purpose to be my professional portfolio.

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com)
  - [shadcn/ui](https://ui.shadcn.com)
- **Deployment**: [Vercel](https://vercel.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Usage

Run the following commands in your terminal to run the project locally:

```bash
git clone https://github.com/ce-krause/cekrause.git
cd cekrause
pnpm i
pnpm dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/ce-krause/cekrause/blob/master/.env.example).

## API

The application counts with an endpoint that receives an GitHub's username and return the public repositories with at least one language of the respective user.

`https://cekrause.vercel.app/api/repositories/CUSTOM_USER`

Replace `CUSTOM_USER` with the desired user.
