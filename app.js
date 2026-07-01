const WHATSAPP_NUMBER = "5569992031044";
const ASSET = "assets/quero-bis/products-web/";

const categories = [
  { id: "todos", label: "Tudo", image: "p01-03-x9.webp" },
  { id: "acai", label: "Açaí", image: "p03-02-x6.webp" },
  { id: "tacas", label: "Taças", image: "p05-07-x20.webp" },
  { id: "mix", label: "Mix", image: "p07-10-x47.webp" },
  { id: "kids", label: "Kids", image: "p08-03-x17.webp" },
  { id: "casquinhas", label: "Casquinhas", image: "p09-05-x12.webp" },
  { id: "milkshakes", label: "Milk Shakes", image: "p11-04-x10.webp" },
  { id: "copos", label: "Copos", image: "p11-07-x17.webp" },
];

const products = [
  {
    id: "acai-monte",
    category: "acai",
    name: "Açaí do seu jeito",
    image: "p03-02-x6.webp",
    desc: "Escolha tamanho, frutas, cremes e extras.",
    sizes: [
      { label: "Médio 400ml", price: 23 },
      { label: "Grande 500ml", price: 28 },
    ],
    tags: ["Açaí", "Monte"],
  },
  {
    id: "acai-tradicional",
    category: "acai",
    name: "Açaí Tradicional",
    image: "p03-02-x6.webp",
    desc: "Açaí, banana, granola, leite em pó e leite condensado.",
    sizes: [
      { label: "300ml", price: 20 },
      { label: "500ml", price: 24 },
      { label: "700ml", price: 30 },
    ],
    tags: ["Clássico", "3 tamanhos"],
  },
  {
    id: "acai-ferrero",
    category: "acai",
    name: "Açaí Ferrero Rocher",
    image: "p03-03-x8.webp",
    desc: "Açaí ou sorvete, Ferrero Rocher, creme de avelã, granola e leite em pó.",
    sizes: [
      { label: "300ml", price: 32 },
      { label: "500ml", price: 38 },
    ],
    tags: ["Premium"],
  },
  {
    id: "acai-kinder",
    category: "acai",
    name: "Canecake Kinder",
    image: "p03-04-x10.webp",
    desc: "Açaí ou sorvete, Kinder Bueno, creme de avelã e leite condensado.",
    sizes: [
      { label: "300ml", price: 30 },
      { label: "500ml", price: 36 },
    ],
    tags: ["Novidade"],
  },
  {
    id: "taca-ferrero",
    category: "tacas",
    name: "Taça Ferrero",
    image: "p05-02-x10.webp",
    desc: "Sorvete, chocolate, Nutella, castanhas e bombom Ferrero.",
    sizes: [{ label: "Porção", price: 34.9 }],
    tags: ["Premium"],
  },
  {
    id: "taca-kinder",
    category: "tacas",
    name: "Taça Kinder",
    image: "p05-03-x12.webp",
    desc: "Sorvete, creme de ninho, creme de chocolate, Nutella e Kinder.",
    sizes: [{ label: "Porção", price: 30 }],
    tags: ["Doce"],
  },
  {
    id: "taca-sensacao",
    category: "tacas",
    name: "Taça Sensação",
    image: "p05-07-x20.webp",
    desc: "Sorvete, cobertura de morango, leite condensado, morangos e chantilly.",
    sizes: [{ label: "Porção", price: 28 }],
    tags: ["Morango"],
  },
  {
    id: "mix-brownitella",
    category: "mix",
    name: "Milk Shake Brownitella",
    image: "p07-02-x6.webp",
    desc: "Sorvete de creme, Nutella e pedaços de brownie.",
    sizes: [
      { label: "300ml", price: 23 },
      { label: "500ml", price: 29 },
    ],
    tags: ["Brownie"],
  },
  {
    id: "mix-copo-felicidade",
    category: "mix",
    name: "Copo Felicidade",
    image: "p07-04-x10.webp",
    desc: "Sorvete, recheio de ninho, brigadeiro, Ovomaltine e chantilly.",
    sizes: [{ label: "Copo", price: 26 }],
    tags: ["Cremoso"],
  },
  {
    id: "kids-bis",
    category: "kids",
    name: "Kids Bis",
    image: "p08-02-x15.webp",
    desc: "Sorvete, casquinha, micro ball, Cereliz e cobertura.",
    sizes: [{ label: "Porção", price: 16 }],
    tags: ["Kids"],
  },
  {
    id: "magic-kids",
    category: "kids",
    name: "Milk Shake Magic Kids",
    image: "p08-03-x17.webp",
    desc: "Sorvete de morango, céu azul, coberturas e disquetes.",
    sizes: [{ label: "300ml", price: 17 }],
    tags: ["Kids", "300ml"],
  },
  {
    id: "cascao-fantasia",
    category: "kids",
    name: "Cascão Fantasia Kids",
    image: "p08-04-x22.webp",
    desc: "Sorvete, calda trufada de chocolate e micro disquetes.",
    sizes: [{ label: "Porção", price: 16 }],
    tags: ["Kids"],
  },
  {
    id: "casquinha",
    category: "casquinhas",
    name: "Casquinha Tradicional",
    image: "p09-02-x6.webp",
    desc: "Sorvete e cobertura disponíveis do dia.",
    sizes: [{ label: "Unidade", price: 8 }],
    tags: ["Unidade"],
  },
  {
    id: "cascao-trufado",
    category: "casquinhas",
    name: "Cascão Trufado",
    image: "p09-05-x12.webp",
    desc: "Sorvete, calda trufada, granulado e cobertura.",
    sizes: [{ label: "Porção", price: 16 }],
    tags: ["Trufado"],
  },
  {
    id: "milk-tradicional",
    category: "milkshakes",
    name: "Milk Shake Tradicional",
    image: "p11-02-x6.webp",
    desc: "Sorvete, cobertura, flocos de arroz, granulado e Ovomaltine.",
    sizes: [
      { label: "300ml", price: 18 },
      { label: "500ml", price: 24 },
    ],
    tags: ["Gelado"],
  },
  {
    id: "milk-pistache",
    category: "milkshakes",
    name: "Milk Shake Pistache",
    image: "p11-04-x10.webp",
    desc: "Sorvete de pistache com pistaches crocantes.",
    sizes: [
      { label: "300ml", price: 22 },
      { label: "500ml", price: 28 },
    ],
    tags: ["Pistache"],
  },
  {
    id: "copo-300",
    category: "copos",
    name: "Copo 300ml",
    image: "p11-07-x17.webp",
    desc: "Sorvete e cobertura disponíveis do dia.",
    sizes: [{ label: "300ml", price: 13 }],
    tags: ["Copo"],
  },
  {
    id: "pote-acai",
    category: "copos",
    name: "Pote de Açaí",
    image: "p11-09-x25.webp",
    desc: "Pote de 1 litro de açaí cremoso.",
    sizes: [{ label: "1 litro", price: 38 }],
    tags: ["Família"],
  },
];

const addons = [
  { id: "banana", label: "Banana", price: 3 },
  { id: "morango", label: "Morango", price: 5 },
  { id: "leite-po", label: "Leite em pó", price: 3 },
  { id: "leite-cond", label: "Leite condensado", price: 3 },
  { id: "nutella", label: "Nutella", price: 6 },
  { id: "granola", label: "Granola", price: 3 },
  { id: "ovomaltine", label: "Ovomaltine", price: 3 },
  { id: "chantilly", label: "Chantilly", price: 4 },
];

const removables = ["Banana", "Granola", "Leite em pó", "Leite condensado", "Chantilly", "Castanha"];
const flavors = ["Creme", "Chocolate", "Morango", "Açaí", "Ninho", "Pistache", "Céu azul"];

const state = {
  category: "todos",
  search: "",
  current: null,
  cart: [],
};

const dom = {
  categoryList: document.querySelector("#categoryList"),
  productList: document.querySelector("#productList"),
  productTitle: document.querySelector("#productTitle"),
  productSubtitle: document.querySelector("#productSubtitle"),
  searchInput: document.querySelector("#searchInput"),
  productDialog: document.querySelector("#productDialog"),
  productSheet: document.querySelector("#productSheet"),
  cartDialog: document.querySelector("#cartDialog"),
  cartSheet: document.querySelector("#cartSheet"),
  cartBadge: document.querySelector("#cartBadge"),
  bottomCartBadge: document.querySelector("#bottomCartBadge"),
};

function money(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function image(name) {
  return `${ASSET}${name}`;
}

function productPrice(product) {
  return Math.min(...product.sizes.map((size) => size.price));
}

function categoryName(id) {
  return categories.find((category) => category.id === id)?.label || "Produtos";
}

function currentTotal() {
  if (!state.current) return 0;
  const size = state.current.product.sizes[state.current.sizeIndex];
  const addonTotal = state.current.addons.reduce((sum, id) => {
    const addon = addons.find((item) => item.id === id);
    return sum + (addon?.price || 0);
  }, 0);
  return (size.price + addonTotal) * state.current.qty;
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + item.total, 0);
}

function filteredProducts() {
  const term = state.search.trim().toLowerCase();
  return products.filter((product) => {
    const categoryMatch = state.category === "todos" || product.category === state.category;
    const text = `${product.name} ${product.desc} ${product.tags.join(" ")}`.toLowerCase();
    return categoryMatch && (!term || text.includes(term));
  });
}

function renderCategories() {
  dom.categoryList.innerHTML = categories
    .map(
      (category) => `
        <button class="category-card ${state.category === category.id ? "is-active" : ""}" type="button" data-category="${category.id}">
          <img src="${image(category.image)}" alt="" />
          <b>${category.label}</b>
        </button>
      `,
    )
    .join("");
}

function renderProducts() {
  const visible = filteredProducts();
  dom.productTitle.textContent = state.category === "todos" ? "Produtos" : categoryName(state.category);
  dom.productSubtitle.textContent = `${visible.length} opções encontradas`;

  if (!visible.length) {
    dom.productList.innerHTML = `<div class="empty">Nenhum produto encontrado. Tente buscar por outro nome.</div>`;
    return;
  }

  dom.productList.innerHTML = visible
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image">
            <img src="${image(product.image)}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product-info">
            <div class="product-meta">
              ${product.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
            </div>
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <div class="product-bottom">
              <span class="price"><small>a partir de</small><b>${money(productPrice(product))}</b></span>
              <button class="product-action" type="button" data-product="${product.id}">Personalizar</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderBadges() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  dom.cartBadge.textContent = String(count);
  dom.bottomCartBadge.textContent = String(count);
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  state.current = {
    product,
    sizeIndex: 0,
    qty: 1,
    flavor: "",
    addons: [],
    removes: [],
    note: "",
  };
  renderProductSheet();
  dom.productDialog.showModal();
}

function renderProductSheet() {
  const current = state.current;
  if (!current) return;
  const product = current.product;
  const needsFlavor = ["tacas", "mix", "kids", "casquinhas", "milkshakes", "copos"].includes(product.category);

  dom.productSheet.innerHTML = `
    <section class="sheet-body">
      <div class="sheet-hero">
        <img class="sheet-product-img" src="${image(product.image)}" alt="${product.name}" />
        <h2 class="sheet-title">${product.name}</h2>
        <p class="sheet-desc">${product.desc}</p>
      </div>

      <div class="option-group">
        <h3>Tamanho</h3>
        <div class="option-grid">
          ${product.sizes
            .map(
              (size, index) => `
                <button class="option-button ${current.sizeIndex === index ? "is-selected" : ""}" type="button" data-size="${index}">
                  ${size.label}<br />${money(size.price)}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>

      ${
        needsFlavor
          ? `
            <div class="option-group">
              <h3>Sabor</h3>
              <div class="option-grid">
                ${flavors
                  .map(
                    (flavor) => `
                      <button class="option-button ${current.flavor === flavor ? "is-selected" : ""}" type="button" data-flavor="${flavor}">
                        ${flavor}
                      </button>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          `
          : ""
      }

      <div class="option-group">
        <h3>Adicionar algo</h3>
        <div class="option-grid">
          ${addons
            .map(
              (addon) => `
                <button class="option-button ${current.addons.includes(addon.id) ? "is-selected" : ""}" type="button" data-addon="${addon.id}">
                  ${addon.label}<br />+${money(addon.price)}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>

      <div class="option-group">
        <h3>Remover ingredientes</h3>
        <div class="option-grid">
          ${removables
            .map(
              (item) => `
                <button class="option-button ${current.removes.includes(item) ? "is-selected" : ""}" type="button" data-remove="${item}">
                  Sem ${item}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>

      <div class="option-group">
        <h3>Quantidade</h3>
        <div class="quantity-row">
          <button type="button" data-qty="-1" aria-label="Diminuir">-</button>
          <span>${current.qty}</span>
          <button type="button" data-qty="1" aria-label="Aumentar">+</button>
        </div>
      </div>

      <div class="option-group">
        <h3>Observação</h3>
        <textarea class="note-field" rows="3" placeholder="Ex: pouca calda, separar cobertura" data-note>${current.note}</textarea>
      </div>

      <div class="sheet-total">
        <div class="total-line">
          <span>Total</span>
          <strong>${money(currentTotal())}</strong>
        </div>
        <button class="sheet-primary" type="button" data-add-cart>Adicionar ao carrinho</button>
      </div>
    </section>
  `;
}

function addCurrentToCart() {
  const current = state.current;
  if (!current) return;
  const size = current.product.sizes[current.sizeIndex];
  const selectedAddons = current.addons
    .map((id) => addons.find((addon) => addon.id === id))
    .filter(Boolean);

  state.cart.push({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    productId: current.product.id,
    name: current.product.name,
    image: current.product.image,
    size: size.label,
    flavor: current.flavor,
    qty: current.qty,
    addons: selectedAddons,
    removes: [...current.removes],
    note: current.note.trim(),
    total: currentTotal(),
  });

  renderBadges();
  dom.productDialog.close();
  openCart();
}

function updateCartQty(id, delta) {
  const item = state.cart.find((cartItem) => cartItem.id === id);
  if (!item) return;
  const unit = item.total / item.qty;
  item.qty = Math.max(1, item.qty + delta);
  item.total = unit * item.qty;
  renderBadges();
  renderCart();
}

function removeCartItem(id) {
  state.cart = state.cart.filter((item) => item.id !== id);
  renderBadges();
  renderCart();
}

function openCart() {
  renderCart();
  dom.cartDialog.showModal();
}

function itemDetails(item) {
  const lines = [item.size];
  if (item.flavor) lines.push(`Sabor: ${item.flavor}`);
  if (item.addons.length) lines.push(`Adicionais: ${item.addons.map((addon) => addon.label).join(", ")}`);
  if (item.removes.length) lines.push(`Remover: ${item.removes.join(", ")}`);
  if (item.note) lines.push(`Obs: ${item.note}`);
  return lines.join(" · ");
}

function renderCart() {
  if (!state.cart.length) {
    dom.cartSheet.innerHTML = `
      <section class="sheet-body">
        <h2 class="cart-title">Seu pedido</h2>
        <div class="empty">Seu carrinho está vazio.</div>
        <button class="sheet-primary" type="button" data-close-cart>Escolher produtos</button>
      </section>
    `;
    return;
  }

  dom.cartSheet.innerHTML = `
    <section class="sheet-body">
      <h2 class="cart-title">Seu pedido</h2>
      <div class="cart-items">
        ${state.cart
          .map(
            (item) => `
              <article class="cart-item">
                <img src="${image(item.image)}" alt="${item.name}" />
                <div>
                  <h3>${item.name}</h3>
                  <p>${itemDetails(item)}</p>
                  <div class="cart-item-actions">
                    <button type="button" data-cart-qty="${item.id}" data-delta="-1">-</button>
                    <strong>${item.qty}</strong>
                    <button type="button" data-cart-qty="${item.id}" data-delta="1">+</button>
                    <button type="button" data-remove-cart="${item.id}">Remover</button>
                  </div>
                  <strong>${money(item.total)}</strong>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>

      <div class="cart-fields">
        <label>
          Nome
          <input class="cart-field" id="customerName" type="text" placeholder="Nome para o pedido" />
        </label>
        <label>
          Entrega
          <select class="cart-field" id="deliveryMode">
            <option value="Delivery">Delivery</option>
            <option value="Retirada no balcão">Retirada no balcão</option>
          </select>
        </label>
        <label>
          Endereço ou observação
          <textarea class="cart-field" id="orderNote" placeholder="Rua, número, bairro, troco ou observação"></textarea>
        </label>
      </div>

      <div class="sheet-total">
        <div class="total-line">
          <span>Total</span>
          <strong>${money(cartTotal())}</strong>
        </div>
        <a class="sheet-primary" id="checkoutLink" href="${whatsappLink()}" target="_blank" rel="noreferrer">
          Enviar pedido no WhatsApp
        </a>
      </div>
    </section>
  `;
}

function whatsappLink() {
  const name = document.querySelector("#customerName")?.value.trim();
  const delivery = document.querySelector("#deliveryMode")?.value || "Delivery";
  const note = document.querySelector("#orderNote")?.value.trim();
  const lines = ["Olá! Quero fazer um pedido na Quero Bis:"];

  state.cart.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.qty}x ${item.name} - ${itemDetails(item)} - ${money(item.total)}`);
  });

  lines.push(`Total: ${money(cartTotal())}`);
  if (name) lines.push(`Nome: ${name}`);
  lines.push(`Entrega: ${delivery}`);
  if (note) lines.push(`Observação/endereço: ${note}`);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function directWhatsapp() {
  const text = "Olá! Quero fazer um pedido na Quero Bis.";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
}

function setupEvents() {
  document.addEventListener("click", (event) => {
    const scrollButton = event.target.closest("[data-scroll]");
    if (scrollButton) {
      document.querySelector(scrollButton.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
    }

    const categoryButton = event.target.closest("[data-category]");
    if (categoryButton) {
      state.category = categoryButton.dataset.category;
      renderCategories();
      renderProducts();
      document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const productButton = event.target.closest("[data-product]");
    if (productButton) openProduct(productButton.dataset.product);

    if (event.target.closest("[data-build-acai]")) openProduct("acai-monte");
    if (event.target.closest("[data-open-cart]")) openCart();
    if (event.target.closest("[data-whatsapp-direct]")) directWhatsapp();
    if (event.target.closest("[data-close-cart]")) dom.cartDialog.close();

    const sizeButton = event.target.closest("[data-size]");
    if (sizeButton && state.current) {
      state.current.sizeIndex = Number(sizeButton.dataset.size);
      renderProductSheet();
    }

    const flavorButton = event.target.closest("[data-flavor]");
    if (flavorButton && state.current) {
      state.current.flavor = flavorButton.dataset.flavor;
      renderProductSheet();
    }

    const addonButton = event.target.closest("[data-addon]");
    if (addonButton && state.current) {
      const id = addonButton.dataset.addon;
      state.current.addons = state.current.addons.includes(id)
        ? state.current.addons.filter((item) => item !== id)
        : [...state.current.addons, id];
      renderProductSheet();
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton && state.current) {
      const item = removeButton.dataset.remove;
      state.current.removes = state.current.removes.includes(item)
        ? state.current.removes.filter((value) => value !== item)
        : [...state.current.removes, item];
      renderProductSheet();
    }

    const qtyButton = event.target.closest("[data-qty]");
    if (qtyButton && state.current) {
      state.current.qty = Math.max(1, state.current.qty + Number(qtyButton.dataset.qty));
      renderProductSheet();
    }

    if (event.target.closest("[data-add-cart]")) addCurrentToCart();

    const cartQty = event.target.closest("[data-cart-qty]");
    if (cartQty) updateCartQty(cartQty.dataset.cartQty, Number(cartQty.dataset.delta));

    const removeCart = event.target.closest("[data-remove-cart]");
    if (removeCart) removeCartItem(removeCart.dataset.removeCart);
  });

  document.addEventListener("input", (event) => {
    if (event.target === dom.searchInput) {
      state.search = event.target.value;
      renderProducts();
    }

    if (event.target.matches("[data-note]") && state.current) {
      state.current.note = event.target.value;
    }

    if (event.target.matches("#customerName, #deliveryMode, #orderNote")) {
      const link = document.querySelector("#checkoutLink");
      if (link) link.href = whatsappLink();
    }
  });
}

function init() {
  renderCategories();
  renderProducts();
  renderBadges();
  setupEvents();
}

init();
