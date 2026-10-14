<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the pharmaceutical portfolio in a browser-safe data module; exact SKU descriptions remain the source of truth for catalog filters and inquiry validation.
- Shared navigation wraps the root Outlet; each content page has its own file route and page-specific metadata.
- Buyer inquiries use a validated public server function with server-only inserts; clients have no access to read inquiry records.
- Generated product images illustrate dosage forms only and must not imply exact commercial packaging.
- Keep `/` as the dedicated home page and `/products` as the searchable portfolio; shared navigation links to Home, Products, and Enquiry so buyers can find the catalog and contact flow quickly.
