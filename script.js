/* =========================
   ЭЛЕМЕНТЫ
========================= */

const shoppingForm =
  document.getElementById("shoppingForm");

const currentPriceForm =
  document.getElementById("currentPriceForm");


const toggleProductFormButton =
  document.getElementById(
    "toggleProductFormButton"
  );

const productFormContainer =
  document.getElementById(
    "productFormContainer"
  );

const productFormArrow =
  document.getElementById(
    "productFormArrow"
  );


const toggleCurrentPriceButton =
  document.getElementById(
    "toggleCurrentPriceButton"
  );

const currentPriceContainer =
  document.getElementById(
    "currentPriceContainer"
  );

const currentPriceArrow =
  document.getElementById(
    "currentPriceArrow"
  );


const productName =
  document.getElementById("productName");

const category =
  document.getElementById("category");

const quantity =
  document.getElementById("quantity");

const unit =
  document.getElementById("unit");

const price =
  document.getElementById("price");

const purchaseDate =
  document.getElementById("purchaseDate");

const storeName =
  document.getElementById("storeName");


const currentProductName =
  document.getElementById(
    "currentProductName"
  );

const currentCategory =
  document.getElementById(
    "currentCategory"
  );

const currentUnit =
  document.getElementById(
    "currentUnit"
  );

const currentPrice =
  document.getElementById(
    "currentPrice"
  );

const currentStore =
  document.getElementById(
    "currentStore"
  );

const currentPriceDate =
  document.getElementById(
    "currentPriceDate"
  );


const needList =
  document.getElementById("needList");

const homeList =
  document.getElementById("homeList");

const usedList =
  document.getElementById("usedList");

const priceComparisonList =
  document.getElementById(
    "priceComparisonList"
  );

const inflationList =
  document.getElementById(
    "inflationList"
  );


const priceSearchInput =
  document.getElementById(
    "priceSearchInput"
  );

const inflationSearchInput =
  document.getElementById(
    "inflationSearchInput"
  );

const priceCategoryButtons =
  document.querySelectorAll(
    ".price-category-button"
  );


const needCount =
  document.getElementById("needCount");

const homeCount =
  document.getElementById("homeCount");

const spentTotal =
  document.getElementById("spentTotal");

const monthlyBudget =
  document.getElementById(
    "monthlyBudget"
  );

const remainingBudget =
  document.getElementById(
    "remainingBudget"
  );


const budgetInput =
  document.getElementById(
    "budgetInput"
  );

const saveBudgetButton =
  document.getElementById(
    "saveBudgetButton"
  );


const budgetPercentBadge =
  document.getElementById(
    "budgetPercentBadge"
  );

const budgetPercentText =
  document.getElementById(
    "budgetPercentText"
  );

const budgetProgressBar =
  document.getElementById(
    "budgetProgressBar"
  );

const analyticsSpent =
  document.getElementById(
    "analyticsSpent"
  );

const analyticsRemaining =
  document.getElementById(
    "analyticsRemaining"
  );

const topCategory =
  document.getElementById(
    "topCategory"
  );

const categoryChart =
  document.getElementById(
    "categoryChart"
  );


const todayUsage =
  document.getElementById(
    "todayUsage"
  );

const weekUsage =
  document.getElementById(
    "weekUsage"
  );

const monthUsage =
  document.getElementById(
    "monthUsage"
  );


const needTab =
  document.getElementById("needTab");

const homeTab =
  document.getElementById("homeTab");

const usedTab =
  document.getElementById("usedTab");

const pricesTab =
  document.getElementById("pricesTab");

const inflationTab =
  document.getElementById(
    "inflationTab"
  );


const needSection =
  document.getElementById(
    "needSection"
  );

const homeSection =
  document.getElementById(
    "homeSection"
  );

const usedSection =
  document.getElementById(
    "usedSection"
  );

const pricesSection =
  document.getElementById(
    "pricesSection"
  );

const inflationSection =
  document.getElementById(
    "inflationSection"
  );


const clearNeedButton =
  document.getElementById(
    "clearNeedButton"
  );

const clearHomeButton =
  document.getElementById(
    "clearHomeButton"
  );

const clearUsedButton =
  document.getElementById(
    "clearUsedButton"
  );


/* =========================
   ДАННЫЕ
========================= */

let needItems =
  JSON.parse(
    localStorage.getItem("needItems")
  ) || [];

let homeItems =
  JSON.parse(
    localStorage.getItem("homeItems")
  ) || [];

let usedItems =
  JSON.parse(
    localStorage.getItem("usedItems")
  ) || [];

let purchaseHistory =
  JSON.parse(
    localStorage.getItem(
      "purchaseHistory"
    )
  ) || [];

let priceHistory =
  JSON.parse(
    localStorage.getItem(
      "priceHistory"
    )
  ) || [];


/*
  ТЕКУЩИЕ ЦЕНЫ МАГАЗИНОВ

  Это НЕ покупки.
*/

let currentPriceHistory =
  JSON.parse(
    localStorage.getItem(
      "currentPriceHistory"
    )
  ) || [];


let budget =
  Number(
    localStorage.getItem(
      "shoppingBudget"
    )
  ) || 0;


let currentPriceCategory =
  "Все";

let expandedProducts =
  new Set();


/* =========================
   СВОРАЧИВАЕМЫЕ ФОРМЫ
========================= */

toggleProductFormButton
  .addEventListener(
    "click",
    function () {

      toggleContainer(
        productFormContainer,
        productFormArrow
      );

    }
  );


toggleCurrentPriceButton
  .addEventListener(
    "click",
    function () {

      toggleContainer(
        currentPriceContainer,
        currentPriceArrow
      );

    }
  );


function toggleContainer(
  container,
  arrow
) {

  const hidden =
    container.classList
      .contains("hidden");


  if (hidden) {

    container.classList
      .remove("hidden");

    arrow.textContent =
      "▲";

  } else {

    container.classList
      .add("hidden");

    arrow.textContent =
      "▼";

  }

}


/* =========================
   СОХРАНЕНИЕ
========================= */

function saveData() {

  localStorage.setItem(
    "needItems",
    JSON.stringify(needItems)
  );

  localStorage.setItem(
    "homeItems",
    JSON.stringify(homeItems)
  );

  localStorage.setItem(
    "usedItems",
    JSON.stringify(usedItems)
  );

  localStorage.setItem(
    "purchaseHistory",
    JSON.stringify(purchaseHistory)
  );

  localStorage.setItem(
    "priceHistory",
    JSON.stringify(priceHistory)
  );

  localStorage.setItem(
    "currentPriceHistory",
    JSON.stringify(
      currentPriceHistory
    )
  );

}


/* =========================
   ДАТА
========================= */

function getCurrentDate() {

  const now =
    new Date();

  const year =
    now.getFullYear();

  const month =
    String(
      now.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      now.getDate()
    ).padStart(2, "0");

  return `${year}-${month}-${day}`;

}


function formatDate(date) {

  if (!date) {
    return "Не указана";
  }

  const parts =
    date.split("-");

  if (
    parts.length !== 3
  ) {
    return date;
  }

  return (
    parts[2] +
    "." +
    parts[1] +
    "." +
    parts[0]
  );

}


function parseLocalDate(date) {

  const parts =
    date.split("-");

  return new Date(
    Number(parts[0]),
    Number(parts[1]) - 1,
    Number(parts[2])
  );

}


/* =========================
   ФОРМАТ
========================= */

function formatMoney(amount) {

  return Number(amount)
    .toLocaleString(
      "ru-RU",
      {
        maximumFractionDigits: 2
      }
    ) + " ₸";

}


function formatQuantity(value) {

  return Number(value)
    .toLocaleString(
      "ru-RU",
      {
        maximumFractionDigits: 2
      }
    );

}


function formatPercent(value) {

  return Number(value)
    .toLocaleString(
      "ru-RU",
      {
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
      }
    ) + "%";

}


function getCategoryIcon(name) {

  const icons = {
    "Овощи": "🥕",
    "Фрукты": "🍎",
    "Мясо": "🥩",
    "Молочные продукты": "🥛",
    "Продукты": "🍞",
    "Бытовая химия": "🧴",
    "Для дома": "🧻",
    "Другое": "📦"
  };

  return icons[name] || "🛒";

}


/* =========================
   ДОБАВИТЬ ТОВАР
========================= */

shoppingForm.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();


    const item = {

      id:
        Date.now(),

      name:
        productName.value.trim(),

      category:
        category.value,

      quantity:
        Number(quantity.value),

      unit:
        unit.value,

      price:
        Number(price.value),

      date:
        purchaseDate.value,

      store:
        storeName.value.trim()

    };


    if (
      !item.name ||
      !item.store ||
      item.quantity <= 0 ||
      item.price < 0
    ) {

      alert(
        "Проверьте данные товара."
      );

      return;

    }


    needItems.unshift(item);

    saveData();

    shoppingForm.reset();

    quantity.value = 1;

    category.value =
      "Овощи";

    unit.value =
      "шт";

    purchaseDate.value =
      getCurrentDate();


    productFormContainer
      .classList
      .add("hidden");

    productFormArrow.textContent =
      "▼";


    renderAll();

  }
);


/* =========================
   ДОБАВИТЬ ТЕКУЩУЮ ЦЕНУ
========================= */

currentPriceForm.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();


    const record = {

      id:
        Date.now(),

      name:
        currentProductName
          .value
          .trim(),

      category:
        currentCategory.value,

      unit:
        currentUnit.value,

      price:
        Number(
          currentPrice.value
        ),

      store:
        currentStore
          .value
          .trim(),

      date:
        currentPriceDate.value

    };


    if (
      !record.name ||
      !record.store ||
      record.price < 0
    ) {

      alert(
        "Проверьте текущую цену."
      );

      return;

    }


    currentPriceHistory.unshift(
      record
    );


    saveData();


    currentPriceForm.reset();

    currentCategory.value =
      "Овощи";

    currentUnit.value =
      "шт";

    currentPriceDate.value =
      getCurrentDate();


    currentPriceContainer
      .classList
      .add("hidden");

    currentPriceArrow
      .textContent =
      "▼";


    renderAll();

    showTab("prices");

  }
);


/* =========================
   НУЖНО КУПИТЬ
========================= */

function renderNeedItems() {

  needList.innerHTML = "";


  if (
    needItems.length === 0
  ) {

    needList.innerHTML = `
      <div class="empty-message">
        🛒 Список покупок пуст.
      </div>
    `;

    return;

  }


  needItems.forEach(
    function (item) {

      const total =
        Number(item.quantity) *
        Number(item.price);


      const card =
        document.createElement(
          "div"
        );

      card.className =
        "product-card";


      card.innerHTML = `
        <div class="product-info">

          <div class="product-name">
            ${escapeHtml(item.name)}
          </div>

          <div class="product-category">

            ${getCategoryIcon(item.category)}

            ${escapeHtml(item.category)}

          </div>

          <div class="product-details">

            📦 Нужно:
            ${formatQuantity(item.quantity)}
            ${escapeHtml(item.unit)}

            <br>

            💵 Плановая цена:
            ${formatMoney(item.price)}
            /
            ${escapeHtml(item.unit)}

            <br>

            🏪 Магазин:
            ${escapeHtml(item.store)}

            <br>

            📅 Дата:
            ${formatDate(item.date)}

          </div>


          <div class="product-total">

            План:
            ${formatMoney(total)}

          </div>

        </div>


        <div class="product-actions">

          <button
            class="home-button"
            type="button"
            onclick="moveToHome(${item.id})"
          >
            🏠 Куплено
          </button>

          <button
            class="delete-button"
            type="button"
            onclick="deleteNeedItem(${item.id})"
          >
            🗑️ Удалить
          </button>

        </div>
      `;


      needList.appendChild(
        card
      );

    }
  );

}


/* =========================
   КУПЛЕНО
========================= */

function moveToHome(id) {

  const item =
    needItems.find(
      item =>
        item.id === id
    );


  if (!item) {
    return;
  }


  const planned =
    Number(item.quantity);


  const quantityAnswer =
    prompt(
      "Сколько реально купили?\n\n" +
      "Нужно: " +
      formatQuantity(planned) +
      " " +
      item.unit,
      String(planned)
    );


  if (
    quantityAnswer === null
  ) {
    return;
  }


  const bought =
    Number(
      String(quantityAnswer)
        .replace(",", ".")
    );


  if (
    !Number.isFinite(bought) ||
    bought <= 0 ||
    bought > planned
  ) {

    alert(
      "Проверьте количество."
    );

    return;

  }


  const priceAnswer =
    prompt(
      "Фактическая цена за " +
      item.unit,
      String(item.price)
    );


  if (
    priceAnswer === null
  ) {
    return;
  }


  const actualPrice =
    Number(
      String(priceAnswer)
        .replace(",", ".")
    );


  if (
    !Number.isFinite(actualPrice) ||
    actualPrice < 0
  ) {
    return;
  }


  const storeAnswer =
    prompt(
      "В каком магазине купили?",
      item.store
    );


  if (
    storeAnswer === null
  ) {
    return;
  }


  const actualStore =
    storeAnswer.trim();


  const today =
    getCurrentDate();


  /* РЕАЛЬНАЯ ПОКУПКА */

  purchaseHistory.unshift({

    id:
      Date.now(),

    name:
      item.name,

    category:
      item.category,

    quantity:
      bought,

    unit:
      item.unit,

    price:
      actualPrice,

    total:
      bought *
      actualPrice,

    store:
      actualStore,

    date:
      today

  });


  /*
    ЦЕНА ПОКУПКИ
    тоже сохраняется в истории
  */

  priceHistory.unshift({

    id:
      Date.now() + 1,

    name:
      item.name,

    category:
      item.category,

    unit:
      item.unit,

    price:
      actualPrice,

    store:
      actualStore,

    date:
      today

  });


  const existing =
    homeItems.find(
      homeItem =>
        homeItem.name
          .trim()
          .toLowerCase()
        ===
        item.name
          .trim()
          .toLowerCase()
        &&
        homeItem.unit ===
        item.unit
    );


  if (existing) {

    existing.quantity =
      Number(
        (
          Number(existing.quantity) +
          bought
        ).toFixed(2)
      );

    existing.price =
      actualPrice;

    existing.store =
      actualStore;

    existing.date =
      today;

  } else {

    homeItems.unshift({

      ...item,

      id:
        Date.now() + 2,

      quantity:
        bought,

      price:
        actualPrice,

      store:
        actualStore,

      date:
        today

    });

  }


  const remaining =
    Number(
      (
        planned -
        bought
      ).toFixed(2)
    );


  if (
    remaining <= 0
  ) {

    needItems =
      needItems.filter(
        x =>
          x.id !== id
      );

  } else {

    item.quantity =
      remaining;

  }


  saveData();

  renderAll();

}


/* =========================
   УЖЕ ДОМА
========================= */

function renderHomeItems() {

  homeList.innerHTML = "";


  if (
    homeItems.length === 0
  ) {

    homeList.innerHTML = `
      <div class="empty-message">
        🏠 Домашних запасов пока нет.
      </div>
    `;

    return;

  }


  homeItems.forEach(
    function (item) {

      const card =
        document.createElement(
          "div"
        );

      card.className =
        "product-card";


      card.innerHTML = `
        <div class="product-info">

          <div class="product-name">
            ${escapeHtml(item.name)}
          </div>

          <div class="product-category">

            ${getCategoryIcon(item.category)}

            ${escapeHtml(item.category)}

          </div>

          <div class="product-details">

            💵 Последняя цена покупки:
            ${formatMoney(item.price)}
            /
            ${escapeHtml(item.unit)}

            <br>

            🏪 Последний магазин:
            ${escapeHtml(item.store)}

            <br>

            📅
            ${formatDate(item.date)}

          </div>


          <div class="stock-box">

            <span class="stock-label">
              Осталось дома
            </span>

            <strong class="stock-value">

              ${formatQuantity(item.quantity)}

              ${escapeHtml(item.unit)}

            </strong>

          </div>

        </div>


        <div class="product-actions">

          <button
            class="use-button"
            onclick="useProduct(${item.id})"
          >
            ➖ Израсходовать
          </button>

          <button
            class="buy-button"
            onclick="buyAgain(${item.id})"
          >
            🛒 Купить снова
          </button>

          <button
            class="delete-button"
            onclick="deleteHomeItem(${item.id})"
          >
            🗑️ Удалить
          </button>

        </div>
      `;


      homeList.appendChild(
        card
      );

    }
  );

}


/* =========================
   ИЗРАСХОДОВАТЬ
========================= */

function useProduct(id) {

  const item =
    homeItems.find(
      x =>
        x.id === id
    );


  if (!item) {
    return;
  }


  const answer =
    prompt(
      "Сколько израсходовали?\n\n" +
      "Есть дома: " +
      formatQuantity(item.quantity) +
      " " +
      item.unit,
      "1"
    );


  if (
    answer === null
  ) {
    return;
  }


  const used =
    Number(
      String(answer)
        .replace(",", ".")
    );


  if (
    !Number.isFinite(used) ||
    used <= 0 ||
    used > Number(item.quantity)
  ) {

    alert(
      "Проверьте количество."
    );

    return;

  }


  usedItems.unshift({

    id:
      Date.now(),

    name:
      item.name,

    category:
      item.category,

    quantity:
      used,

    unit:
      item.unit,

    price:
      Number(item.price),

    estimatedValue:
      used *
      Number(item.price),

    date:
      getCurrentDate()

  });


  item.quantity =
    Number(
      (
        Number(item.quantity) -
        used
      ).toFixed(2)
    );


  if (
    item.quantity <= 0
  ) {

    homeItems =
      homeItems.filter(
        x =>
          x.id !== id
      );

  }


  saveData();

  renderAll();

}


/* =========================
   КУПИТЬ СНОВА
========================= */

function buyAgain(id) {

  const item =
    homeItems.find(
      x =>
        x.id === id
    );


  if (!item) {
    return;
  }


  needItems.unshift({

    ...item,

    id:
      Date.now(),

    quantity:
      1,

    date:
      getCurrentDate()

  });


  saveData();

  renderAll();

  showTab("need");

}


/* =========================
   ИСПОЛЬЗОВАНО
========================= */

function renderUsedItems() {

  usedList.innerHTML = "";


  if (
    usedItems.length === 0
  ) {

    usedList.innerHTML = `
      <div class="empty-message">
        📊 История использования пуста.
      </div>
    `;

    return;

  }


  usedItems.forEach(
    function (item) {

      usedList.innerHTML += `
        <div class="used-card">

          <div class="used-top">

            <strong>

              ${getCategoryIcon(item.category)}

              ${escapeHtml(item.name)}

            </strong>

            <span class="used-quantity">

              −
              ${formatQuantity(item.quantity)}

              ${escapeHtml(item.unit)}

            </span>

          </div>


          <div class="used-meta">

            📅
            ${formatDate(item.date)}

            <br>

            Примерная стоимость:
            ${formatMoney(item.estimatedValue)}

          </div>

        </div>
      `;

    }
  );

}


/* =========================
   СТАТИСТИКА ИСПОЛЬЗОВАНИЯ
========================= */

function createUsageSummary(records) {

  if (
    records.length === 0
  ) {
    return "Нет данных";
  }


  const totals = {};


  records.forEach(
    function (item) {

      totals[item.unit] =
        (
          totals[item.unit] ||
          0
        )
        +
        Number(item.quantity);

    }
  );


  return Object
    .entries(totals)
    .map(
      ([unitName, value]) => `
        <span class="usage-value">

          ${formatQuantity(value)}

          ${escapeHtml(unitName)}

        </span>
      `
    )
    .join("");

}


function calculateUsageStatistics() {

  const now =
    new Date();

  now.setHours(
    0,
    0,
    0,
    0
  );


  const weekStart =
    new Date(now);

  weekStart.setDate(
    weekStart.getDate() - 6
  );


  const todayRecords =
    usedItems.filter(
      x =>
        x.date ===
        getCurrentDate()
    );


  const weekRecords =
    usedItems.filter(
      function (item) {

        const d =
          parseLocalDate(
            item.date
          );

        return (
          d >= weekStart &&
          d <= now
        );

      }
    );


  const monthRecords =
    usedItems.filter(
      function (item) {

        const d =
          parseLocalDate(
            item.date
          );

        return (
          d.getMonth() ===
            now.getMonth()
          &&
          d.getFullYear() ===
            now.getFullYear()
        );

      }
    );


  todayUsage.innerHTML =
    createUsageSummary(
      todayRecords
    );

  weekUsage.innerHTML =
    createUsageSummary(
      weekRecords
    );

  monthUsage.innerHTML =
    createUsageSummary(
      monthRecords
    );

}


/* =========================
   АНАЛИТИКА
========================= */

function renderAnalytics() {

  const now =
    new Date();


  const purchases =
    purchaseHistory.filter(
      function (item) {

        const d =
          parseLocalDate(
            item.date
          );

        return (
          d.getMonth() ===
            now.getMonth()
          &&
          d.getFullYear() ===
            now.getFullYear()
        );

      }
    );


  const total =
    purchases.reduce(
      (
        sum,
        item
      ) =>
        sum +
        Number(item.total),
      0
    );


  const remaining =
    budget -
    total;


  const percent =
    budget > 0
      ? (
          total /
          budget
        ) * 100
      : 0;


  spentTotal.textContent =
    formatMoney(total);

  monthlyBudget.textContent =
    formatMoney(budget);

  remainingBudget.textContent =
    formatMoney(remaining);

  analyticsSpent.textContent =
    formatMoney(total);

  analyticsRemaining.textContent =
    formatMoney(remaining);

  budgetPercentText.textContent =
    Math.round(percent) +
    "%";

  budgetPercentBadge.textContent =
    Math.round(percent) +
    "%";

  budgetProgressBar.style.width =
    Math.min(
      percent,
      100
    ) + "%";


  renderCategoryChart(
    purchases,
    total
  );

}


function renderCategoryChart(
  purchases,
  total
) {

  categoryChart.innerHTML =
    "";


  if (
    purchases.length === 0
  ) {

    topCategory.textContent =
      "—";

    categoryChart.innerHTML = `
      <div class="chart-empty">
        Пока нет покупок
        за этот месяц.
      </div>
    `;

    return;

  }


  const categories = {};


  purchases.forEach(
    function (item) {

      categories[item.category] =
        (
          categories[item.category] ||
          0
        )
        +
        Number(item.total);

    }
  );


  const sorted =
    Object
      .entries(categories)
      .sort(
        (a, b) =>
          b[1] - a[1]
      );


  topCategory.textContent =
    getCategoryIcon(
      sorted[0][0]
    )
    +
    " " +
    sorted[0][0];


  sorted.forEach(
    function (
      [name, money]
    ) {

      const percent =
        total > 0
          ? (
              money /
              total
            ) * 100
          : 0;


      categoryChart.innerHTML += `
        <div class="chart-item">

          <div class="chart-item-header">

            <strong>

              ${getCategoryIcon(name)}

              ${escapeHtml(name)}

            </strong>

            <span>

              ${formatMoney(money)}

              ·

              ${percent.toFixed(1)}%

            </span>

          </div>


          <div class="chart-track">

            <div
              class="chart-bar"
              style="
                width:
                ${percent}%;
              "
            ></div>

          </div>

        </div>
      `;

    }
  );

}


/* =========================
   ЦЕНЫ МАГАЗИНОВ
========================= */

function renderPriceComparison() {

  const search =
    priceSearchInput
      .value
      .trim()
      .toLowerCase();


  priceComparisonList.innerHTML =
    "";


  /*
    Берём товары и из реальных
    покупок, и из текущих цен.
  */

  const allPriceRecords =
    [];


  priceHistory.forEach(
    function (record) {

      allPriceRecords.push({

        ...record,

        source:
          "purchase"

      });

    }
  );


  currentPriceHistory.forEach(
    function (record) {

      allPriceRecords.push({

        ...record,

        source:
          "current"

      });

    }
  );


  const categories = {};


  allPriceRecords.forEach(
    function (record) {

      if (
        currentPriceCategory !==
          "Все"
        &&
        record.category !==
          currentPriceCategory
      ) {
        return;
      }


      const searchable =
        (
          record.name +
          " " +
          record.store
        ).toLowerCase();


      if (
        search &&
        !searchable.includes(search)
      ) {
        return;
      }


      if (
        !categories[
          record.category
        ]
      ) {

        categories[
          record.category
        ] = {};

      }


      const productKey =
        record.name
          .trim()
          .toLowerCase()
        +
        "|" +
        record.unit;


      if (
        !categories[
          record.category
        ][productKey]
      ) {

        categories[
          record.category
        ][productKey] = {

          name:
            record.name,

          category:
            record.category,

          unit:
            record.unit,

          stores:
            {}

        };

      }


      const storeKey =
        record.store
          .trim()
          .toLowerCase();


      if (
        !categories[
          record.category
        ][productKey]
          .stores[
            storeKey
          ]
      ) {

        categories[
          record.category
        ][productKey]
          .stores[
            storeKey
          ] = {

          name:
            record.store,

          purchasePrices:
            [],

          currentPrices:
            []

        };

      }


      if (
        record.source ===
        "purchase"
      ) {

        categories[
          record.category
        ][productKey]
          .stores[
            storeKey
          ]
          .purchasePrices
          .push(record);

      } else {

        categories[
          record.category
        ][productKey]
          .stores[
            storeKey
          ]
          .currentPrices
          .push(record);

      }

    }
  );


  const categoryEntries =
    Object.entries(categories);


  if (
    categoryEntries.length ===
    0
  ) {

    priceComparisonList.innerHTML = `
      <div class="empty-message">
        Цены пока не добавлены.
      </div>
    `;

    return;

  }


  categoryEntries.forEach(
    function (
      [
        categoryName,
        products
      ]
    ) {

      const categorySection =
        document.createElement(
          "div"
        );


      categorySection.className =
        "price-category-section";


      categorySection.innerHTML = `
        <h3 class="price-category-title">

          ${getCategoryIcon(categoryName)}

          ${escapeHtml(categoryName)}

        </h3>
      `;


      Object.values(products)
        .forEach(
          function (product) {

            const stores =
              Object.values(
                product.stores
              )
              .map(
                function (store) {

                  store.purchasePrices.sort(
                    (
                      a,
                      b
                    ) =>
                      parseLocalDate(a.date) -
                      parseLocalDate(b.date)
                  );


                  store.currentPrices.sort(
                    (
                      a,
                      b
                    ) =>
                      parseLocalDate(a.date) -
                      parseLocalDate(b.date)
                  );


                  const latestPurchase =
                    store.purchasePrices.length
                      ? store.purchasePrices[
                          store.purchasePrices.length - 1
                        ]
                      : null;


                  const latestCurrent =
                    store.currentPrices.length
                      ? store.currentPrices[
                          store.currentPrices.length - 1
                        ]
                      : null;


                  const comparisonPrice =
                    latestCurrent
                      ? Number(
                          latestCurrent.price
                        )
                      : latestPurchase
                        ? Number(
                            latestPurchase.price
                          )
                        : Infinity;


                  return {

                    ...store,

                    latestPurchase:
                      latestPurchase,

                    latestCurrent:
                      latestCurrent,

                    comparisonPrice:
                      comparisonPrice

                  };

                }
              )
              .sort(
                (
                  a,
                  b
                ) =>
                  a.comparisonPrice -
                  b.comparisonPrice
              );


            const cheapest =
              stores[0]
                .comparisonPrice;


            const expensive =
              stores[
                stores.length - 1
              ]
              .comparisonPrice;


            const productId =
              (
                product.category +
                product.name +
                product.unit
              )
              .toLowerCase()
              .replace(
                /[^a-zа-я0-9]/gi,
                "-"
              );


            const expanded =
              expandedProducts.has(
                productId
              );


            let storesHtml =
              "";


            stores.forEach(
              function (store) {

                const cheap =
                  store.comparisonPrice ===
                  cheapest;


                const costly =
                  stores.length > 1 &&
                  store.comparisonPrice ===
                  expensive;


                const purchase =
                  store.latestPurchase;


                const current =
                  store.latestCurrent;


                let differenceHtml =
                  "";


                if (
                  purchase &&
                  current
                ) {

                  const difference =
                    Number(current.price) -
                    Number(purchase.price);


                  const percent =
                    Number(purchase.price) > 0
                      ? (
                          difference /
                          Number(purchase.price)
                        ) * 100
                      : 0;


                  let diffClass =
                    "diff-same";


                  if (
                    difference > 0
                  ) {
                    diffClass =
                      "diff-up";
                  }


                  if (
                    difference < 0
                  ) {
                    diffClass =
                      "diff-down";
                  }


                  differenceHtml = `
                    <div
                      class="
                        price-difference
                        ${diffClass}
                      "
                    >

                      ${
                        difference > 0
                          ? "Подорожало: +"
                          : difference < 0
                            ? "Подешевело: "
                            : "Цена не изменилась: "
                      }

                      ${formatMoney(difference)}

                      ·

                      ${
                        percent > 0
                          ? "+"
                          : ""
                      }

                      ${formatPercent(percent)}

                    </div>
                  `;

                }


                /*
                  ИЩЕМ РЕАЛЬНЫЕ ПОКУПКИ
                  ЭТОГО ТОВАРА В ЭТОМ МАГАЗИНЕ
                */

                const purchases =
                  purchaseHistory.filter(
                    function (item) {

                      return (
                        item.name
                          .trim()
                          .toLowerCase()
                        ===
                        product.name
                          .trim()
                          .toLowerCase()

                        &&

                        item.unit ===
                        product.unit

                        &&

                        item.store
                          .trim()
                          .toLowerCase()
                        ===
                        store.name
                          .trim()
                          .toLowerCase()
                      );

                    }
                  );


                let purchaseHtml =
                  "";


                if (
                  purchases.length > 0
                ) {

                  purchaseHtml = `
                    <div class="purchase-info">

                      <div class="purchase-info-title">
                        🛒 Ваши покупки
                      </div>
                  `;


                  purchases
                    .slice()
                    .reverse()
                    .forEach(
                      function (item) {

                        purchaseHtml += `
                          <div class="purchase-row">

                            📅 ${formatDate(item.date)}

                            ·

                            ${formatQuantity(item.quantity)}
                            ${escapeHtml(item.unit)}

                            ×

                            ${formatMoney(item.price)}

                            =

                            <strong>
                              ${formatMoney(item.total)}
                            </strong>

                          </div>
                        `;

                      }
                    );


                  purchaseHtml += `
                    </div>
                  `;

                }


                storesHtml += `
                  <div
                    class="
                      store-card
                      ${cheap ? "cheapest-store" : ""}
                      ${costly ? "expensive-store" : ""}
                    "
                  >

                    <div class="store-card-header">

                      <div class="store-title">

                        🏪
                        ${escapeHtml(store.name)}

                      </div>


                      <div>

                        ${
                          cheap
                            ? `
                              <span
                                class="
                                  store-badge
                                  store-badge-cheap
                                "
                              >
                                Сейчас дешевле
                              </span>
                            `
                            : ""
                        }

                        ${
                          costly
                            ? `
                              <span
                                class="
                                  store-badge
                                  store-badge-high
                                "
                              >
                                Сейчас дороже
                              </span>
                            `
                            : ""
                        }

                      </div>

                    </div>


                    <div class="store-main-price">

                      ${formatMoney(store.comparisonPrice)}

                      /

                      ${escapeHtml(product.unit)}

                    </div>


                    <div class="price-type-row">


                      <div class="price-type-box">

                        <span>
                          Последняя цена покупки
                        </span>

                        ${
                          purchase
                            ? `
                              <strong>

                                ${formatMoney(purchase.price)}

                                /

                                ${escapeHtml(product.unit)}

                              </strong>

                              <small>

                                ${formatDate(purchase.date)}

                              </small>
                            `
                            : `
                              <strong>
                                Нет покупки
                              </strong>
                            `
                        }

                      </div>


                      <div
                        class="
                          price-type-box
                          current-price-box
                        "
                      >

                        <span>
                          Текущая цена
                        </span>

                        ${
                          current
                            ? `
                              <strong>

                                ${formatMoney(current.price)}

                                /

                                ${escapeHtml(product.unit)}

                              </strong>

                              <small>

                                ${formatDate(current.date)}

                              </small>
                            `
                            : `
                              <strong>
                                Не указана
                              </strong>
                            `
                        }

                      </div>

                    </div>


                    ${differenceHtml}

                    ${purchaseHtml}

                  </div>
                `;

              }
            );


            const card =
              document.createElement(
                "div"
              );


            card.className =
              "price-product-card";


            card.innerHTML = `
              <div
                class="price-product-header"
                onclick="
                  togglePriceProduct(
                    '${productId}'
                  )
                "
              >

                <div>

                  <div class="price-product-name">

                    ${escapeHtml(product.name)}

                  </div>

                  <div class="price-product-subtitle">

                    ${stores.length}
                    магазинов

                    ·

                    цена за
                    ${escapeHtml(product.unit)}

                  </div>

                </div>


                <div class="price-product-right">

                  <span class="cheapest-label">

                    от
                    ${formatMoney(cheapest)}

                  </span>

                  <span>

                    ${expanded ? "▲" : "▼"}

                  </span>

                </div>

              </div>


              <div
                class="store-list"
                style="
                  display:
                  ${expanded ? "block" : "none"};
                "
              >

                ${storesHtml}

              </div>
            `;


            categorySection.appendChild(
              card
            );

          }
        );


      priceComparisonList.appendChild(
        categorySection
      );

    }
  );

}


/* =========================
   ОТКРЫТЬ ТОВАР
========================= */

function togglePriceProduct(
  id
) {

  if (
    expandedProducts.has(id)
  ) {

    expandedProducts.delete(id);

  } else {

    expandedProducts.add(id);

  }


  renderPriceComparison();

}


/* =========================
   ФИЛЬТРЫ ЦЕН
========================= */

priceCategoryButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        currentPriceCategory =
          button.dataset
            .priceCategory;


        priceCategoryButtons.forEach(
          item =>
            item.classList.remove(
              "active"
            )
        );


        button.classList.add(
          "active"
        );


        renderPriceComparison();

      }
    );

  }
);


priceSearchInput.addEventListener(
  "input",
  renderPriceComparison
);


/* =========================
   ИНФЛЯЦИЯ
========================= */

function renderInflation() {

  inflationList.innerHTML =
    "";


  const search =
    inflationSearchInput
      .value
      .trim()
      .toLowerCase();


  /*
    Для инфляции объединяем
    цены покупок и текущие цены.
  */

  const records = [

    ...priceHistory,

    ...currentPriceHistory

  ];


  const groups = {};


  records.forEach(
    function (record) {

      const key =
        record.name
          .trim()
          .toLowerCase()
        +
        "|" +
        record.unit
        +
        "|" +
        record.store
          .trim()
          .toLowerCase();


      if (!groups[key]) {
        groups[key] = [];
      }


      groups[key].push(record);

    }
  );


  Object.values(groups)
    .forEach(
      function (items) {

        items.sort(
          (
            a,
            b
          ) =>
            parseLocalDate(a.date) -
            parseLocalDate(b.date)
        );


        const first =
          items[0];

        const last =
          items[
            items.length - 1
          ];


        if (
          search &&
          !(
            last.name
              .toLowerCase()
              .includes(search)
            ||
            last.store
              .toLowerCase()
              .includes(search)
          )
        ) {
          return;
        }


        const firstPrice =
          Number(first.price);

        const lastPrice =
          Number(last.price);


        const difference =
          lastPrice -
          firstPrice;


        const percent =
          firstPrice > 0
            ? (
                difference /
                firstPrice
              ) * 100
            : 0;


        let className =
          "price-same";


        if (
          percent > 0
        ) {
          className =
            "price-up";
        }


        if (
          percent < 0
        ) {
          className =
            "price-down";
        }


        inflationList.innerHTML += `
          <div class="inflation-card">

            <div class="inflation-card-header">

              <div>

                <strong>

                  ${getCategoryIcon(last.category)}

                  ${escapeHtml(last.name)}

                </strong>

                <div class="used-meta">

                  🏪
                  ${escapeHtml(last.store)}

                  <br>

                  ${formatDate(first.date)}
                  →

                  ${formatDate(last.date)}

                  <br>

                  ${formatMoney(firstPrice)}
                  →

                  ${formatMoney(lastPrice)}

                </div>

              </div>


              <div
                class="
                  inflation-percent
                  ${className}
                "
              >

                ${
                  percent > 0
                    ? "+"
                    : ""
                }

                ${formatPercent(percent)}

              </div>

            </div>

          </div>
        `;

      }
    );


  if (
    inflationList.innerHTML ===
    ""
  ) {

    inflationList.innerHTML = `
      <div class="empty-message">
        Пока недостаточно данных.
      </div>
    `;

  }

}


inflationSearchInput.addEventListener(
  "input",
  renderInflation
);


/* =========================
   БЮДЖЕТ
========================= */

saveBudgetButton.addEventListener(
  "click",
  function () {

    const value =
      Number(
        budgetInput.value
      );


    if (
      !Number.isFinite(value) ||
      value < 0
    ) {
      return;
    }


    budget =
      value;


    localStorage.setItem(
      "shoppingBudget",
      String(budget)
    );


    budgetInput.value =
      "";


    renderAll();

  }
);


/* =========================
   УДАЛЕНИЕ
========================= */

function deleteNeedItem(id) {

  if (
    !confirm(
      "Удалить товар?"
    )
  ) {
    return;
  }


  needItems =
    needItems.filter(
      x =>
        x.id !== id
    );


  saveData();

  renderAll();

}


function deleteHomeItem(id) {

  if (
    !confirm(
      "Удалить товар?"
    )
  ) {
    return;
  }


  homeItems =
    homeItems.filter(
      x =>
        x.id !== id
    );


  saveData();

  renderAll();

}


/* =========================
   ОЧИСТКА
========================= */

clearNeedButton.onclick =
  function () {

    if (
      confirm(
        "Очистить список покупок?"
      )
    ) {

      needItems = [];

      saveData();

      renderAll();

    }

  };


clearHomeButton.onclick =
  function () {

    if (
      confirm(
        "Очистить домашние запасы?"
      )
    ) {

      homeItems = [];

      saveData();

      renderAll();

    }

  };


clearUsedButton.onclick =
  function () {

    if (
      confirm(
        "Очистить историю использования?"
      )
    ) {

      usedItems = [];

      saveData();

      renderAll();

    }

  };


/* =========================
   ВКЛАДКИ
========================= */

function showTab(name) {

  const tabs = [

    needTab,
    homeTab,
    usedTab,
    pricesTab,
    inflationTab

  ];


  const sections = [

    needSection,
    homeSection,
    usedSection,
    pricesSection,
    inflationSection

  ];


  tabs.forEach(
    tab =>
      tab.classList.remove(
        "active"
      )
  );


  sections.forEach(
    section =>
      section.classList.add(
        "hidden"
      )
  );


  if (
    name === "need"
  ) {

    needTab.classList.add(
      "active"
    );

    needSection.classList.remove(
      "hidden"
    );

  }


  if (
    name === "home"
  ) {

    homeTab.classList.add(
      "active"
    );

    homeSection.classList.remove(
      "hidden"
    );

  }


  if (
    name === "used"
  ) {

    usedTab.classList.add(
      "active"
    );

    usedSection.classList.remove(
      "hidden"
    );

  }


  if (
    name === "prices"
  ) {

    pricesTab.classList.add(
      "active"
    );

    pricesSection.classList.remove(
      "hidden"
    );

  }


  if (
    name === "inflation"
  ) {

    inflationTab.classList.add(
      "active"
    );

    inflationSection.classList.remove(
      "hidden"
    );

  }

}


needTab.onclick =
  () => showTab("need");

homeTab.onclick =
  () => showTab("home");

usedTab.onclick =
  () => showTab("used");

pricesTab.onclick =
  () => showTab("prices");

inflationTab.onclick =
  () => showTab("inflation");


/* =========================
   ЗАЩИТА
========================= */

function escapeHtml(text) {

  const div =
    document.createElement(
      "div"
    );

  div.textContent =
    String(text);

  return div.innerHTML;

}


/* =========================
   ОБНОВЛЕНИЕ
========================= */

function renderAll() {

  renderNeedItems();

  renderHomeItems();

  renderUsedItems();

  calculateUsageStatistics();

  renderAnalytics();

  renderPriceComparison();

  renderInflation();

  needCount.textContent =
    needItems.length;

  homeCount.textContent =
    homeItems.length;

}


/* =========================
   ЗАПУСК
========================= */

purchaseDate.value =
  getCurrentDate();

currentPriceDate.value =
  getCurrentDate();

renderAll();