# Rede Guandu — Cestas Agroecológicas

Sistema de pedidos online para cestas agroecológicas da Rede Guandu, grupo de consumo responsável vinculado à ESALQ-USP (Piracicaba/SP).

## Como funciona

- **Consumidores** escolhem o tipo de cesta, selecionam produtos de diferentes produtores e enviam o pedido
- **Gestão** (protegida por senha) permite gerenciar produtores, produtos, pedidos e ciclos de entrega
- Dados sincronizados com **Google Sheets** via Apps Script; funciona offline com dados locais

## Estrutura

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Aplicação completa (HTML/CSS/JS em arquivo único) |
| `apps-script.gs` | Backend Google Apps Script para sincronização com Google Sheets |

## Tipos de cesta

| Cesta | Preço |
|-------|-------|
| Pequena (5 itens) | R$ 39 |
| Grande (8 itens) | R$ 51 |
| Monte sua Cesta | R$ 6/item |
| 2 Pequenas (promo) | R$ 66 |
| 2 Grandes (promo) | R$ 90 |

## Produtores parceiros

- Cooperflora (hortaliças, verduras, frutas)
- CAJAN (panificados)
- Sítio Boa Vista (laticínios)
- Mel & Flores (mel e derivados)
- Raízes da Terra (processados)
- Horta Milton Santos (microverdes e PANCs)
- Granja Caipira (ovos e frango)

## Deploy

1. Copie o conteúdo de `apps-script.gs` para um projeto no [Google Apps Script](https://script.google.com)
2. Execute a função `inicializar()` para criar as abas na planilha
3. Faça o deploy como Web App (acesso: qualquer pessoa)
4. Cole a URL do deploy na constante `API_URL` do `index.html`
5. Hospede o `index.html` (GitHub Pages, Netlify, ou como artefato do Claude)

## Retirada

ADUSP — ESALQ-USP, Terças 16h às 20h  
Pagamento: PIX ou cartão

## Contato

(19) 98210-8204 | @redeguandu

---

Desenvolvido para a **Rede Guandu — Grupo de Consumo Responsável** em parceria com a **Cooperflora**.
